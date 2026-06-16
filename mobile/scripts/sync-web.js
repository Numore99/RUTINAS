const fs = require("fs");
const path = require("path");

const mobileRoot = path.resolve(__dirname, "..");
const webRoot = path.resolve(mobileRoot, "..");
const webOut = path.join(mobileRoot, "assets", "web");
const imgIn = path.join(webRoot, "img");
const imgOut = path.join(webOut, "img");
const bundleOut = path.join(mobileRoot, "src", "webBundle.js");

const requiredFiles = ["index.html", "styles.css", "script.js", "firebase-config.js"];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(from, to) {
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
}

function copyDir(from, to) {
  ensureDir(to);
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const source = path.join(from, entry.name);
    const target = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(source, target);
    } else {
      copyFile(source, target);
    }
  }
}

function escapeScript(text) {
  return text.replace(/<\/script/gi, "<\\/script");
}

function dataUri(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg";
  return `data:${mime};base64,${fs.readFileSync(filePath).toString("base64")}`;
}

function buildHtmlBundle() {
  let html = fs.readFileSync(path.join(webRoot, "index.html"), "utf8");
  const css = fs.readFileSync(path.join(webRoot, "styles.css"), "utf8");
  const config = fs.readFileSync(path.join(webRoot, "firebase-config.js"), "utf8");
  let appScript = fs.readFileSync(path.join(webRoot, "script.js"), "utf8");

  for (const file of fs.readdirSync(imgIn)) {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) continue;
    appScript = appScript.split(`img/${file}`).join(dataUri(path.join(imgIn, file)));
  }

  html = html.replace(/<link\s+rel="stylesheet"\s+href="styles\.css"\s*\/?>/i, `<style>\n${css}\n</style>`);
  html = html.replace(/<script\s+src="firebase-config\.js"><\/script>/i, `<script>\n${escapeScript(config)}\n</script>`);
  html = html.replace(/<script\s+src="script\.js"><\/script>/i, `<script>\n${escapeScript(appScript)}\n</script>`);

  ensureDir(path.dirname(bundleOut));
  fs.writeFileSync(bundleOut, `export const WEB_HTML = ${JSON.stringify(html)};\n`, "utf8");
}

function syncWeb() {
  ensureDir(webOut);
  for (const file of requiredFiles) {
    copyFile(path.join(webRoot, file), path.join(webOut, file));
  }
  if (fs.existsSync(imgOut)) fs.rmSync(imgOut, { recursive: true, force: true });
  copyDir(imgIn, imgOut);
  buildHtmlBundle();
  console.log("Synced web app into mobile/assets/web and generated src/webBundle.js");
}

syncWeb();
