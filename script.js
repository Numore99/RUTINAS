const exerciseLibrary = {
  "back-squat": {
    name: "Sentadilla trasera",
    objective: "fuerza",
    goal: "Construir fuerza máxima de piernas para derribos, defensa de derribo y control de cadera.",
    baseSets: "5",
    baseReps: "3-5",
    rest: "2:30",
    technique:
      "Barra firme sobre trapecios, pies estables, abdomen bloqueado y bajada controlada hasta profundidad útil. Sube empujando el suelo, manteniendo rodillas alineadas y torso sólido.",
    mistakes: ["Perder tensión lumbar", "Colapsar rodillas hacia dentro", "Rebotar sin control en la bajada"],
    images: ["img/back-squat-1.jpg", "img/back-squat-2.jpg"]
  },
  "trap-bar-deadlift": {
    name: "Peso muerto con barra hexagonal",
    objective: "fuerza",
    goal: "Mejorar extensión de cadera y fuerza total sin castigar tanto la espalda baja.",
    baseSets: "4-5",
    baseReps: "3-5",
    rest: "2:30",
    technique:
      "Agarra las asas, pecho alto, dorsales activos y empuja el piso hasta bloquear cadera. Baja con control manteniendo la barra centrada.",
    mistakes: ["Tirar con la espalda redondeada", "Hiperextender al bloquear", "Perder contacto del pie completo"],
    images: ["img/trap-bar-deadlift-1.jpg", "img/trap-bar-deadlift-2.jpg"]
  },
  "bench-press": {
    name: "Press de banca",
    objective: "fuerza",
    goal: "Desarrollar empuje horizontal para frames, posteos y ground and pound.",
    baseSets: "4-5",
    baseReps: "3-5",
    rest: "2:00",
    technique:
      "Escápulas juntas, pies firmes y barra bajando al esternón bajo. Empuja en diagonal suave manteniendo muñecas apiladas sobre codos.",
    mistakes: ["Abrir codos en exceso", "Rebotar la barra", "Levantar glúteos del banco"],
    images: ["img/bench-press-1.jpg", "img/bench-press-2.jpg"]
  },
  "weighted-pull-up": {
    name: "Dominada con lastre",
    objective: "fuerza",
    goal: "Aumentar tracción específica para clinch, agarres y control de espalda.",
    baseSets: "4",
    baseReps: "3-6",
    rest: "2:00",
    technique:
      "Inicia colgado con hombros activos, tira los codos hacia las costillas y lleva el pecho a la barra sin balanceo.",
    mistakes: ["Patada de impulso", "Encoger hombros arriba", "No completar la extensión controlada"],
    images: ["img/weighted-pull-up-1.jpg", "img/weighted-pull-up-2.jpg"]
  },
  "front-squat": {
    name: "Sentadilla frontal",
    objective: "fuerza",
    goal: "Reforzar tronco anterior, piernas y postura para scrambles y levantadas.",
    baseSets: "4",
    baseReps: "4",
    rest: "2:00",
    technique:
      "Codos altos, barra apoyada en deltoides y abdomen firme. Baja vertical, pausa breve y sube sin dejar caer el pecho.",
    mistakes: ["Codos caídos", "Talones despegados", "Respirar sin bracing antes de bajar"],
    images: ["img/front-squat-1.jpg", "img/front-squat-2.jpg"]
  },
  "landmine-press": {
    name: "Press landmine",
    objective: "fuerza",
    goal: "Crear empuje diagonal fuerte y seguro para hombros en situaciones de grappling.",
    baseSets: "4",
    baseReps: "5 por lado",
    rest: "1:30",
    technique:
      "Base atlética, costillas abajo y barra cerca del hombro. Empuja hacia arriba y adelante sin rotar el torso.",
    mistakes: ["Arquear la espalda", "Perder la muñeca neutra", "Empujar sin estabilizar la escápula"],
    images: ["img/landmine-press-1.jpg", "img/landmine-press-2.jpg"]
  },
  "med-ball-slam": {
    name: "Lanzamiento de balón medicinal al suelo",
    objective: "potencia",
    goal: "Convertir extensión de cadera y tronco en potencia explosiva repetible.",
    baseSets: "5",
    baseReps: "5",
    rest: "1:15",
    technique:
      "Eleva el balón con cuerpo largo, bloquea abdomen y acelera hacia el suelo usando cadera, dorsales y brazos.",
    mistakes: ["Lanzar solo con brazos", "Perder postura lumbar", "Hacer repeticiones lentas sin intención"],
    images: ["img/med-ball-slam-1.jpg", "img/med-ball-slam-2.jpg"]
  },
  "box-jump": {
    name: "Salto al cajón",
    objective: "potencia",
    goal: "Mejorar producción rápida de fuerza para entradas y cambios de nivel.",
    baseSets: "5",
    baseReps: "3",
    rest: "1:30",
    technique:
      "Carga cadera corta, salta con intención máxima y aterriza suave con rodillas alineadas. Baja caminando para preservar potencia.",
    mistakes: ["Aterrizar pesado", "Elegir caja demasiado alta", "Convertirlo en cardio"],
    images: ["img/box-jump-1.jpg", "img/box-jump-2.jpg"]
  },
  "kettlebell-swing": {
    name: "Swing con kettlebell",
    objective: "potencia",
    goal: "Entrenar bisagra explosiva para scrambles, levantadas y repeat power ability.",
    baseSets: "6",
    baseReps: "8",
    rest: "1:00",
    technique:
      "La pesa viaja por bisagra de cadera, no por sentadilla. Aprieta glúteos al frente y deja que los brazos guíen.",
    mistakes: ["Elevar con hombros", "Flexionar demasiado rodillas", "Perder ritmo respiratorio"],
    images: ["img/kettlebell-swing-1.jpg", "img/kettlebell-swing-2.jpg"]
  },
  "broad-jump": {
    name: "Salto horizontal",
    objective: "potencia",
    goal: "Transferir potencia horizontal a entradas de derribo y presión hacia delante.",
    baseSets: "5",
    baseReps: "3",
    rest: "1:30",
    technique:
      "Carga brazos y cadera, proyecta el cuerpo hacia delante y cae estable absorbiendo con tobillo, rodilla y cadera.",
    mistakes: ["Caer con rodillas rígidas", "Mirar al piso", "Repetir sin recuperar potencia"],
    images: ["img/broad-jump-1.jpg", "img/broad-jump-2.jpg"]
  },
  "sled-push": {
    name: "Empuje de trineo",
    objective: "potencia",
    goal: "Desarrollar empuje de piernas y tronco para presión contra jaula.",
    baseSets: "6",
    baseReps: "15-20 m",
    rest: "1:30",
    technique:
      "Cuerpo inclinado, brazos fuertes y pasos cortos potentes. Mantén respiración agresiva sin perder línea de cadera.",
    mistakes: ["Pasos demasiado largos", "Cadera alta sin empuje", "Dejar caer la cabeza"],
    images: ["img/sled-push-1.jpg", "img/sled-push-2.jpg"]
  },
  "isometric-split-squat": {
    name: "Zancada isométrica",
    objective: "isometría",
    goal: "Fortalecer posiciones de base, rodilla y cadera bajo fatiga.",
    baseSets: "3",
    baseReps: "25-40 s por lado",
    rest: "1:00",
    technique:
      "Mantén zancada sólida, rodilla delantera alineada y torso alto. Presiona el suelo como si fueras a subir, pero sostén la posición.",
    mistakes: ["Descansar sobre ligamentos", "Inclinarse hacia delante", "Perder presión del pie delantero"],
    images: ["img/isometric-split-squat-1.jpg", "img/isometric-split-squat-2.jpg"]
  },
  "wall-sit-adductor-squeeze": {
    name: "Sentadilla en pared con presión de aductores",
    objective: "isometría",
    goal: "Reforzar aductores y piernas para guardia, presión y prevención de lesiones.",
    baseSets: "3",
    baseReps: "30-45 s",
    rest: "1:00",
    technique:
      "Espalda contra pared, rodillas a 90 grados y balón o almohadilla entre rodillas. Aprieta de forma constante sin contener la respiración.",
    mistakes: ["Subir demasiado la cadera", "Relajar aductores", "Colapsar pies hacia dentro"],
    images: ["img/wall-sit-adductor-squeeze-1.jpg", "img/wall-sit-adductor-squeeze-2.jpg"]
  },
  "chin-over-bar-hold": {
    name: "Aguante con mentón sobre la barra",
    objective: "isometría",
    goal: "Sostener agarres fuertes y control de espalda cuando el rival intenta escapar.",
    baseSets: "4",
    baseReps: "10-25 s",
    rest: "1:15",
    technique:
      "Sube con control, mentón sobre barra, hombros lejos de orejas y costillas cerradas. Mantén tensión sin balanceo.",
    mistakes: ["Cuello adelantado", "Codos abiertos", "Caer sin controlar la excéntrica"],
    images: ["img/chin-over-bar-hold-1.jpg", "img/chin-over-bar-hold-2.jpg"]
  },
  "plank-drag": {
    name: "Arrastre en plancha",
    objective: "isometría",
    goal: "Entrenar anti-rotación del tronco para scrambles y golpes desde arriba.",
    baseSets: "3",
    baseReps: "8 por lado",
    rest: "0:45",
    technique:
      "Plancha fuerte, pies algo abiertos y arrastra la carga sin girar la pelvis. La cadera debe verse quieta.",
    mistakes: ["Balancear la cadera", "Encoger hombros", "Mover la carga demasiado lejos"],
    images: ["img/plank-drag-1.jpg", "img/plank-drag-2.jpg"]
  },
  "bear-hug-hold": {
    name: "Aguante abrazando saco de arena",
    objective: "isometría",
    goal: "Simular presión de clinch y control corporal con respiración bajo compresión.",
    baseSets: "4",
    baseReps: "20-40 s",
    rest: "1:00",
    technique:
      "Abraza el saco alto, conecta costillas y pelvis, y mantén respiración nasal o corta sin perder postura.",
    mistakes: ["Apoyar el saco en la espalda baja", "Cerrar demasiado la garganta", "Relajar piernas"],
    images: ["img/bear-hug-hold-1.jpg", "img/bear-hug-hold-2.jpg"]
  },
  "assault-bike-sprint": {
    name: "Sprint en Assault Bike",
    objective: "lactato",
    goal: "Elevar tolerancia al lactato y recuperación entre esfuerzos de alta intensidad.",
    baseSets: "8",
    baseReps: "15-30 s fuerte",
    rest: "1:00-1:30",
    technique:
      "Acelera desde el primer segundo con empuje coordinado de brazos y piernas. Mantén torso estable y termina cada sprint con respiración controlada.",
    mistakes: ["Salir suave y acelerar tarde", "Desordenar la postura", "Mirar la pantalla todo el tiempo"],
    images: ["img/assault-bike-1.jpg", "img/assault-bike-2.jpg"]
  },
  "assault-bike-recovery": {
    name: "Recuperación en Assault Bike",
    objective: "recuperación",
    goal: "Mejorar aclarado de metabolitos y bajar pulsaciones entre rounds.",
    baseSets: "4-6",
    baseReps: "2:00 suave",
    rest: "0:30",
    technique:
      "Pedaleo nasal o conversacional, hombros relajados y cadencia constante. La meta es recuperar, no perseguir el monitor.",
    mistakes: ["Ir demasiado fuerte", "Tensionar cuello", "Respirar siempre por la boca"],
    images: ["img/assault-bike-recovery-1.jpg", "img/assault-bike-recovery-2.jpg"]
  },
  "shuttle-run": {
    name: "Carrera ida y vuelta",
    objective: "lactato",
    goal: "Entrenar cambios de dirección repetidos y potencia bajo acidez.",
    baseSets: "6-10",
    baseReps: "20 s",
    rest: "0:40-1:00",
    technique:
      "Acelera bajo, frena con pasos cortos y toca línea sin doblar la espalda. Reacelera con intención máxima.",
    mistakes: ["Frenar con una sola pierna rígida", "Girar alto", "Perder calidad por exceso de volumen"],
    images: ["img/shuttle-run-1.jpg", "img/shuttle-run-2.jpg"]
  },
  "battle-rope-sprawl": {
    name: "Cuerdas de batalla con sprawl",
    objective: "lactato",
    goal: "Combinar tren superior, sprawls y respiración agresiva en formato de round.",
    baseSets: "5",
    baseReps: "30-40 s",
    rest: "1:00",
    technique:
      "Ondas fuertes con hombros bajos, sprawl explosivo y regreso rápido a base atlética sin perder respiración.",
    mistakes: ["Caer con lumbar hundida", "Ondas pequeñas", "Volver de pie demasiado lento"],
    images: ["img/battle-rope-sprawl-1.jpg", "img/battle-rope-sprawl-2.jpg"]
  },
  "ground-and-pound": {
    name: "Golpes desde posición superior",
    objective: "ground and pound",
    goal: "Construir potencia, postura y continuidad golpeando desde posición superior.",
    baseSets: "6",
    baseReps: "20-30 s",
    rest: "0:45-1:00",
    technique:
      "Rodillas pesadas, cadera estable y mano libre posteando cuando hace falta. Golpea en ráfagas cortas y vuelve a base.",
    mistakes: ["Quedar alto y fácil de barrer", "Golpear sin retraer mano", "Perder presión de cadera"],
    images: ["img/ground-and-pound-1.jpg", "img/ground-and-pound-2.jpg"]
  },
  "medicine-ball-gp": {
    name: "Golpes al suelo con balón medicinal",
    objective: "ground and pound",
    goal: "Transferir potencia de tronco a golpes repetidos con bajo riesgo articular.",
    baseSets: "5",
    baseReps: "8-12 por lado",
    rest: "1:00",
    technique:
      "Desde rodillas o base de montada, rota el tronco y golpea el balón contra el suelo manteniendo cadera pesada.",
    mistakes: ["Golpear solo con brazo", "Perder equilibrio lateral", "No volver a posición defensiva"],
    images: ["img/medicine-ball-gp-1.jpg", "img/medicine-ball-gp-2.jpg"]
  },
  "dummy-posture-strikes": {
    name: "Golpes posturando sobre dummy",
    objective: "ground and pound",
    goal: "Practicar postura, frames y golpes desde guardia cerrada o media guardia.",
    baseSets: "5",
    baseReps: "30 s",
    rest: "0:45",
    technique:
      "Rompe postura con cadera atrás, controla bíceps o torso y alterna golpes cortos sin regalar brazos.",
    mistakes: ["Cabeza adelantada", "Manos plantadas sin defensa", "Golpes largos sin base"],
    images: ["img/dummy-posture-strikes-1.jpg", "img/dummy-posture-strikes-2.jpg"]
  },
  "zone-2-run": {
    name: "Carrera en zona 2",
    objective: "recuperación",
    goal: "Desarrollar base aeróbica para recuperar mejor entre rounds y sesiones.",
    baseSets: "1",
    baseReps: "25-45 min",
    rest: "Libre",
    technique:
      "Ritmo conversacional, respiración controlada y pisada relajada. Termina con sensación de poder seguir.",
    mistakes: ["Convertirlo en tempo", "Subir pulsaciones en cuestas", "Acortar por impaciencia"],
    images: ["img/zone-2-run-1.jpg", "img/zone-2-run-2.jpg"]
  },
  "copenhagen-plank": {
    name: "Plancha Copenhagen",
    objective: "recuperación",
    goal: "Prevenir lesiones de aductor y mejorar estabilidad lateral para grappling.",
    baseSets: "3",
    baseReps: "15-30 s por lado",
    rest: "0:45",
    technique:
      "Apoya pierna superior, bloquea costillas y eleva cadera hasta formar una línea larga. Mantén presión suave y constante.",
    mistakes: ["Rotar el torso", "Dejar caer la cadera", "Aguantar dolor punzante"],
    images: ["img/copenhagen-plank-1.jpg", "img/copenhagen-plank-2.jpg"]
  },
  "neck-isometrics": {
    name: "Isométricos de cuello",
    objective: "recuperación",
    goal: "Fortalecer cuello para clinch, impactos y prevención de molestias cervicales.",
    baseSets: "2-3",
    baseReps: "10-20 s por dirección",
    rest: "0:30",
    technique:
      "Presiona contra mano, banda o pared sin mover la cabeza. Mantén mandíbula relajada y respiración constante.",
    mistakes: ["Empujar con dolor", "Mover la cabeza rápido", "Tensionar hombros"],
    images: ["img/neck-isometrics-1.jpg", "img/neck-isometrics-2.jpg"]
  },
  "hip-airplane": {
    name: "Avión de cadera",
    objective: "recuperación",
    goal: "Mejorar control de cadera, equilibrio y salud de rodilla para cambios de nivel.",
    baseSets: "2-3",
    baseReps: "5 por lado",
    rest: "0:30",
    technique:
      "Bisagra sobre una pierna, abre y cierra cadera lentamente manteniendo arco del pie y pelvis controlada.",
    mistakes: ["Girar desde la espalda", "Bloquear la rodilla", "Buscar rango sin control"],
    images: ["img/hip-airplane-1.jpg", "img/hip-airplane-2.jpg"]
  },
  "turkish-get-up": {
    name: "Levantada turca",
    objective: "recuperación",
    goal: "Integrar hombro, cadera y tronco para levantadas seguras desde el suelo.",
    baseSets: "3",
    baseReps: "2 por lado",
    rest: "1:00",
    technique:
      "Mira la carga, crea posteos claros y avanza por fases: codo, mano, puente, barrido, medio arrodillado y de pie.",
    mistakes: ["Apurarse entre fases", "Doblar muñeca", "Perder mirada sobre la carga"],
    images: ["img/turkish-get-up-1.jpg", "img/turkish-get-up-2.jpg"]
  }
};

