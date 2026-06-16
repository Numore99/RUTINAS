# RutFit Mobile

App Expo que envuelve la web publicada en GitHub Pages dentro de un `WebView` para generar APK Android.

## Desarrollo

Desde esta carpeta:

```bash
npm install
npx expo start
```

El APK carga:

```txt
https://numore99.github.io/RUTINAS/
```

Por eso los cambios normales de rutinas, textos, imagenes y estilos se hacen en la web raiz y se publican en GitHub Pages. No hace falta recompilar el APK para esos cambios.

## APK

```bash
npx eas login
npm run build:apk
```

El perfil `preview` en `eas.json` genera un APK instalable.

## Copia local opcional

`npm run sync-web` sigue disponible para copiar la web raiz a `mobile/assets/web/`, pero el contenedor actual usa la URL online.