const phases = [
  { weeks: [1, 2, 3], name: "Base de fuerza", badge: "Acumulación", modifier: "RPE 7-8, técnica limpia, zona 2 estable." },
  { weeks: [4], name: "Descarga activa", badge: "Deload", modifier: "Reduce 30% el volumen, conserva velocidad." },
  { weeks: [5, 6, 7], name: "Fuerza + potencia", badge: "Intensificación", modifier: "Más carga, menos reps, potencia fresca." },
  { weeks: [8], name: "Descarga neural", badge: "Deload", modifier: "Baja fatiga, cuida movilidad y sueño." },
  { weeks: [9, 10, 11], name: "Fight specific", badge: "Pico", modifier: "Rounds densos, repeat power ability y lactato." },
  { weeks: [12], name: "Taper", badge: "Puesta a punto", modifier: "Bajo volumen, velocidad alta, recuperación prioritaria." }
];

const dayTemplates = [
  {
    title: "Día 1",
    focus: "Fuerza piernas + lactato",
    exercises: ["back-squat", "box-jump", "isometric-split-squat", "assault-bike-sprint", "ground-and-pound", "copenhagen-plank"]
  },
  {
    title: "Día 2",
    focus: "Tracción, clinch y zona 2",
    exercises: ["trap-bar-deadlift", "weighted-pull-up", "med-ball-slam", "chin-over-bar-hold", "zone-2-run", "neck-isometrics"]
  },
  {
    title: "Día 3",
    focus: "Potencia repeat + G&P",
    exercises: ["front-squat", "landmine-press", "kettlebell-swing", "bear-hug-hold", "battle-rope-sprawl", "dummy-posture-strikes"]
  }
];

const weekSwaps = {
  2: { add: ["plank-drag"], remove: ["copenhagen-plank"] },
  3: { add: ["shuttle-run"], remove: ["battle-rope-sprawl"] },
  4: { add: ["assault-bike-recovery", "hip-airplane"], remove: ["assault-bike-sprint", "back-squat"] },
  5: { add: ["broad-jump"], remove: ["box-jump"] },
  6: { add: ["sled-push"], remove: ["kettlebell-swing"] },
  7: { add: ["medicine-ball-gp"], remove: ["dummy-posture-strikes"] },
  8: { add: ["turkish-get-up", "assault-bike-recovery"], remove: ["trap-bar-deadlift", "assault-bike-sprint"] },
  9: { add: ["shuttle-run", "medicine-ball-gp"], remove: ["zone-2-run", "copenhagen-plank"] },
  10: { add: ["sled-push", "plank-drag"], remove: ["front-squat", "neck-isometrics"] },
  11: { add: ["assault-bike-recovery", "broad-jump"], remove: ["back-squat", "hip-airplane"] },
  12: { add: ["turkish-get-up", "assault-bike-recovery"], remove: ["battle-rope-sprawl", "trap-bar-deadlift"] }
};

const state = {
  filter: "todos",
  search: "",
  selectedRoutine: "",
  currentUser: null,
  currentUserData: null,
  isAdmin: false,
  adminPanelOpen: false,
  adminRoutineId: "",
  adminDraft: null,
  currentExerciseKey: null,
  timerSeconds: 0,
  timerInterval: null
};

let progressKey = "";
let collapsedWeeksKey = "";
let progress = {};
let collapsedWeeks = {};
let db = null;
let storage = null;

const routineSelect = document.querySelector("#routineSelect");
const appHeader = document.querySelector("#appHeader");
const appMain = document.querySelector("#appMain");
const changeRoutine = document.querySelector("#changeRoutine");
const authForm = document.querySelector("#authForm");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const registerButton = document.querySelector("#registerButton");
const resetPasswordButton = document.querySelector("#resetPasswordButton");
const authMessage = document.querySelector("#authMessage");
const routineControls = document.querySelector(".controls");
const routinePlaceholder = document.querySelector("#routinePlaceholder");
const weeksContainer = document.querySelector("#weeksContainer");
const summaryStrip = document.querySelector("#summaryStrip");
const searchInput = document.querySelector("#searchInput");
const filterTabs = document.querySelector("#filterTabs");
const progressPercent = document.querySelector("#progressPercent");
const progressRing = document.querySelector(".progress-ring");
const appKicker = document.querySelector(".app-header .kicker");
const appTitle = document.querySelector(".app-header h1");
const userGreeting = document.querySelector("#userGreeting");
const adminToggle = document.querySelector("#adminToggle");
const adminPanel = document.querySelector("#adminPanel");
const adminClose = document.querySelector("#adminClose");
const adminRoutineSelect = document.querySelector("#adminRoutineSelect");
const adminRoutineId = document.querySelector("#adminRoutineId");
const adminRoutineName = document.querySelector("#adminRoutineName");
const adminRoutineTitle = document.querySelector("#adminRoutineTitle");
const adminRoutineKicker = document.querySelector("#adminRoutineKicker");
const adminSaveRoutine = document.querySelector("#adminSaveRoutine");
const adminNewRoutine = document.querySelector("#adminNewRoutine");
const adminSeedDario = document.querySelector("#adminSeedDario");
const adminAddWeek = document.querySelector("#adminAddWeek");
const adminDeleteRoutine = document.querySelector("#adminDeleteRoutine");
const adminMessage = document.querySelector("#adminMessage");
const adminWeeks = document.querySelector("#adminWeeks");

const modal = document.querySelector("#exerciseModal");
const closeModal = document.querySelector("#closeModal");
const doneButton = document.querySelector("#doneButton");
const startTimer = document.querySelector("#startTimer");
const resetTimer = document.querySelector("#resetTimer");
const timerDisplay = document.querySelector("#timerDisplay");

function getActiveRoutine() {
  return routines[state.selectedRoutine] || null;
}

function getRoutineTotalSessions(routine) {
  return routine.plan.reduce((sum, week) => sum + week.days.reduce((daySum, day) => daySum + day.exercises.length, 0), 0);
}

function loadRoutineStorage(routineId) {
  const uid = state.currentUser?.uid || "local";
  progressKey = `mma-${uid}-${routineId}-progress`;
  collapsedWeeksKey = `mma-${uid}-${routineId}-collapsed-weeks`;
  progress = JSON.parse(localStorage.getItem(progressKey) || "{}");
  collapsedWeeks = JSON.parse(localStorage.getItem(collapsedWeeksKey) || "{}");
}

function setAuthMessage(message, type = "") {
  authMessage.textContent = message;
  authMessage.classList.toggle("error", type === "error");
  authMessage.classList.toggle("success", type === "success");
}

function setAuthBusy(isBusy) {
  document.querySelectorAll("#authForm button").forEach((button) => {
    button.disabled = isBusy;
  });
}

function isFirebaseConfigured() {
  const config = window.FIREBASE_CONFIG || {};
  return Boolean(config.apiKey && config.authDomain && !String(config.apiKey).startsWith("PEGAR_"));
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function isAdminEmail(email) {
  return (window.ADMIN_EMAILS || []).map(normalizeEmail).includes(normalizeEmail(email || ""));
}

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function slugify(text) {
  return normalize(String(text || ""))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function createEmptyRoutine(id = "") {
  return {
    id,
    name: id || "Nueva rutina",
    title: id || "RutFit",
    kicker: "Nueva",
    exerciseLibrary: {},
    plan: []
  };
}

function serializeRoutine(routine) {
  return {
    id: routine.id,
    name: routine.name,
    title: routine.title,
    kicker: routine.kicker,
    exerciseLibrary: routine.exerciseLibrary || {},
    plan: routine.plan || []
  };
}

function getDisplayNameFromEmail(email) {
  return normalizeEmail(email).split("@")[0] || "usuario";
}

function getDefaultRoutineForUser(user) {
  const emailDefault = (window.EMAIL_ROUTINE_DEFAULTS || {})[normalizeEmail(user.email || "")];
  return emailDefault || window.DEFAULT_ROUTINE_ID || "";
}

function getAuthErrorMessage(error) {
  const code = error?.code || "";
  if (code.includes("invalid-email")) return "El email no es válido.";
  if (code.includes("user-not-found") || code.includes("wrong-password") || code.includes("invalid-credential")) return "Email o contraseña incorrectos.";
  if (code.includes("email-already-in-use")) return "Ese email ya tiene una cuenta.";
  if (code.includes("weak-password")) return "La contraseña debe tener al menos 6 caracteres.";
  if (code.includes("configuration-not-found")) return "Falta activar Firebase Authentication en este proyecto.";
  if (code.includes("operation-not-allowed")) return "Activa Email/Password en Firebase Authentication.";
  if (code.includes("api-key-not-valid")) return "La configuración de Firebase no es válida.";
  if (code.includes("permission-denied")) return "Firestore está bloqueando el acceso. Revisa las reglas de la base de datos.";
  if (code.includes("not-found")) return "No se encontró Firestore o el documento solicitado. Revisa que la base sea (default).";
  if (code.includes("failed-precondition")) return `Firestore necesita terminar de activarse o tiene una condición pendiente (${code}). Espera un minuto y recarga.`;
  if (code.includes("unavailable")) return "Firestore no está disponible ahora. Revisa conexión o configuración.";
  if (code.includes("network-request-failed")) return "No hay conexión. Inténtalo de nuevo.";
  return `No se pudo completar la acción${code ? ` (${code})` : ""}.`;
}

function showAuthScreen(message = "") {
  state.selectedRoutine = "";
  state.currentUser = null;
  state.currentUserData = null;
  state.isAdmin = false;
  state.adminPanelOpen = false;
  state.adminDraft = null;
  closeExercise();
  routineSelect.classList.remove("is-hidden");
  appHeader.classList.add("is-hidden");
  appMain.classList.add("is-hidden");
  adminToggle.classList.add("is-hidden");
  adminPanel.classList.add("is-hidden");
  if (message) setAuthMessage(message);
}

async function ensureUserDocument(user) {
  const ref = db.collection("users").doc(user.uid);
  const snapshot = await ref.get();
  const isAdmin = isAdminEmail(user.email);
  if (!snapshot.exists) {
    const routineId = getDefaultRoutineForUser(user);
    const displayName = getDisplayNameFromEmail(user.email);
    await ref.set({
      email: normalizeEmail(user.email),
      displayName,
      routineId,
      role: isAdmin ? "admin" : "user",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { email: normalizeEmail(user.email), displayName, routineId, role: isAdmin ? "admin" : "user" };
  }

  const data = snapshot.data();
  if (isAdmin && data.role !== "admin") {
    try {
      await ref.set(
        {
          role: "admin",
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      );
    } catch (error) {
      console.warn("No se pudo guardar el rol admin. Se usará el email admin local.", error);
    }
    data.role = "admin";
  }
  if (!data.routineId) {
    const routineId = getDefaultRoutineForUser(user);
    if (routineId) {
      return { ...data, routineId };
    }
  }

  return data;
}

async function loadRoutineFromFirestore(routineId) {
  if (!routineId || routineId === "pending") return null;
  const snapshot = await db.collection("routines").doc(routineId).get();
  if (!snapshot.exists) return null;
  const data = snapshot.data();
  return {
    id: data.id || routineId,
    name: data.name || routineId,
    title: data.title || data.name || routineId,
    kicker: data.kicker || "",
    exerciseLibrary: data.exerciseLibrary || {},
    plan: data.plan || []
  };
}

async function loadFirestoreRoutinesForAdmin() {
  if (!state.isAdmin) return;
  try {
    const snapshot = await db.collection("routines").orderBy("updatedAt", "desc").get();
    snapshot.forEach((doc) => {
      const data = doc.data();
      routines[doc.id] = {
        id: data.id || doc.id,
        name: data.name || doc.id,
        title: data.title || data.name || doc.id,
        kicker: data.kicker || "",
        exerciseLibrary: data.exerciseLibrary || {},
        plan: data.plan || []
      };
    });
  } catch (error) {
    console.warn("No se pudieron cargar rutinas Firestore para admin.", error);
    setAuthMessage("Entraste como admin. Para editar rutinas, publica las reglas nuevas de Firestore.", "error");
  }
}

async function saveRoutineToFirestore(routine) {
  const data = serializeRoutine(routine);
  await db.collection("routines").doc(data.id).set(
    {
      ...data,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: normalizeEmail(state.currentUser?.email || "")
    },
    { merge: true }
  );
  routines[data.id] = data;
}

async function deleteRoutineFromFirestore(routineId) {
  await db.collection("routines").doc(routineId).delete();
  delete routines[routineId];
}

function selectRoutine(routineId) {
  if (!routines[routineId]) return;
  state.selectedRoutine = routineId;
  state.search = "";
  state.filter = "todos";
  searchInput.value = "";
  filterTabs.querySelectorAll("button").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "todos"));
  loadRoutineStorage(routineId);
  renderApp();
}

async function handleAuthenticatedUser(user) {
  if (!user?.email) {
    showAuthScreen();
    return;
  }

  state.currentUser = user;
  setAuthMessage("Cargando rutina...");

  try {
    const userData = await ensureUserDocument(user);
    state.currentUserData = userData;
    state.isAdmin = userData.role === "admin" || isAdminEmail(user.email);
    if (state.isAdmin) {
      await loadFirestoreRoutinesForAdmin();
    }
    const routineId = userData.routineId;
    const firestoreRoutine = routineId ? await loadRoutineFromFirestore(routineId) : null;
    if (firestoreRoutine) {
      routines[firestoreRoutine.id] = firestoreRoutine;
    }
    selectRoutine(routines[routineId] ? routineId : "pending");
  } catch (error) {
    await firebase.auth().signOut();
    showAuthScreen("No se pudo cargar tu usuario. Revisa Firestore.");
    setAuthMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    console.error("Firestore user load error:", error);
  }
}

function renderApp() {
  const routine = getActiveRoutine();
  if (!routine) {
    showRoutineSelector();
    return;
  }

  routineSelect.classList.add("is-hidden");
  appHeader.classList.remove("is-hidden");
  appMain.classList.remove("is-hidden");
  appKicker.textContent = routine.kicker;
  appTitle.textContent = routine.title;
  const displayName = state.currentUserData?.displayName || getDisplayNameFromEmail(state.currentUser?.email || "");
  userGreeting.textContent = displayName ? `Hola, ${displayName}` : "";
  adminToggle.classList.toggle("is-hidden", !state.isAdmin);
  adminPanel.classList.toggle("is-hidden", !state.isAdmin || !state.adminPanelOpen);
  if (state.isAdmin && state.adminPanelOpen) {
    renderAdminPanel();
  }

  const hasPlan = routine.plan.length > 0;
  routineControls.classList.toggle("is-hidden", !hasPlan);
  summaryStrip.classList.toggle("is-hidden", !hasPlan);
  weeksContainer.classList.toggle("is-hidden", !hasPlan);
  routinePlaceholder.classList.toggle("is-hidden", hasPlan);
  progressRing.classList.toggle("is-hidden", !hasPlan);

  if (hasPlan) {
    renderPlan();
  } else {
    stopTimer();
  }
}

function getPhase(weekNumber) {
  return phases.find((phase) => phase.weeks.includes(weekNumber));
}

function buildWeek(weekNumber) {
  const phase = getPhase(weekNumber);
  const swap = weekSwaps[weekNumber] || {};
  const addQueue = [...(swap.add || [])];

  const days = dayTemplates.map((day) => {
    let exercises = day.exercises.filter((key) => !(swap.remove || []).includes(key));
    if (addQueue.length) {
      exercises = [...exercises, addQueue.shift()];
    }
    return { ...day, exercises };
  });

  while (addQueue.length) {
    days[2].exercises.push(addQueue.shift());
  }

  return { number: weekNumber, phase, days };
}

const darioPlan = Array.from({ length: 12 }, (_, index) => buildWeek(index + 1));

const routines = {
  dario: {
    id: "dario",
    name: "Dario",
    title: "RutFit",
    kicker: "12 semanas",
    exerciseLibrary,
    plan: darioPlan
  },
  bia: {
    id: "bia",
    name: "Bia",
    title: "Rutina Bia",
    kicker: "Próximamente",
    exerciseLibrary: {},
    plan: []
  },
  pending: {
    id: "pending",
    name: "Sin rutina",
    title: "Rutina en preparación",
    kicker: "Próximamente",
    exerciseLibrary: {},
    plan: []
  }
};

routines.dario.title = "RutFit";
routines.bia.kicker = "Próximamente";
routines.pending.title = "Rutina en preparación";
routines.pending.kicker = "Próximamente";

function progressId(week, dayIndex, exerciseKey) {
  return `w${week}-d${dayIndex + 1}-${exerciseKey}`;
}

function weekCollapseId(weekNumber) {
  return `w${weekNumber}`;
}

function getWeekExerciseIds(week) {
  return week.days.flatMap((day, dayIndex) => day.exercises.map((exerciseKey) => progressId(week.number, dayIndex, exerciseKey)));
}

function isWeekDone(week) {
  return getWeekExerciseIds(week).every((id) => progress[id]);
}

function isWeekCollapsed(weekNumber) {
  const collapseId = weekCollapseId(weekNumber);
  return collapsedWeeks[collapseId] !== false;
}

function saveCollapsedWeeks() {
  localStorage.setItem(collapsedWeeksKey, JSON.stringify(collapsedWeeks));
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function matchesFilters(exercise) {
  const query = normalize(state.search.trim());
  const filter = normalize(state.filter);
  const haystack = normalize(`${exercise.name} ${exercise.objective} ${exercise.goal}`);
  const objective = normalize(exercise.objective);
  const filterMatch = filter === "todos" || objective === filter;
  const searchMatch = !query || haystack.includes(query);
  return filterMatch && searchMatch;
}

function phasePrescription(exercise, weekNumber) {
  if ([4, 8].includes(weekNumber)) {
    return {
      sets: exercise.objective === "recuperación" ? exercise.baseSets : "2-3",
      reps: exercise.objective === "fuerza" ? "3 suave" : exercise.baseReps,
      rest: exercise.objective === "recuperación" ? exercise.rest : "1:00-1:30"
    };
  }

  if (weekNumber === 12) {
    return {
      sets: exercise.objective === "lactato" ? "4" : "2-3",
      reps: exercise.objective === "fuerza" ? "2 rápido" : exercise.baseReps,
      rest: exercise.objective === "lactato" ? "1:30" : exercise.rest
    };
  }

  if (weekNumber >= 9) {
    return {
      sets: exercise.objective === "lactato" || exercise.objective === "ground and pound" ? "6-8" : exercise.baseSets,
      reps: exercise.objective === "fuerza" ? "2-3" : exercise.baseReps,
      rest: exercise.objective === "lactato" ? "0:45-1:00" : exercise.rest
    };
  }

  if (weekNumber >= 5) {
    return {
      sets: exercise.objective === "potencia" ? "5-7" : exercise.baseSets,
      reps: exercise.objective === "fuerza" ? "3" : exercise.baseReps,
      rest: exercise.objective === "potencia" ? "1:30" : exercise.rest
    };
  }

  return { sets: exercise.baseSets, reps: exercise.baseReps, rest: exercise.rest };
}

function renderSummary() {
  const routine = getActiveRoutine();
  const totalSessions = getRoutineTotalSessions(routine);
  const doneCount = Object.values(progress).filter(Boolean).length;
  const percent = totalSessions ? Math.round((doneCount / totalSessions) * 100) : 0;
  progressPercent.textContent = `${percent}%`;
  progressRing.style.setProperty("--progress", `${percent}%`);

  summaryStrip.innerHTML = [
    [totalSessions, "sesiones"],
    [Object.keys(routine.exerciseLibrary).length, "ejercicios"],
    [doneCount, "completados"],
    [routine.plan.length, "semanas"]
  ]
    .map(([value, label]) => `<div class="summary-item"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isRemoteImage(src) {
  return /^https?:\/\//i.test(String(src || ""));
}

function getFileExtension(file) {
  const nameExtension = file.name.includes(".") ? file.name.split(".").pop().toLowerCase() : "";
  if (nameExtension) return nameExtension.replace(/[^a-z0-9]/g, "") || "jpg";
  const mimeExtension = file.type.split("/")[1] || "jpg";
  return mimeExtension.replace(/[^a-z0-9]/g, "") || "jpg";
}

async function uploadExerciseImage(file, exerciseKey, imageIndex) {
  if (!storage) throw new Error("Firebase Storage no está inicializado.");
  if (!file?.type?.startsWith("image/")) throw new Error("Selecciona un archivo de imagen.");
  const routineId = state.adminDraft?.id || adminRoutineId.value || "rutina";
  const slot = imageIndex === 0 ? "start" : "end";
  const extension = getFileExtension(file);
  const path = `routines/${slugify(routineId)}/exercises/${slugify(exerciseKey)}/${slot}-${Date.now()}.${extension}`;
  const snapshot = await storage.ref(path).put(file, {
    contentType: file.type,
    customMetadata: {
      routineId: slugify(routineId),
      exerciseKey,
      slot
    }
  });
  return snapshot.ref.getDownloadURL();
}

function setAdminMessage(message, type = "") {
  adminMessage.textContent = message;
  adminMessage.classList.toggle("error", type === "error");
  adminMessage.classList.toggle("success", type === "success");
}

function getAdminRoutineIds() {
  return Object.keys(routines).filter((id) => id !== "pending");
}

function setAdminDraftFromRoutine(routineId) {
  const routine = routines[routineId] || createEmptyRoutine(routineId);
  state.adminRoutineId = routine.id;
  state.adminDraft = cloneData(serializeRoutine(routine));
}

function readAdminBasics() {
  const id = slugify(adminRoutineId.value || state.adminDraft?.id || "");
  state.adminDraft.id = id;
  state.adminDraft.name = adminRoutineName.value.trim() || id;
  state.adminDraft.title = adminRoutineTitle.value.trim() || state.adminDraft.name;
  state.adminDraft.kicker = adminRoutineKicker.value.trim();
  state.adminRoutineId = id;
}

function renderAdminPanel() {
  if (!state.adminDraft) {
    setAdminDraftFromRoutine(state.selectedRoutine === "pending" ? "dario" : state.selectedRoutine);
  }

  const draft = state.adminDraft;
  adminRoutineSelect.innerHTML = getAdminRoutineIds()
    .map((id) => `<option value="${escapeHtml(id)}" ${id === draft.id ? "selected" : ""}>${escapeHtml(routines[id].name || id)}</option>`)
    .join("");
  adminRoutineId.value = draft.id || "";
  adminRoutineName.value = draft.name || "";
  adminRoutineTitle.value = draft.title || "";
  adminRoutineKicker.value = draft.kicker || "";

  adminWeeks.innerHTML = draft.plan
    .map((week, weekIndex) => {
      const phase = week.phase || {};
      const days = (week.days || [])
        .map((day, dayIndex) => {
          const exercises = (day.exercises || [])
            .map((exerciseKey) => {
              const exercise = draft.exerciseLibrary[exerciseKey] || {};
              const images = exercise.images || ["", ""];
              const startPreview = images[0]
                ? `<img class="admin-image-preview" src="${escapeHtml(images[0])}" alt="Vista previa inicial" />`
                : `<div class="admin-image-empty">Sin imagen inicial</div>`;
              const endPreview = images[1]
                ? `<img class="admin-image-preview" src="${escapeHtml(images[1])}" alt="Vista previa final" />`
                : `<div class="admin-image-empty">Sin imagen final</div>`;
              return `
                <div class="admin-exercise" data-week-index="${weekIndex}" data-day-index="${dayIndex}" data-exercise-key="${escapeHtml(exerciseKey)}">
                  <div class="admin-card-title">
                    <h4>${escapeHtml(exercise.name || "Ejercicio nuevo")}</h4>
                    <button class="danger-button" type="button" data-admin-action="delete-exercise">Eliminar ejercicio</button>
                  </div>
                  <div class="admin-exercise-grid">
                    <label class="search-box"><span>Nombre</span><input class="admin-field" data-exercise-field="name" value="${escapeHtml(exercise.name || "")}" /></label>
                    <label class="search-box"><span>Objetivo</span><input class="admin-field" data-exercise-field="objective" value="${escapeHtml(exercise.objective || "")}" /></label>
                    <label class="search-box"><span>Series</span><input class="admin-field" data-exercise-field="baseSets" value="${escapeHtml(exercise.baseSets || "")}" /></label>
                    <label class="search-box"><span>Reps</span><input class="admin-field" data-exercise-field="baseReps" value="${escapeHtml(exercise.baseReps || "")}" /></label>
                    <label class="search-box"><span>Descanso</span><input class="admin-field" data-exercise-field="rest" value="${escapeHtml(exercise.rest || "")}" /></label>
                    <div class="admin-image-uploader">
                      <span>Imagen inicial</span>
                      ${startPreview}
                      <input class="admin-field" data-exercise-field="imageStart" value="${escapeHtml(images[0] || "")}" />
                      <label class="file-button">
                        Subir imagen inicial
                        <input type="file" accept="image/*" data-image-upload="0" />
                      </label>
                    </div>
                    <div class="admin-image-uploader">
                      <span>Imagen final</span>
                      ${endPreview}
                      <input class="admin-field" data-exercise-field="imageEnd" value="${escapeHtml(images[1] || "")}" />
                      <label class="file-button">
                        Subir imagen final
                        <input type="file" accept="image/*" data-image-upload="1" />
                      </label>
                    </div>
                  </div>
                  <label class="search-box"><span>Objetivo técnico</span><textarea class="admin-textarea" data-exercise-field="goal">${escapeHtml(exercise.goal || "")}</textarea></label>
                  <label class="search-box"><span>Técnica</span><textarea class="admin-textarea" data-exercise-field="technique">${escapeHtml(exercise.technique || "")}</textarea></label>
                  <label class="search-box"><span>Errores comunes, uno por línea</span><textarea class="admin-textarea" data-exercise-field="mistakes">${escapeHtml((exercise.mistakes || []).join("\n"))}</textarea></label>
                </div>
              `;
            })
            .join("");

          return `
            <div class="admin-day" data-week-index="${weekIndex}" data-day-index="${dayIndex}">
              <div class="admin-card-title">
                <h4>Día ${dayIndex + 1}</h4>
                <button class="danger-button" type="button" data-admin-action="delete-day">Eliminar día</button>
              </div>
              <div class="admin-exercise-grid">
                <label class="search-box"><span>Título del día</span><input class="admin-field" data-day-field="title" value="${escapeHtml(day.title || "")}" /></label>
                <label class="search-box"><span>Foco</span><input class="admin-field" data-day-field="focus" value="${escapeHtml(day.focus || "")}" /></label>
              </div>
              <div class="admin-row-actions">
                <button class="secondary-button" type="button" data-admin-action="add-exercise">Crear ejercicio</button>
              </div>
              ${exercises || `<div class="empty-state">Este día todavía no tiene ejercicios.</div>`}
            </div>
          `;
        })
        .join("");

      return `
        <article class="admin-editor-card" data-week-index="${weekIndex}">
          <div class="admin-card-title">
            <div>
              <small>Semana</small>
              <h3>${escapeHtml(week.number || weekIndex + 1)}: ${escapeHtml(phase.name || "Sin fase")}</h3>
            </div>
            <button class="danger-button" type="button" data-admin-action="delete-week">Eliminar semana</button>
          </div>
          <div class="admin-exercise-grid">
            <label class="search-box"><span>Número</span><input class="admin-field" data-week-field="number" value="${escapeHtml(week.number || weekIndex + 1)}" /></label>
            <label class="search-box"><span>Fase</span><input class="admin-field" data-week-field="phase.name" value="${escapeHtml(phase.name || "")}" /></label>
            <label class="search-box"><span>Badge</span><input class="admin-field" data-week-field="phase.badge" value="${escapeHtml(phase.badge || "")}" /></label>
            <label class="search-box"><span>Indicaciones</span><input class="admin-field" data-week-field="phase.modifier" value="${escapeHtml(phase.modifier || "")}" /></label>
          </div>
          <div class="admin-row-actions">
            <button class="secondary-button" type="button" data-admin-action="add-day">Crear día</button>
          </div>
          ${days || `<div class="empty-state">Esta semana todavía no tiene días.</div>`}
        </article>
      `;
    })
    .join("");

  if (!draft.plan.length) {
    adminWeeks.innerHTML = `<div class="empty-state">Crea una semana para empezar esta rutina.</div>`;
  }
}

function updateAdminDraftFromInput(input) {
  if (!state.adminDraft) return;
  const weekIndex = Number(input.closest("[data-week-index]")?.dataset.weekIndex);
  const dayIndex = Number(input.closest("[data-day-index]")?.dataset.dayIndex);
  const exerciseKey = input.closest("[data-exercise-key]")?.dataset.exerciseKey;

  if (input.dataset.weekField) {
    const week = state.adminDraft.plan[weekIndex];
    week.phase = week.phase || {};
    if (input.dataset.weekField === "number") week.number = Number(input.value) || weekIndex + 1;
    if (input.dataset.weekField === "phase.name") week.phase.name = input.value;
    if (input.dataset.weekField === "phase.badge") week.phase.badge = input.value;
    if (input.dataset.weekField === "phase.modifier") week.phase.modifier = input.value;
  }

  if (input.dataset.dayField) {
    const day = state.adminDraft.plan[weekIndex].days[dayIndex];
    day[input.dataset.dayField] = input.value;
  }

  if (input.dataset.exerciseField) {
    const exercise = state.adminDraft.exerciseLibrary[exerciseKey];
    exercise.images = exercise.images || ["", ""];
    if (input.dataset.exerciseField === "imageStart") exercise.images[0] = input.value;
    else if (input.dataset.exerciseField === "imageEnd") exercise.images[1] = input.value;
    else if (input.dataset.exerciseField === "mistakes") exercise.mistakes = input.value.split("\n").map((item) => item.trim()).filter(Boolean);
    else exercise[input.dataset.exerciseField] = input.value;
  }
}

function handleAdminAction(button) {
  const weekIndex = Number(button.closest("[data-week-index]")?.dataset.weekIndex);
  const dayIndex = Number(button.closest("[data-day-index]")?.dataset.dayIndex);
  const exerciseKey = button.closest("[data-exercise-key]")?.dataset.exerciseKey;
  const action = button.dataset.adminAction;

  if (action === "delete-week") {
    state.adminDraft.plan.splice(weekIndex, 1);
  }

  if (action === "add-day") {
    state.adminDraft.plan[weekIndex].days = state.adminDraft.plan[weekIndex].days || [];
    state.adminDraft.plan[weekIndex].days.push({ title: `Día ${state.adminDraft.plan[weekIndex].days.length + 1}`, focus: "", exercises: [] });
  }

  if (action === "delete-day") {
    state.adminDraft.plan[weekIndex].days.splice(dayIndex, 1);
  }

  if (action === "add-exercise") {
    const key = `ejercicio-${Date.now()}`;
    state.adminDraft.exerciseLibrary[key] = {
      name: "Ejercicio nuevo",
      objective: "fuerza",
      goal: "",
      baseSets: "",
      baseReps: "",
      rest: "1:00",
      technique: "",
      mistakes: [],
      images: ["img/placeholder-1.jpg", "img/placeholder-2.jpg"]
    };
    state.adminDraft.plan[weekIndex].days[dayIndex].exercises.push(key);
  }

  if (action === "delete-exercise") {
    const exercises = state.adminDraft.plan[weekIndex].days[dayIndex].exercises;
    state.adminDraft.plan[weekIndex].days[dayIndex].exercises = exercises.filter((key) => key !== exerciseKey);
    const stillUsed = state.adminDraft.plan.some((week) => week.days.some((day) => day.exercises.includes(exerciseKey)));
    if (!stillUsed) delete state.adminDraft.exerciseLibrary[exerciseKey];
  }

  renderAdminPanel();
}

function renderPlan() {
  const routine = getActiveRoutine();
  const plan = routine.plan;
  const library = routine.exerciseLibrary;
  let visibleCount = 0;

  weeksContainer.innerHTML = plan
    .map((week) => {
      const weekDone = isWeekDone(week);
      const collapseId = weekCollapseId(week.number);
      const isCollapsed = isWeekCollapsed(week.number);
      const phase = week.phase || { name: "Semana", badge: "Plan", modifier: "" };
      const days = week.days
        .map((day, dayIndex) => {
          const exerciseCards = day.exercises
            .map((exerciseKey) => {
              const exercise = library[exerciseKey];
              if (!exercise) return "";
              if (!matchesFilters(exercise)) return "";
              visibleCount += 1;
              const id = progressId(week.number, dayIndex, exerciseKey);
              const prescription = phasePrescription(exercise, week.number);
              const objectiveClass = normalize(exercise.objective).replaceAll(" ", "-");
              return `
                <button class="exercise-card ${progress[id] ? "done" : ""}" type="button" data-week="${week.number}" data-day="${dayIndex}" data-exercise="${exerciseKey}">
                  <span class="objective-dot ${objectiveClass}"></span>
                  <span>
                    <strong>${exercise.name}</strong>
                    <small>${exercise.objective} · ${prescription.sets} x ${prescription.reps} · descanso ${prescription.rest}</small>
                  </span>
                  <span class="done-mark">✓</span>
                </button>
              `;
            })
            .join("");

          if (!exerciseCards) return "";

          return `
            <article class="day-card">
              <h3>${day.title}<span>${day.focus}</span></h3>
              <div class="exercise-list">${exerciseCards}</div>
            </article>
          `;
        })
        .join("");

      if (!days && !isCollapsed) return "";

      return `
        <article class="week-card ${weekDone ? "week-done" : ""} ${isCollapsed ? "collapsed" : ""}">
          <button class="week-header week-toggle" type="button" data-week="${week.number}" aria-expanded="${!isCollapsed}">
            <div>
              <h2>Semana ${week.number}: ${phase.name}</h2>
              ${isCollapsed ? "" : `<p>${phase.modifier || ""}</p>`}
            </div>
            <span class="week-actions">
              ${weekDone ? `<span class="week-done-label">Hecha</span>` : ""}
              <span class="week-badge">${phase.badge || "Plan"}</span>
              <span class="week-chevron">${isCollapsed ? "+" : "−"}</span>
            </span>
          </button>
          ${isCollapsed ? "" : `<div class="days">${days}</div>`}
        </article>
      `;
    })
    .join("");

  if (!visibleCount) {
    weeksContainer.innerHTML = `<div class="empty-state">No hay ejercicios que coincidan con esa búsqueda.</div>`;
  }

  renderSummary();
}

function parseRestToSeconds(rest) {
  const match = rest.match(/(\d+):(\d+)/);
  if (!match) return 60;
  return Number(match[1]) * 60 + Number(match[2]);
}

function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function stopTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
}

function setTimer(seconds) {
  state.timerSeconds = Math.max(0, seconds);
  timerDisplay.textContent = formatSeconds(state.timerSeconds);
}

function openExercise(weekNumber, dayIndex, exerciseKey) {
  const routine = getActiveRoutine();
  const exercise = routine.exerciseLibrary[exerciseKey];
  if (!exercise) return;
  const prescription = phasePrescription(exercise, weekNumber);
  const id = progressId(weekNumber, dayIndex, exerciseKey);
  state.currentExerciseKey = { id, weekNumber, dayIndex, exerciseKey };

  document.querySelector("#modalObjective").textContent = exercise.objective;
  document.querySelector("#modalTitle").textContent = exercise.name;
  document.querySelector("#modalGoal").textContent = exercise.goal;
  document.querySelector("#modalSets").textContent = prescription.sets;
  document.querySelector("#modalReps").textContent = prescription.reps;
  document.querySelector("#modalRest").textContent = prescription.rest;
  document.querySelector("#modalTechnique").textContent = exercise.technique;
  document.querySelector("#modalMistakes").innerHTML = exercise.mistakes.map((mistake) => `<li>${mistake}</li>`).join("");

  const [startImage, endImage] = exercise.images;
  document.querySelector("#modalImageStart").src = startImage;
  document.querySelector("#modalImageStart").alt = `${exercise.name} posición inicial o bajada`;
  document.querySelector("#modalImageEnd").src = endImage;
  document.querySelector("#modalImageEnd").alt = `${exercise.name} posición final o subida`;

  doneButton.classList.toggle("done", Boolean(progress[id]));
  doneButton.textContent = progress[id] ? "Hecho" : "Marcar como hecho";
  setTimer(parseRestToSeconds(prescription.rest));
  stopTimer();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeExercise() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  stopTimer();
}

function toggleDone() {
  if (!state.currentExerciseKey) return;
  const { id, weekNumber } = state.currentExerciseKey;
  progress[id] = !progress[id];
  localStorage.setItem(progressKey, JSON.stringify(progress));
  doneButton.classList.toggle("done", Boolean(progress[id]));
  doneButton.textContent = progress[id] ? "Hecho" : "Marcar como hecho";

  const week = getActiveRoutine().plan.find((item) => item.number === weekNumber);
  if (week) {
    if (isWeekDone(week)) {
      collapsedWeeks[weekCollapseId(weekNumber)] = true;
    } else {
      collapsedWeeks[weekCollapseId(weekNumber)] = false;
    }
    saveCollapsedWeeks();
  }

  if (progress[id]) {
    closeExercise();
  }

  renderPlan();
}

weeksContainer.addEventListener("click", (event) => {
  const weekToggle = event.target.closest(".week-toggle");
  if (weekToggle) {
    const collapseId = weekCollapseId(Number(weekToggle.dataset.week));
    collapsedWeeks[collapseId] = !isWeekCollapsed(Number(weekToggle.dataset.week));
    saveCollapsedWeeks();
    renderPlan();
    return;
  }

  const card = event.target.closest(".exercise-card");
  if (!card) return;
  openExercise(Number(card.dataset.week), Number(card.dataset.day), card.dataset.exercise);
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderPlan();
});

filterTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.filter = button.dataset.filter;
  filterTabs.querySelectorAll("button").forEach((tab) => tab.classList.toggle("active", tab === button));
  renderPlan();
});

adminToggle.addEventListener("click", () => {
  if (!state.isAdmin) return;
  state.adminPanelOpen = !state.adminPanelOpen;
  if (state.adminPanelOpen && !state.adminDraft) {
    setAdminDraftFromRoutine(state.selectedRoutine === "pending" ? "dario" : state.selectedRoutine);
  }
  renderApp();
});

adminClose.addEventListener("click", () => {
  state.adminPanelOpen = false;
  renderApp();
});

adminRoutineSelect.addEventListener("change", () => {
  setAdminDraftFromRoutine(adminRoutineSelect.value);
  setAdminMessage("");
  renderAdminPanel();
});

[adminRoutineId, adminRoutineName, adminRoutineTitle, adminRoutineKicker].forEach((input) => {
  input.addEventListener("input", () => {
    if (!state.adminDraft) return;
    readAdminBasics();
  });
});

adminWeeks.addEventListener("input", (event) => {
  updateAdminDraftFromInput(event.target);
});

adminWeeks.addEventListener("change", async (event) => {
  const input = event.target.closest("[data-image-upload]");
  if (!input) return;
  const file = input.files?.[0];
  if (!file) return;
  const exerciseContainer = input.closest("[data-exercise-key]");
  const exerciseKey = exerciseContainer?.dataset.exerciseKey;
  const imageIndex = Number(input.dataset.imageUpload);
  if (!exerciseKey || Number.isNaN(imageIndex)) return;

  setAdminMessage("Subiendo imagen...");
  try {
    const url = await uploadExerciseImage(file, exerciseKey, imageIndex);
    const exercise = state.adminDraft.exerciseLibrary[exerciseKey];
    exercise.images = exercise.images || ["", ""];
    exercise.images[imageIndex] = url;
    setAdminMessage("Imagen cargada. Toca Guardar rutina para guardar el cambio.", "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(error?.message || getAuthErrorMessage(error), "error");
  } finally {
    input.value = "";
  }
});

adminWeeks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-action]");
  if (!button) return;
  handleAdminAction(button);
});

adminAddWeek.addEventListener("click", () => {
  if (!state.adminDraft) state.adminDraft = createEmptyRoutine("nueva-rutina");
  state.adminDraft.plan.push({
    number: state.adminDraft.plan.length + 1,
    phase: { name: "Nueva fase", badge: "Plan", modifier: "" },
    days: []
  });
  renderAdminPanel();
});

adminNewRoutine.addEventListener("click", () => {
  state.adminDraft = createEmptyRoutine(`rutina-${Date.now()}`);
  state.adminRoutineId = state.adminDraft.id;
  setAdminMessage("Nueva rutina preparada. Edita los datos y guárdala.", "success");
  renderAdminPanel();
});

adminSeedDario.addEventListener("click", async () => {
  if (!state.isAdmin) return;
  state.adminDraft = cloneData(serializeRoutine(routines.dario));
  try {
    await saveRoutineToFirestore(state.adminDraft);
    setAdminMessage("Rutina Dario migrada a Firestore.", "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
});

adminSaveRoutine.addEventListener("click", async () => {
  if (!state.isAdmin || !state.adminDraft) return;
  readAdminBasics();
  if (!state.adminDraft.id) {
    setAdminMessage("La rutina necesita un ID.", "error");
    return;
  }
  try {
    await saveRoutineToFirestore(state.adminDraft);
    setAdminMessage("Rutina guardada en Firestore.", "success");
    if (state.selectedRoutine === state.adminDraft.id) {
      selectRoutine(state.adminDraft.id);
    }
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
});

adminDeleteRoutine.addEventListener("click", async () => {
  if (!state.isAdmin || !state.adminDraft?.id) return;
  const deletedId = state.adminDraft.id;
  if (!confirm(`¿Eliminar la rutina "${state.adminDraft.name || state.adminDraft.id}" de Firestore?`)) return;
  try {
    await deleteRoutineFromFirestore(deletedId);
    setAdminMessage("Rutina eliminada.", "success");
    state.adminDraft = null;
    const nextRoutineId = getAdminRoutineIds()[0] || "dario";
    if (!routines[nextRoutineId]) {
      routines[nextRoutineId] = createEmptyRoutine(nextRoutineId);
    }
    setAdminDraftFromRoutine(nextRoutineId);
    if (state.selectedRoutine === deletedId) {
      selectRoutine(routines[nextRoutineId] ? nextRoutineId : "pending");
    }
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
});

closeModal.addEventListener("click", closeExercise);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeExercise();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeExercise();
});

doneButton.addEventListener("click", toggleDone);

startTimer.addEventListener("click", () => {
  if (state.timerInterval) return;
  state.timerInterval = setInterval(() => {
    setTimer(state.timerSeconds - 1);
    if (state.timerSeconds <= 0) stopTimer();
  }, 1000);
});

resetTimer.addEventListener("click", () => {
  if (!state.currentExerciseKey) return;
  const { weekNumber, exerciseKey } = state.currentExerciseKey;
  const prescription = phasePrescription(getActiveRoutine().exerciseLibrary[exerciseKey], weekNumber);
  stopTimer();
  setTimer(parseRestToSeconds(prescription.rest));
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAuthBusy(true);
  setAuthMessage("Ingresando...");

  try {
    const email = normalizeEmail(authEmail.value);
    const password = authPassword.value;
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    setAuthMessage(getAuthErrorMessage(error), "error");
  } finally {
    setAuthBusy(false);
  }
});

registerButton.addEventListener("click", async () => {
  const email = normalizeEmail(authEmail.value);
  const password = authPassword.value;

  setAuthBusy(true);
  setAuthMessage("Creando cuenta...");

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    setAuthMessage(getAuthErrorMessage(error), "error");
  } finally {
    setAuthBusy(false);
  }
});

resetPasswordButton.addEventListener("click", async () => {
  const email = normalizeEmail(authEmail.value);
  if (!email) {
    setAuthMessage("Escribe tu email para recuperar la contraseña.", "error");
    return;
  }

  setAuthBusy(true);
  setAuthMessage("Enviando correo de recuperación...");

  try {
    await firebase.auth().sendPasswordResetEmail(email);
    setAuthMessage("Te envié un correo para recuperar la contraseña.", "success");
  } catch (error) {
    setAuthMessage(getAuthErrorMessage(error), "error");
  } finally {
    setAuthBusy(false);
  }
});

changeRoutine.addEventListener("click", async () => {
  await firebase.auth().signOut();
});

function installTouchScrollFallback() {
  let startY = 0;
  let lastY = 0;
  let moved = false;
  let cancelNextClick = false;
  let active = false;
  const interactiveSelector = "input, textarea, select, option, [contenteditable='true']";
  const getTarget = (event) => (event.target?.nodeType === Node.TEXT_NODE ? event.target.parentElement : event.target);
  const getScrollRoot = () => document.scrollingElement || document.documentElement;

  document.addEventListener(
    "touchstart",
    (event) => {
      const target = getTarget(event);
      active = event.touches.length === 1 && !target.closest(interactiveSelector);
      if (!active) return;
      startY = event.touches[0].clientY;
      lastY = startY;
      moved = false;
    },
    { passive: true, capture: true }
  );

  document.addEventListener(
    "touchmove",
    (event) => {
      if (!active || event.touches.length !== 1) return;
      const target = getTarget(event);
      if (target.closest(interactiveSelector)) return;

      const modalPanel = target.closest(".modal-panel");
      if (modal.classList.contains("open") && modalPanel) return;

      const currentY = event.touches[0].clientY;
      const delta = lastY - currentY;
      lastY = currentY;

      if (Math.abs(currentY - startY) < 6) return;
      moved = true;

      const scrollRoot = getScrollRoot();
      const maxScroll = Math.max(0, scrollRoot.scrollHeight - window.innerHeight);
      const currentScroll = window.scrollY || scrollRoot.scrollTop || 0;
      const nextScroll = Math.min(maxScroll, Math.max(0, currentScroll + delta));

      event.preventDefault();
      if (nextScroll !== currentScroll) window.scrollTo(0, nextScroll);
    },
    { passive: false, capture: true }
  );

  document.addEventListener(
    "touchend",
    () => {
      cancelNextClick = moved;
      active = false;
    },
    { passive: true, capture: true }
  );

  document.addEventListener(
    "touchcancel",
    () => {
      active = false;
      moved = false;
    },
    { passive: true, capture: true }
  );

  document.addEventListener(
    "click",
    (event) => {
      if (!cancelNextClick) return;
      moved = false;
      cancelNextClick = false;
      if (Math.abs(lastY - startY) > 10) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true
  );
}

if (new URLSearchParams(window.location.search).get("manualScroll") === "1") {
  installTouchScrollFallback();
}

if (!window.firebase || !isFirebaseConfigured()) {
  showAuthScreen("Falta configurar Firebase en firebase-config.js.");
  setAuthBusy(true);
} else {
  firebase.initializeApp(window.FIREBASE_CONFIG);
  db = firebase.firestore(firebase.app());
  storage = firebase.storage(firebase.app());
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      handleAuthenticatedUser(user);
    } else {
      showAuthScreen();
    }
  });
}
