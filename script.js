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
  language: localStorage.getItem("rutfit-language") || "es",
  selectedRoutine: "",
  currentUser: null,
  currentUserData: null,
  isAdmin: false,
  adminPanelOpen: false,
  adminRoutineId: "",
  adminDraft: null,
  adminUsers: [],
  selectedAdminUserId: "",
  adminEditorMode: "",
  pendingAssignUserId: "",
  adminEditingExerciseKey: "",
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
let unsubscribeCurrentUser = null;
let unsubscribeAdminUsers = null;

const routineSelect = document.querySelector("#routineSelect");
const appHeader = document.querySelector("#appHeader");
const appMain = document.querySelector("#appMain");
const changeRoutine = document.querySelector("#changeRoutine");
const authForm = document.querySelector("#authForm");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const rememberSession = document.querySelector("#rememberSession");
const languageSelect = document.querySelector("#languageSelect");
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
const adminRoutineEditor = document.querySelector("#adminRoutineEditor");
const adminEditorTitle = document.querySelector("#adminEditorTitle");
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
const adminUsers = document.querySelector("#adminUsers");

const modal = document.querySelector("#exerciseModal");
const closeModal = document.querySelector("#closeModal");
const doneButton = document.querySelector("#doneButton");
const startTimer = document.querySelector("#startTimer");
const resetTimer = document.querySelector("#resetTimer");
const timerDisplay = document.querySelector("#timerDisplay");
const AUTH_PERSISTENCE_KEY = "rutfit-auth-persistence";
const LANGUAGE_KEY = "rutfit-language";
const DEFAULT_LANGUAGE = "es";

const translations = {
  es: {
    privateAccess: "Acceso privado",
    loginTitle: "Iniciar sesión",
    languageLabel: "Idioma",
    password: "Contraseña",
    passwordPlaceholder: "Mínimo 6 caracteres",
    rememberSession: "Mantener sesión iniciada",
    loginButton: "Iniciar sesión",
    createAccount: "Crear cuenta",
    resetPassword: "Recuperar contraseña por mail",
    admin: "Admin",
    logout: "Cerrar sesión",
    totalProgress: "Progreso total",
    doneShort: "hecho",
    searchFilterControls: "Controles de búsqueda y filtro",
    search: "Buscar",
    searchPlaceholder: "Ej: squat, lactato, bike...",
    filterByGoal: "Filtrar por objetivo",
    all: "Todos",
    strength: "Fuerza",
    power: "Potencia",
    lactate: "Lactato",
    isometry: "Isometría",
    recovery: "Recuperación",
    planSummary: "Resumen del plan",
    routineInPreparation: "Rutina en preparación",
    comingSoon: "Próximamente",
    administrator: "Administrador",
    routinePanel: "Panel de rutinas",
    routinePanelHelp: "Crea y edita rutinas guardadas en Firestore.",
    closePanel: "Cerrar panel",
    users: "Usuarios",
    loadingUsers: "Cargando usuarios...",
    assignRoutines: "Asignar rutinas",
    routine: "Rutina",
    routineEditor: "Editor de rutina",
    name: "Nombre",
    title: "Título",
    tag: "Etiqueta",
    saveRoutine: "Guardar rutina",
    newRoutine: "Nueva rutina",
    migrateDario: "Migrar Dario actual",
    createWeek: "Crear semana",
    deleteRoutine: "Eliminar rutina",
    closeDetail: "Cerrar detalle",
    startPosition: "Posición inicial / bajada",
    endPosition: "Posición final / subida",
    sets: "Series",
    reps: "Reps",
    rest: "Descanso",
    technique: "Técnica",
    commonMistakes: "Errores comunes",
    done: "Hecho",
    markDone: "Marcar como hecho",
    startRest: "Iniciar descanso",
    reset: "Reiniciar",
    sessions: "sesiones",
    exercises: "ejercicios",
    completed: "completados",
    weeks: "semanas",
    noUsers: "Todavía no hay usuarios con perfil en Firestore.",
    usersLoadError: "No se pudieron cargar usuarios. Revisa reglas de Firestore.",
    noRoutine: "Sin rutina",
    unavailableRoutine: "Rutina no disponible: {id}",
    user: "Usuario",
    noEmail: "Sin email",
    assignExistingRoutine: "Asignar rutina existente",
    addRoutine: "Agregar rutina",
    editCurrentRoutine: "Editar rutina actual",
    removeRoutine: "Quitar rutina",
    backToUsers: "← Volver a usuarios",
    newRoutineFor: "Nueva rutina para {name}",
    editingRoutine: "Editando {name}",
    newRoutineOption: "Rutina nueva",
    noStartImage: "Sin imagen inicial",
    noEndImage: "Sin imagen final",
    newExercise: "Ejercicio nuevo",
    savedExercises: "Ejercicios guardados",
    editExercise: "Editar ejercicio",
    saveExercise: "Guardar ejercicio",
    exerciseSaved: "Ejercicio guardado.",
    deleteExercise: "Eliminar ejercicio",
    objective: "Objetivo",
    startImage: "Imagen inicial",
    endImage: "Imagen final",
    startImageAlt: "{name} posición inicial o bajada",
    endImageAlt: "{name} posición final o subida",
    uploadStartImage: "Subir imagen inicial",
    uploadEndImage: "Subir imagen final",
    technicalGoal: "Objetivo técnico",
    mistakesOnePerLine: "Errores comunes, uno por línea",
    dayNumber: "Día {number}",
    deleteDay: "Eliminar día",
    dayTitle: "Título del día",
    focus: "Foco",
    createExercise: "Crear ejercicio",
    emptyDay: "Este día todavía no tiene ejercicios.",
    week: "Semana",
    noPhase: "Sin fase",
    deleteWeek: "Eliminar semana",
    number: "Número",
    phase: "Fase",
    badge: "Badge",
    instructions: "Indicaciones",
    createDay: "Crear día",
    emptyWeek: "Esta semana todavía no tiene días.",
    createWeekPrompt: "Crea una semana para empezar esta rutina.",
    newPhase: "Nueva fase",
    noMatchingExercises: "No hay ejercicios que coincidan con esa búsqueda.",
    completeWeek: "Hecha",
    restLower: "descanso",
    hello: "Hola, {name}",
    loadingRoutine: "Cargando rutina...",
    adminRulesNotice: "Entraste como admin. Para editar rutinas, publica las reglas nuevas de Firestore.",
    userLoadError: "No se pudo cargar tu usuario. Revisa Firestore.",
    uploadingImage: "Subiendo imagen...",
    imageLoaded: "Imagen cargada. Toca Guardar rutina para guardar el cambio.",
    updatingUser: "Actualizando usuario...",
    assignedRoutine: "Rutina asignada al usuario.",
    userWithoutRoutine: "Usuario sin rutina asignada.",
    newRoutinePreparedAssign: "Nueva rutina preparada. Al guardar se asigna a este usuario.",
    removingRoutine: "Quitando rutina...",
    routineRemoved: "Rutina quitada. El usuario verá Próximamente.",
    newRoutinePrepared: "Nueva rutina preparada. Edita los datos y guárdala.",
    darioMigrated: "Rutina Dario migrada a Firestore.",
    darioMigratedAssigned: "Rutina Dario migrada y asignada al usuario.",
    routineNeedsId: "La rutina necesita un ID.",
    routineSaved: "Rutina guardada en Firestore.",
    routineSavedAssigned: "Rutina guardada y asignada al usuario.",
    deleteRoutineConfirm: "¿Eliminar la rutina \"{name}\" de Firestore?",
    routineDeleted: "Rutina eliminada.",
    signingIn: "Ingresando...",
    creatingAccount: "Creando cuenta...",
    writeEmailForReset: "Escribe tu email para recuperar la contraseña.",
    sendingReset: "Enviando correo de recuperación...",
    resetSent: "Te envié un correo para recuperar la contraseña.",
    firebaseMissing: "Falta configurar Firebase en firebase-config.js.",
    invalidEmail: "El email no es válido.",
    invalidLogin: "Email o contraseña incorrectos.",
    emailInUse: "Ese email ya tiene una cuenta.",
    weakPassword: "La contraseña debe tener al menos 6 caracteres.",
    firebaseAuthMissing: "Falta activar Firebase Authentication en este proyecto.",
    authProviderDisabled: "Activa Email/Password en Firebase Authentication.",
    invalidApiKey: "La configuración de Firebase no es válida.",
    permissionDenied: "Firestore está bloqueando el acceso. Revisa las reglas de la base de datos.",
    firestoreNotFound: "No se encontró Firestore o el documento solicitado. Revisa que la base sea (default).",
    firestorePending: "Firestore necesita terminar de activarse o tiene una condición pendiente ({code}). Espera un minuto y recarga.",
    firestoreUnavailable: "Firestore no está disponible ahora. Revisa conexión o configuración.",
    networkFailed: "No hay conexión. Inténtalo de nuevo.",
    actionFailed: "No se pudo completar la acción{code}.",
    storageNotReady: "Firebase Storage no está inicializado.",
    selectImageFile: "Selecciona un archivo de imagen."
  },
  en: {
    privateAccess: "Private access",
    loginTitle: "Sign in",
    languageLabel: "Language",
    password: "Password",
    passwordPlaceholder: "Minimum 6 characters",
    rememberSession: "Keep me signed in",
    loginButton: "Sign in",
    createAccount: "Create account",
    resetPassword: "Reset password by email",
    admin: "Admin",
    logout: "Sign out",
    totalProgress: "Total progress",
    doneShort: "done",
    searchFilterControls: "Search and filter controls",
    search: "Search",
    searchPlaceholder: "Ex: squat, lactate, bike...",
    filterByGoal: "Filter by goal",
    all: "All",
    strength: "Strength",
    power: "Power",
    lactate: "Lactate",
    isometry: "Isometry",
    recovery: "Recovery",
    planSummary: "Plan summary",
    routineInPreparation: "Routine in preparation",
    comingSoon: "Coming soon",
    administrator: "Administrator",
    routinePanel: "Routine panel",
    routinePanelHelp: "Create and edit routines stored in Firestore.",
    closePanel: "Close panel",
    users: "Users",
    loadingUsers: "Loading users...",
    assignRoutines: "Assign routines",
    routine: "Routine",
    routineEditor: "Routine editor",
    name: "Name",
    title: "Title",
    tag: "Tag",
    saveRoutine: "Save routine",
    newRoutine: "New routine",
    migrateDario: "Migrate current Dario",
    createWeek: "Create week",
    deleteRoutine: "Delete routine",
    closeDetail: "Close detail",
    startPosition: "Start / lowering position",
    endPosition: "End / rising position",
    sets: "Sets",
    reps: "Reps",
    rest: "Rest",
    technique: "Technique",
    commonMistakes: "Common mistakes",
    done: "Done",
    markDone: "Mark as done",
    startRest: "Start rest",
    reset: "Reset",
    sessions: "sessions",
    exercises: "exercises",
    completed: "completed",
    weeks: "weeks",
    noUsers: "There are no users with a Firestore profile yet.",
    usersLoadError: "Could not load users. Check Firestore rules.",
    noRoutine: "No routine",
    unavailableRoutine: "Routine unavailable: {id}",
    user: "User",
    noEmail: "No email",
    assignExistingRoutine: "Assign existing routine",
    addRoutine: "Add routine",
    editCurrentRoutine: "Edit current routine",
    removeRoutine: "Remove routine",
    backToUsers: "← Back to users",
    newRoutineFor: "New routine for {name}",
    editingRoutine: "Editing {name}",
    newRoutineOption: "New routine",
    noStartImage: "No start image",
    noEndImage: "No end image",
    newExercise: "New exercise",
    savedExercises: "Saved exercises",
    editExercise: "Edit exercise",
    saveExercise: "Save exercise",
    exerciseSaved: "Exercise saved.",
    deleteExercise: "Delete exercise",
    objective: "Goal",
    startImage: "Start image",
    endImage: "End image",
    startImageAlt: "{name} start or lowering position",
    endImageAlt: "{name} end or rising position",
    uploadStartImage: "Upload start image",
    uploadEndImage: "Upload end image",
    technicalGoal: "Technical goal",
    mistakesOnePerLine: "Common mistakes, one per line",
    dayNumber: "Day {number}",
    deleteDay: "Delete day",
    dayTitle: "Day title",
    focus: "Focus",
    createExercise: "Create exercise",
    emptyDay: "This day has no exercises yet.",
    week: "Week",
    noPhase: "No phase",
    deleteWeek: "Delete week",
    number: "Number",
    phase: "Phase",
    badge: "Badge",
    instructions: "Instructions",
    createDay: "Create day",
    emptyWeek: "This week has no days yet.",
    createWeekPrompt: "Create a week to start this routine.",
    newPhase: "New phase",
    noMatchingExercises: "No exercises match that search.",
    completeWeek: "Done",
    restLower: "rest",
    hello: "Hi, {name}",
    loadingRoutine: "Loading routine...",
    adminRulesNotice: "You entered as admin. To edit routines, publish the new Firestore rules.",
    userLoadError: "Could not load your user. Check Firestore.",
    uploadingImage: "Uploading image...",
    imageLoaded: "Image uploaded. Tap Save routine to save the change.",
    updatingUser: "Updating user...",
    assignedRoutine: "Routine assigned to user.",
    userWithoutRoutine: "User has no assigned routine.",
    newRoutinePreparedAssign: "New routine prepared. Saving will assign it to this user.",
    removingRoutine: "Removing routine...",
    routineRemoved: "Routine removed. The user will see Coming soon.",
    newRoutinePrepared: "New routine prepared. Edit it and save.",
    darioMigrated: "Dario routine migrated to Firestore.",
    darioMigratedAssigned: "Dario routine migrated and assigned to user.",
    routineNeedsId: "The routine needs an ID.",
    routineSaved: "Routine saved in Firestore.",
    routineSavedAssigned: "Routine saved and assigned to user.",
    deleteRoutineConfirm: "Delete routine \"{name}\" from Firestore?",
    routineDeleted: "Routine deleted.",
    signingIn: "Signing in...",
    creatingAccount: "Creating account...",
    writeEmailForReset: "Enter your email to reset the password.",
    sendingReset: "Sending recovery email...",
    resetSent: "I sent you a password recovery email.",
    firebaseMissing: "Firebase is missing in firebase-config.js.",
    invalidEmail: "The email is not valid.",
    invalidLogin: "Incorrect email or password.",
    emailInUse: "That email already has an account.",
    weakPassword: "Password must be at least 6 characters.",
    firebaseAuthMissing: "Firebase Authentication must be enabled for this project.",
    authProviderDisabled: "Enable Email/Password in Firebase Authentication.",
    invalidApiKey: "Firebase configuration is not valid.",
    permissionDenied: "Firestore is blocking access. Check database rules.",
    firestoreNotFound: "Firestore or the requested document was not found. Check that the database is (default).",
    firestorePending: "Firestore needs to finish activating or has a pending condition ({code}). Wait a minute and reload.",
    firestoreUnavailable: "Firestore is unavailable right now. Check connection or configuration.",
    networkFailed: "No connection. Try again.",
    actionFailed: "Could not complete the action{code}.",
    storageNotReady: "Firebase Storage is not initialized.",
    selectImageFile: "Select an image file."
  },
  pt: {
    privateAccess: "Acesso privado",
    loginTitle: "Entrar",
    languageLabel: "Idioma",
    password: "Senha",
    passwordPlaceholder: "Mínimo de 6 caracteres",
    rememberSession: "Manter sessão iniciada",
    loginButton: "Entrar",
    createAccount: "Criar conta",
    resetPassword: "Recuperar senha por email",
    admin: "Admin",
    logout: "Sair",
    totalProgress: "Progresso total",
    doneShort: "feito",
    searchFilterControls: "Controles de busca e filtro",
    search: "Buscar",
    searchPlaceholder: "Ex: squat, lactato, bike...",
    filterByGoal: "Filtrar por objetivo",
    all: "Todos",
    strength: "Força",
    power: "Potência",
    lactate: "Lactato",
    isometry: "Isometria",
    recovery: "Recuperação",
    planSummary: "Resumo do plano",
    routineInPreparation: "Rotina em preparação",
    comingSoon: "Em breve",
    administrator: "Administrador",
    routinePanel: "Painel de rotinas",
    routinePanelHelp: "Crie e edite rotinas salvas no Firestore.",
    closePanel: "Fechar painel",
    users: "Usuários",
    loadingUsers: "Carregando usuários...",
    assignRoutines: "Atribuir rotinas",
    routine: "Rotina",
    routineEditor: "Editor de rotina",
    name: "Nome",
    title: "Título",
    tag: "Etiqueta",
    saveRoutine: "Salvar rotina",
    newRoutine: "Nova rotina",
    migrateDario: "Migrar Dario atual",
    createWeek: "Criar semana",
    deleteRoutine: "Excluir rotina",
    closeDetail: "Fechar detalhe",
    startPosition: "Posição inicial / descida",
    endPosition: "Posição final / subida",
    sets: "Séries",
    reps: "Reps",
    rest: "Descanso",
    technique: "Técnica",
    commonMistakes: "Erros comuns",
    done: "Feito",
    markDone: "Marcar como feito",
    startRest: "Iniciar descanso",
    reset: "Reiniciar",
    sessions: "sessões",
    exercises: "exercícios",
    completed: "concluídos",
    weeks: "semanas",
    noUsers: "Ainda não há usuários com perfil no Firestore.",
    usersLoadError: "Não foi possível carregar usuários. Revise as regras do Firestore.",
    noRoutine: "Sem rotina",
    unavailableRoutine: "Rotina indisponível: {id}",
    user: "Usuário",
    noEmail: "Sem email",
    assignExistingRoutine: "Atribuir rotina existente",
    addRoutine: "Adicionar rotina",
    editCurrentRoutine: "Editar rotina atual",
    removeRoutine: "Remover rotina",
    backToUsers: "← Voltar aos usuários",
    newRoutineFor: "Nova rotina para {name}",
    editingRoutine: "Editando {name}",
    newRoutineOption: "Nova rotina",
    noStartImage: "Sem imagem inicial",
    noEndImage: "Sem imagem final",
    newExercise: "Novo exercício",
    savedExercises: "Exercícios salvos",
    editExercise: "Editar exercício",
    saveExercise: "Salvar exercício",
    exerciseSaved: "Exercício salvo.",
    deleteExercise: "Excluir exercício",
    objective: "Objetivo",
    startImage: "Imagem inicial",
    endImage: "Imagem final",
    startImageAlt: "{name} posição inicial ou descida",
    endImageAlt: "{name} posição final ou subida",
    uploadStartImage: "Enviar imagem inicial",
    uploadEndImage: "Enviar imagem final",
    technicalGoal: "Objetivo técnico",
    mistakesOnePerLine: "Erros comuns, um por linha",
    dayNumber: "Dia {number}",
    deleteDay: "Excluir dia",
    dayTitle: "Título do dia",
    focus: "Foco",
    createExercise: "Criar exercício",
    emptyDay: "Este dia ainda não tem exercícios.",
    week: "Semana",
    noPhase: "Sem fase",
    deleteWeek: "Excluir semana",
    number: "Número",
    phase: "Fase",
    badge: "Badge",
    instructions: "Indicações",
    createDay: "Criar dia",
    emptyWeek: "Esta semana ainda não tem dias.",
    createWeekPrompt: "Crie uma semana para iniciar esta rotina.",
    newPhase: "Nova fase",
    noMatchingExercises: "Nenhum exercício corresponde a essa busca.",
    completeWeek: "Feita",
    restLower: "descanso",
    hello: "Olá, {name}",
    loadingRoutine: "Carregando rotina...",
    adminRulesNotice: "Você entrou como admin. Para editar rotinas, publique as novas regras do Firestore.",
    userLoadError: "Não foi possível carregar seu usuário. Revise o Firestore.",
    uploadingImage: "Enviando imagem...",
    imageLoaded: "Imagem carregada. Toque em Salvar rotina para salvar a alteração.",
    updatingUser: "Atualizando usuário...",
    assignedRoutine: "Rotina atribuída ao usuário.",
    userWithoutRoutine: "Usuário sem rotina atribuída.",
    newRoutinePreparedAssign: "Nova rotina preparada. Ao salvar, será atribuída a este usuário.",
    removingRoutine: "Removendo rotina...",
    routineRemoved: "Rotina removida. O usuário verá Em breve.",
    newRoutinePrepared: "Nova rotina preparada. Edite os dados e salve.",
    darioMigrated: "Rotina Dario migrada para Firestore.",
    darioMigratedAssigned: "Rotina Dario migrada e atribuída ao usuário.",
    routineNeedsId: "A rotina precisa de um ID.",
    routineSaved: "Rotina salva no Firestore.",
    routineSavedAssigned: "Rotina salva e atribuída ao usuário.",
    deleteRoutineConfirm: "Excluir a rotina \"{name}\" do Firestore?",
    routineDeleted: "Rotina excluída.",
    signingIn: "Entrando...",
    creatingAccount: "Criando conta...",
    writeEmailForReset: "Digite seu email para recuperar a senha.",
    sendingReset: "Enviando email de recuperação...",
    resetSent: "Enviei um email para recuperar a senha.",
    firebaseMissing: "Falta configurar Firebase em firebase-config.js.",
    invalidEmail: "O email não é válido.",
    invalidLogin: "Email ou senha incorretos.",
    emailInUse: "Esse email já tem uma conta.",
    weakPassword: "A senha deve ter pelo menos 6 caracteres.",
    firebaseAuthMissing: "É necessário ativar Firebase Authentication neste projeto.",
    authProviderDisabled: "Ative Email/Password no Firebase Authentication.",
    invalidApiKey: "A configuração do Firebase não é válida.",
    permissionDenied: "Firestore está bloqueando o acesso. Revise as regras do banco de dados.",
    firestoreNotFound: "Firestore ou o documento solicitado não foi encontrado. Confira se o banco é (default).",
    firestorePending: "Firestore precisa terminar de ativar ou tem uma condição pendente ({code}). Aguarde um minuto e recarregue.",
    firestoreUnavailable: "Firestore não está disponível agora. Revise conexão ou configuração.",
    networkFailed: "Sem conexão. Tente novamente.",
    actionFailed: "Não foi possível concluir a ação{code}.",
    storageNotReady: "Firebase Storage não está inicializado.",
    selectImageFile: "Selecione um arquivo de imagem."
  }
};

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
  if (rememberSession) {
    rememberSession.disabled = isBusy;
  }
}

function isFirebaseConfigured() {
  const config = window.FIREBASE_CONFIG || {};
  return Boolean(config.apiKey && config.authDomain && !String(config.apiKey).startsWith("PEGAR_"));
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function t(key, params = {}) {
  const dictionary = translations[state.language] || translations[DEFAULT_LANGUAGE];
  let value = dictionary[key] || translations[DEFAULT_LANGUAGE][key] || key;
  Object.entries(params).forEach(([paramKey, paramValue]) => {
    value = value.replaceAll(`{${paramKey}}`, String(paramValue ?? ""));
  });
  return value;
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  if (languageSelect) languageSelect.value = state.language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  if (state.currentExerciseKey) {
    doneButton.textContent = progress[state.currentExerciseKey.id] ? t("done") : t("markDone");
  }
}

function setLanguage(language) {
  state.language = translations[language] ? language : DEFAULT_LANGUAGE;
  localStorage.setItem(LANGUAGE_KEY, state.language);
  applyTranslations();
  if (getActiveRoutine()) renderApp();
  else if (state.adminPanelOpen) renderAdminPanel();
}

function initializeRememberSession() {
  if (!rememberSession) return;
  rememberSession.checked = localStorage.getItem(AUTH_PERSISTENCE_KEY) === "local";
}

async function applyAuthPersistence() {
  if (!rememberSession || !window.firebase?.auth) return;
  const mode = rememberSession.checked ? "local" : "session";
  localStorage.setItem(AUTH_PERSISTENCE_KEY, mode);
  const persistence = mode === "local"
    ? firebase.auth.Auth.Persistence.LOCAL
    : firebase.auth.Auth.Persistence.SESSION;
  await firebase.auth().setPersistence(persistence);
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
  if (code.includes("invalid-email")) return t("invalidEmail");
  if (code.includes("user-not-found") || code.includes("wrong-password") || code.includes("invalid-credential")) return t("invalidLogin");
  if (code.includes("email-already-in-use")) return t("emailInUse");
  if (code.includes("weak-password")) return t("weakPassword");
  if (code.includes("configuration-not-found")) return t("firebaseAuthMissing");
  if (code.includes("operation-not-allowed")) return t("authProviderDisabled");
  if (code.includes("api-key-not-valid")) return t("invalidApiKey");
  if (code.includes("permission-denied")) return t("permissionDenied");
  if (code.includes("not-found")) return t("firestoreNotFound");
  if (code.includes("failed-precondition")) return t("firestorePending", { code });
  if (code.includes("unavailable")) return t("firestoreUnavailable");
  if (code.includes("network-request-failed")) return t("networkFailed");
  return t("actionFailed", { code: code ? ` (${code})` : "" });
}

function showAuthScreen(message = "") {
  stopUserSubscriptions();
  state.selectedRoutine = "";
  state.currentUser = null;
  state.currentUserData = null;
  state.isAdmin = false;
  state.adminPanelOpen = false;
  state.adminDraft = null;
  state.adminUsers = [];
  state.selectedAdminUserId = "";
  state.adminEditorMode = "";
  state.pendingAssignUserId = "";
  state.adminEditingExerciseKey = "";
  closeExercise();
  routineSelect.classList.remove("is-hidden");
  appHeader.classList.add("is-hidden");
  appMain.classList.add("is-hidden");
  adminToggle.classList.add("is-hidden");
  adminPanel.classList.add("is-hidden");
  if (message) setAuthMessage(message);
}

function stopUserSubscriptions() {
  if (unsubscribeCurrentUser) {
    unsubscribeCurrentUser();
    unsubscribeCurrentUser = null;
  }
  if (unsubscribeAdminUsers) {
    unsubscribeAdminUsers();
    unsubscribeAdminUsers = null;
  }
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
    setAuthMessage(t("adminRulesNotice"), "error");
  }
}

function startAdminUsersListener() {
  if (!state.isAdmin || unsubscribeAdminUsers) return;
  unsubscribeAdminUsers = db.collection("users").onSnapshot(
    (snapshot) => {
      state.adminUsers = snapshot.docs
        .map((doc) => ({
          uid: doc.id,
          ...doc.data()
        }))
        .sort((a, b) => String(a.email || a.displayName || "").localeCompare(String(b.email || b.displayName || "")));
      if (state.selectedAdminUserId && !state.adminUsers.some((user) => user.uid === state.selectedAdminUserId)) {
        state.selectedAdminUserId = "";
        state.adminEditorMode = "";
        state.pendingAssignUserId = "";
        state.adminEditingExerciseKey = "";
        state.adminDraft = null;
      }
      if (state.adminPanelOpen) {
        renderAdminPanel();
      }
    },
    (error) => {
      console.error("Admin users listener error:", error);
      if (adminUsers) {
        adminUsers.innerHTML = `<div class="empty-state">${t("usersLoadError")}</div>`;
      }
    }
  );
}

async function updateUserRoutine(uid, routineId) {
  if (!state.isAdmin || !uid) return;
  await db.collection("users").doc(uid).set(
    {
      routineId,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: normalizeEmail(state.currentUser?.email || "")
    },
    { merge: true }
  );
}

function getAdminUser(uid) {
  return state.adminUsers.find((user) => user.uid === uid) || null;
}

function createRoutineIdForUser(user) {
  const baseName = user?.displayName || getDisplayNameFromEmail(user?.email || "") || "usuario";
  return slugify(`rutina-${baseName}-${Date.now()}`);
}

function renderAdminUsers() {
  if (!adminUsers) return;
  const routineIds = getAdminRoutineIds();

  if (!state.adminUsers.length) {
    adminUsers.innerHTML = `<div class="empty-state">${t("noUsers")}</div>`;
    return;
  }

  const visibleUsers = state.selectedAdminUserId
    ? state.adminUsers.filter((user) => user.uid === state.selectedAdminUserId)
    : state.adminUsers;

  if (state.selectedAdminUserId && !visibleUsers.length) {
    state.selectedAdminUserId = "";
    state.adminEditorMode = "";
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminDraft = null;
    renderAdminUsers();
    return;
  }

  adminUsers.innerHTML = [
    state.selectedAdminUserId
      ? `<button class="secondary-button admin-back-button" type="button" data-admin-users-back>${t("backToUsers")}</button>`
      : "",
    ...visibleUsers
    .map((user) => {
      const displayName = user.displayName || getDisplayNameFromEmail(user.email || "");
      const currentRoutine = user.routineId || "";
      const currentRoutineName = currentRoutine && routines[currentRoutine]
        ? routines[currentRoutine].name || currentRoutine
        : currentRoutine
          ? t("unavailableRoutine", { id: currentRoutine })
          : t("noRoutine");
      const isOpen = state.selectedAdminUserId === user.uid;
      const routineOptions = [
        `<option value="" ${!currentRoutine ? "selected" : ""}>${t("noRoutine")}</option>`,
        ...routineIds.map((id) => `<option value="${escapeHtml(id)}" ${id === currentRoutine ? "selected" : ""}>${escapeHtml(routines[id].name || id)}</option>`),
        currentRoutine && !routineIds.includes(currentRoutine)
          ? `<option value="${escapeHtml(currentRoutine)}" selected>${escapeHtml(t("unavailableRoutine", { id: currentRoutine }))}</option>`
          : ""
      ].join("");
      return `
        <article class="admin-user-card ${isOpen ? "open" : ""}" data-user-id="${escapeHtml(user.uid)}">
          <button class="admin-user-toggle" type="button" data-user-toggle aria-expanded="${isOpen}">
            <span class="admin-user-main">
              <strong>${escapeHtml(displayName || t("user"))}</strong>
              <span>${escapeHtml(user.email || t("noEmail"))}</span>
              <small>${escapeHtml(user.role || "user")}</small>
            </span>
            <span class="admin-user-status">${escapeHtml(currentRoutineName)}</span>
            <span class="week-chevron">${isOpen ? "−" : "+"}</span>
          </button>
          ${isOpen ? `
            <div class="admin-user-panel">
              <label class="search-box admin-user-routine">
                <span>${t("assignExistingRoutine")}</span>
                <select data-user-routine>
                  ${routineOptions}
                </select>
              </label>
              <div class="admin-row-actions">
                <button class="primary-button" type="button" data-user-action="add-routine">${t("addRoutine")}</button>
                <button class="secondary-button" type="button" data-user-action="edit-routine" ${currentRoutine && routines[currentRoutine] ? "" : "disabled"}>${t("editCurrentRoutine")}</button>
                <button class="danger-button" type="button" data-user-clear>${t("removeRoutine")}</button>
              </div>
            </div>
          ` : ""}
        </article>
      `;
    })
  ].join("");
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

async function saveAdminDraftAndAssignment() {
  if (!state.adminDraft) return "";
  readAdminBasics();
  await saveRoutineToFirestore(state.adminDraft);
  const targetUserId = state.pendingAssignUserId || state.selectedAdminUserId;
  if (targetUserId) {
    await updateUserRoutine(targetUserId, state.adminDraft.id);
    state.pendingAssignUserId = targetUserId;
  }
  if (state.selectedRoutine === state.adminDraft.id) {
    selectRoutine(state.adminDraft.id);
  }
  return targetUserId;
}

async function deleteRoutineFromFirestore(routineId) {
  await db.collection("routines").doc(routineId).delete();
  const assignedUsers = await db.collection("users").where("routineId", "==", routineId).get();
  if (!assignedUsers.empty) {
    const batch = db.batch();
    assignedUsers.forEach((doc) => {
      batch.set(
        doc.ref,
        {
          routineId: "",
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedBy: normalizeEmail(state.currentUser?.email || "")
        },
        { merge: true }
      );
    });
    await batch.commit();
  }
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

async function applyUserData(userData) {
  state.currentUserData = userData;
  state.isAdmin = userData.role === "admin" || isAdminEmail(state.currentUser?.email);
  if (state.isAdmin) {
    await loadFirestoreRoutinesForAdmin();
    startAdminUsersListener();
  } else if (unsubscribeAdminUsers) {
    unsubscribeAdminUsers();
    unsubscribeAdminUsers = null;
    state.adminUsers = [];
  }

  const routineId = userData.routineId || "";
  const firestoreRoutine = routineId ? await loadRoutineFromFirestore(routineId) : null;
  if (firestoreRoutine) {
    routines[firestoreRoutine.id] = firestoreRoutine;
  }

  if (routines[routineId]) {
    selectRoutine(routineId);
  } else {
    selectRoutine("pending");
  }
}

function startCurrentUserListener(user) {
  if (unsubscribeCurrentUser) {
    unsubscribeCurrentUser();
    unsubscribeCurrentUser = null;
  }

  unsubscribeCurrentUser = db.collection("users").doc(user.uid).onSnapshot(
    async (snapshot) => {
      if (!snapshot.exists) {
        await ensureUserDocument(user);
        return;
      }
      try {
        await applyUserData(snapshot.data());
      } catch (error) {
        console.error("User data refresh error:", error);
        showAuthScreen(getAuthErrorMessage(error));
      }
    },
    (error) => {
      console.error("Current user listener error:", error);
      showAuthScreen(getAuthErrorMessage(error));
    }
  );
}

async function handleAuthenticatedUser(user) {
  if (!user?.email) {
    showAuthScreen();
    return;
  }

  state.currentUser = user;
  setAuthMessage(t("loadingRoutine"));

  try {
    await ensureUserDocument(user);
    startCurrentUserListener(user);
  } catch (error) {
    await firebase.auth().signOut();
    showAuthScreen(t("userLoadError"));
    setAuthMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    console.error("Firestore user load error:", error);
  }
}

function renderApp() {
  const routine = getActiveRoutine() || routines.pending;
  if (!routine) {
    return;
  }

  routineSelect.classList.add("is-hidden");
  appHeader.classList.remove("is-hidden");
  appMain.classList.remove("is-hidden");
  appKicker.textContent = routine.kicker;
  appTitle.textContent = routine.title;
  const displayName = state.currentUserData?.displayName || getDisplayNameFromEmail(state.currentUser?.email || "");
  userGreeting.textContent = displayName ? t("hello", { name: displayName }) : "";
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
    [totalSessions, t("sessions")],
    [Object.keys(routine.exerciseLibrary).length, t("exercises")],
    [doneCount, t("completed")],
    [routine.plan.length, t("weeks")]
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
  if (!storage) throw new Error(t("storageNotReady"));
  if (!file?.type?.startsWith("image/")) throw new Error(t("selectImageFile"));
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
  state.adminEditingExerciseKey = "";
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
  renderAdminUsers();

  if (!state.adminDraft || !state.adminEditorMode) {
    adminRoutineEditor.classList.add("is-hidden");
    adminWeeks.innerHTML = "";
    adminRoutineSelect.innerHTML = "";
    return;
  }

  adminRoutineEditor.classList.remove("is-hidden");
  const draft = state.adminDraft;
  const selectedUser = getAdminUser(state.pendingAssignUserId || state.selectedAdminUserId);
  const selectedUserName = selectedUser?.displayName || getDisplayNameFromEmail(selectedUser?.email || "");
  adminEditorTitle.textContent = state.adminEditorMode === "create"
    ? t("newRoutineFor", { name: selectedUserName || t("user") })
    : t("editingRoutine", { name: draft.name || draft.id });

  const routineIds = getAdminRoutineIds();
  adminRoutineSelect.innerHTML = [
    !routineIds.includes(draft.id) ? `<option value="${escapeHtml(draft.id)}" selected>${t("newRoutineOption")}</option>` : "",
    ...routineIds.map((id) => `<option value="${escapeHtml(id)}" ${id === draft.id ? "selected" : ""}>${escapeHtml(routines[id].name || id)}</option>`)
  ].join("");
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
              const isEditingExercise = state.adminEditingExerciseKey === exerciseKey;
              const images = exercise.images || ["", ""];
              const startPreview = images[0]
                ? `<img class="admin-image-preview" src="${escapeHtml(images[0])}" alt="${t("startImage")}" />`
                : `<div class="admin-image-empty">${t("noStartImage")}</div>`;
              const endPreview = images[1]
                ? `<img class="admin-image-preview" src="${escapeHtml(images[1])}" alt="${t("endImage")}" />`
                : `<div class="admin-image-empty">${t("noEndImage")}</div>`;
              return `
                <div class="admin-exercise ${isEditingExercise ? "is-editing" : ""}" data-week-index="${weekIndex}" data-day-index="${dayIndex}" data-exercise-key="${escapeHtml(exerciseKey)}">
                  <div class="admin-exercise-summary">
                    <div>
                      <strong>${escapeHtml(exercise.name || t("newExercise"))}</strong>
                      <small>${escapeHtml([exercise.objective, exercise.baseSets && exercise.baseReps ? `${exercise.baseSets} x ${exercise.baseReps}` : "", exercise.rest].filter(Boolean).join(" · "))}</small>
                    </div>
                    <div class="admin-row-actions compact">
                      <button class="secondary-button" type="button" data-admin-action="edit-exercise">${t("editExercise")}</button>
                      <button class="danger-button" type="button" data-admin-action="delete-exercise">${t("deleteExercise")}</button>
                    </div>
                  </div>
                  ${isEditingExercise ? `
                    <div class="admin-exercise-form">
                      <div class="admin-exercise-grid">
                        <label class="search-box"><span>${t("name")}</span><input class="admin-field" data-exercise-field="name" value="${escapeHtml(exercise.name || "")}" /></label>
                        <label class="search-box"><span>${t("objective")}</span><input class="admin-field" data-exercise-field="objective" value="${escapeHtml(exercise.objective || "")}" /></label>
                        <label class="search-box"><span>${t("sets")}</span><input class="admin-field" data-exercise-field="baseSets" value="${escapeHtml(exercise.baseSets || "")}" /></label>
                        <label class="search-box"><span>${t("reps")}</span><input class="admin-field" data-exercise-field="baseReps" value="${escapeHtml(exercise.baseReps || "")}" /></label>
                        <label class="search-box"><span>${t("rest")}</span><input class="admin-field" data-exercise-field="rest" value="${escapeHtml(exercise.rest || "")}" /></label>
                        <div class="admin-image-uploader">
                          <span>${t("startImage")}</span>
                          ${startPreview}
                          <input class="admin-field" data-exercise-field="imageStart" value="${escapeHtml(images[0] || "")}" />
                          <label class="file-button">
                            ${t("uploadStartImage")}
                            <input type="file" accept="image/*" data-image-upload="0" />
                          </label>
                        </div>
                        <div class="admin-image-uploader">
                          <span>${t("endImage")}</span>
                          ${endPreview}
                          <input class="admin-field" data-exercise-field="imageEnd" value="${escapeHtml(images[1] || "")}" />
                          <label class="file-button">
                            ${t("uploadEndImage")}
                            <input type="file" accept="image/*" data-image-upload="1" />
                          </label>
                        </div>
                      </div>
                      <label class="search-box"><span>${t("technicalGoal")}</span><textarea class="admin-textarea" data-exercise-field="goal">${escapeHtml(exercise.goal || "")}</textarea></label>
                      <label class="search-box"><span>${t("technique")}</span><textarea class="admin-textarea" data-exercise-field="technique">${escapeHtml(exercise.technique || "")}</textarea></label>
                      <label class="search-box"><span>${t("mistakesOnePerLine")}</span><textarea class="admin-textarea" data-exercise-field="mistakes">${escapeHtml((exercise.mistakes || []).join("\n"))}</textarea></label>
                      <button class="primary-button" type="button" data-admin-action="save-exercise">${t("saveExercise")}</button>
                    </div>
                  ` : ""}
                </div>
              `;
            })
            .join("");

          const isDayCollapsed = day.collapsed === true;

return `
  <div class="admin-day ${isDayCollapsed ? "collapsed" : ""}" data-week-index="${weekIndex}" data-day-index="${dayIndex}">
    <div class="admin-card-title">
      <div>
        <h4>${escapeHtml(day.title || t("dayNumber", { number: dayIndex + 1 }))}</h4>
        <small>${(day.exercises || []).length} ejercicios guardados</small>
      </div>

      <div class="admin-row-actions">
        ${isDayCollapsed
          ? `<button class="secondary-button" type="button" data-admin-action="edit-day">Editar día</button>`
          : `<button class="primary-button" type="button" data-admin-action="save-day">Guardar día</button>`
        }
        <button class="danger-button" type="button" data-admin-action="delete-day">${t("deleteDay")}</button>
      </div>
    </div>

    ${isDayCollapsed ? "" : `
      <div class="admin-exercise-grid">
        <label class="search-box"><span>${t("dayTitle")}</span><input class="admin-field" data-day-field="title" value="${escapeHtml(day.title || "")}" /></label>
        <label class="search-box"><span>${t("focus")}</span><input class="admin-field" data-day-field="focus" value="${escapeHtml(day.focus || "")}" /></label>
      </div>

      <div class="admin-row-actions">
        <button class="secondary-button" type="button" data-admin-action="add-exercise">${t("createExercise")}</button>
      </div>

      ${exercises ? `<div class="admin-exercise-list"><small>${t("savedExercises")}</small>${exercises}</div>` : `<div class="empty-state">${t("emptyDay")}</div>`}
    `}
  </div>
          `;
        })
        .join("");
        const isWeekCollapsed = week.collapsed === true;
      return `
        <article class="admin-editor-card" data-week-index="${weekIndex}">
          <div class="admin-card-title">
            <div>
              <small>${t("week")}</small>
              <h3>${escapeHtml(week.number || weekIndex + 1)}: ${escapeHtml(phase.name || t("noPhase"))}</h3>
            </div>
            <div class="admin-row-actions">
  ${isWeekCollapsed
  ? `<button class="secondary-button" type="button" data-admin-action="edit-week">Editar semana</button>`
  : `<button class="primary-button" type="button" data-admin-action="save-week">Guardar semana</button>`
}
  <button class="danger-button" type="button" data-admin-action="delete-week">${t("deleteWeek")}</button>
</div>
          ${isWeekCollapsed ? `
  <div class="empty-state">
    Semana guardada - ${(week.days || []).length} días guardados
  </div>
` : `
  <div class="admin-exercise-grid">
    <label class="search-box"><span>${t("number")}</span><input class="admin-field" data-week-field="number" value="${escapeHtml(week.number || weekIndex + 1)}" /></label>
    <label class="search-box"><span>${t("phase")}</span><input class="admin-field" data-week-field="phase.name" value="${escapeHtml(phase.name || "")}" /></label>
    <label class="search-box"><span>${t("badge")}</span><input class="admin-field" data-week-field="phase.badge" value="${escapeHtml(phase.badge || "")}" /></label>
    <label class="search-box"><span>${t("instructions")}</span><input class="admin-field" data-week-field="phase.modifier" value="${escapeHtml(phase.modifier || "")}" /></label>
  </div>
  <div class="admin-row-actions">
    <button class="secondary-button" type="button" data-admin-action="add-day">${t("createDay")}</button>
  </div>
  ${days || `<div class="empty-state">${t("emptyWeek")}</div>`}
`}
        </article>
      `;
    })
    .join("");

  if (!draft.plan.length) {
    adminWeeks.innerHTML = `<div class="empty-state">${t("createWeekPrompt")}</div>`;
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

async function handleAdminAction(button) {
  const weekIndex = Number(button.closest("[data-week-index]")?.dataset.weekIndex);
  const dayIndex = Number(button.closest("[data-day-index]")?.dataset.dayIndex);
  const exerciseKey = button.closest("[data-exercise-key]")?.dataset.exerciseKey;
  const action = button.dataset.adminAction;

  if (action === "edit-exercise") {
    state.adminEditingExerciseKey = state.adminEditingExerciseKey === exerciseKey ? "" : exerciseKey;
    renderAdminPanel();
    return;
  }

  if (action === "save-exercise") {
  try {
    await saveAdminDraftAndAssignment();
    state.adminEditingExerciseKey = "";
    setAdminMessage(t("exerciseSaved"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
  return;
}

if (action === "save-day") {
  try {
    state.adminDraft.plan[weekIndex].days[dayIndex].collapsed = true;
    await saveAdminDraftAndAssignment();
    renderAdminPanel();
  } catch (error) {
    state.adminDraft.plan[weekIndex].days[dayIndex].collapsed = false;
    setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
  }
  return;
}

if (action === "edit-day") {
  state.adminDraft.plan[weekIndex].days.forEach((day, index) => {
    day.collapsed = index !== dayIndex;
  });
  renderAdminPanel();
  return;
}

if (action === "save-week") {
  try {
    state.adminDraft.plan[weekIndex].collapsed = true;

    state.adminDraft.plan[weekIndex].days.forEach((day) => {
      day.collapsed = true;
    });

    await saveAdminDraftAndAssignment();
    renderAdminPanel();
  } catch (error) {
    state.adminDraft.plan[weekIndex].collapsed = false;
    setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
  }
  return;
}

if (action === "edit-week") {
  state.adminDraft.plan.forEach((week, index) => {
    week.collapsed = index !== weekIndex;
  });

  state.adminDraft.plan[weekIndex].collapsed = false;

  renderAdminPanel();
  return;
}
if (action === "delete-week") {
  state.adminDraft.plan.splice(weekIndex, 1);
  state.adminEditingExerciseKey = "";
}

  if (action === "add-day") {
    state.adminDraft.plan[weekIndex].days = state.adminDraft.plan[weekIndex].days || [];
    state.adminDraft.plan[weekIndex].days.push({ title: t("dayNumber", { number: state.adminDraft.plan[weekIndex].days.length + 1 }), focus: "", exercises: [] });
  }

  if (action === "delete-day") {
    state.adminDraft.plan[weekIndex].days.splice(dayIndex, 1);
  }

  if (action === "add-exercise") {
    const key = `ejercicio-${Date.now()}`;
    state.adminDraft.exerciseLibrary[key] = {
      name: t("newExercise"),
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
    state.adminEditingExerciseKey = key;
  }

  if (action === "delete-exercise") {
    const exercises = state.adminDraft.plan[weekIndex].days[dayIndex].exercises;
    state.adminDraft.plan[weekIndex].days[dayIndex].exercises = exercises.filter((key) => key !== exerciseKey);
    const stillUsed = state.adminDraft.plan.some((week) => week.days.some((day) => day.exercises.includes(exerciseKey)));
    if (!stillUsed) delete state.adminDraft.exerciseLibrary[exerciseKey];
    if (state.adminEditingExerciseKey === exerciseKey) state.adminEditingExerciseKey = "";
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
                    <small>${exercise.objective} · ${prescription.sets} x ${prescription.reps} · ${t("restLower")} ${prescription.rest}</small>
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
              <h2>${t("week")} ${week.number}: ${phase.name}</h2>
              ${isCollapsed ? "" : `<p>${phase.modifier || ""}</p>`}
            </div>
            <span class="week-actions">
              ${weekDone ? `<span class="week-done-label">${t("completeWeek")}</span>` : ""}
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
    weeksContainer.innerHTML = `<div class="empty-state">${t("noMatchingExercises")}</div>`;
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
  document.querySelector("#modalImageStart").alt = t("startImageAlt", { name: exercise.name });
  document.querySelector("#modalImageEnd").src = endImage;
  document.querySelector("#modalImageEnd").alt = t("endImageAlt", { name: exercise.name });

  doneButton.classList.toggle("done", Boolean(progress[id]));
  doneButton.textContent = progress[id] ? t("done") : t("markDone");
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
  doneButton.textContent = progress[id] ? t("done") : t("markDone");

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
  if (!state.adminPanelOpen) {
    state.selectedAdminUserId = "";
    state.adminEditorMode = "";
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminDraft = null;
  }
  renderApp();
});

adminClose.addEventListener("click", () => {
  state.adminPanelOpen = false;
  state.selectedAdminUserId = "";
  state.adminEditorMode = "";
  state.pendingAssignUserId = "";
  state.adminEditingExerciseKey = "";
  state.adminDraft = null;
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

  setAdminMessage(t("uploadingImage"));

  try {
    const exercise = state.adminDraft.exerciseLibrary[exerciseKey];

    if (!exercise) {
      throw new Error("No se encontró el ejercicio para guardar la imagen");
    }

    const url = await uploadExerciseImage(file, exerciseKey, imageIndex);
    exercise.images = Array.isArray(exercise.images) ? exercise.images : ["", ""];
    exercise.images[imageIndex] = url;
    state.adminEditingExerciseKey = exerciseKey;

    await saveAdminDraftAndAssignment();

    setAdminMessage(t("imageLoaded"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
  } finally {
    input.value = "";
  }
});

adminWeeks.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-admin-action]");
  if (!button) return;
  await handleAdminAction(button);
});

adminUsers.addEventListener("change", async (event) => {
  const select = event.target.closest("[data-user-routine]");
  if (!select) return;
  const card = select.closest("[data-user-id]");
  const uid = card?.dataset.userId;
  if (!uid) return;

  select.disabled = true;
  setAdminMessage(t("updatingUser"));
  try {
    await updateUserRoutine(uid, select.value);
    if (state.pendingAssignUserId === uid || state.selectedAdminUserId === uid) {
      state.adminEditorMode = "";
      state.pendingAssignUserId = "";
      state.adminEditingExerciseKey = "";
      state.adminDraft = null;
    }
    setAdminMessage(select.value ? t("assignedRoutine") : t("userWithoutRoutine"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  } finally {
    select.disabled = false;
  }
});

adminUsers.addEventListener("click", async (event) => {
  const backButton = event.target.closest("[data-admin-users-back]");
  if (backButton) {
    state.selectedAdminUserId = "";
    state.adminEditorMode = "";
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminDraft = null;
    setAdminMessage("");
    renderAdminPanel();
    return;
  }

  const toggle = event.target.closest("[data-user-toggle]");
  if (toggle) {
    const card = toggle.closest("[data-user-id]");
    const uid = card?.dataset.userId;
    state.selectedAdminUserId = state.selectedAdminUserId === uid ? "" : uid;
    state.adminEditorMode = "";
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminDraft = null;
    setAdminMessage("");
    renderAdminPanel();
    return;
  }

  const actionButton = event.target.closest("[data-user-action]");
  if (actionButton) {
    const card = actionButton.closest("[data-user-id]");
    const uid = card?.dataset.userId;
    const user = getAdminUser(uid);
    if (!uid || !user) return;

    if (actionButton.dataset.userAction === "add-routine") {
      const routineId = createRoutineIdForUser(user);
      const displayName = user.displayName || getDisplayNameFromEmail(user.email || "");
      state.selectedAdminUserId = uid;
      state.pendingAssignUserId = uid;
      state.adminEditorMode = "create";
      state.adminEditingExerciseKey = "";
      state.adminDraft = createEmptyRoutine(routineId);
      state.adminDraft.name = `Rutina ${displayName || t("user")}`;
      state.adminDraft.title = "RutFit";
      state.adminDraft.kicker = "Nueva";
      setAdminMessage(t("newRoutinePreparedAssign"), "success");
      renderAdminPanel();
      return;
    }

    if (actionButton.dataset.userAction === "edit-routine" && user.routineId && routines[user.routineId]) {
      state.selectedAdminUserId = uid;
      state.pendingAssignUserId = uid;
      state.adminEditorMode = "edit";
      setAdminDraftFromRoutine(user.routineId);
      setAdminMessage("");
      renderAdminPanel();
      return;
    }
  }

  const button = event.target.closest("[data-user-clear]");
  if (!button) return;
  const card = button.closest("[data-user-id]");
  const uid = card?.dataset.userId;
  if (!uid) return;

  button.disabled = true;
  setAdminMessage(t("removingRoutine"));
  try {
    await updateUserRoutine(uid, "");
    if (state.pendingAssignUserId === uid) {
      state.adminEditorMode = "";
      state.pendingAssignUserId = "";
      state.adminEditingExerciseKey = "";
      state.adminDraft = null;
    }
    setAdminMessage(t("routineRemoved"), "success");
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  } finally {
    button.disabled = false;
  }
});

adminAddWeek.addEventListener("click", () => {
  if (!state.adminDraft) state.adminDraft = createEmptyRoutine("nueva-rutina");
  state.adminDraft.plan.push({
    number: state.adminDraft.plan.length + 1,
    phase: { name: t("newPhase"), badge: "Plan", modifier: "" },
    days: []
  });
  renderAdminPanel();
});

adminNewRoutine.addEventListener("click", () => {
  const user = getAdminUser(state.selectedAdminUserId);
  const routineId = user ? createRoutineIdForUser(user) : `rutina-${Date.now()}`;
  state.pendingAssignUserId = user?.uid || "";
  state.adminEditorMode = user ? "create" : "edit";
  state.adminDraft = createEmptyRoutine(routineId);
  if (user) {
    const displayName = user.displayName || getDisplayNameFromEmail(user.email || "");
    state.adminDraft.name = `Rutina ${displayName || t("user")}`;
  }
  state.adminRoutineId = state.adminDraft.id;
  setAdminMessage(user ? t("newRoutinePreparedAssign") : t("newRoutinePrepared"), "success");
  renderAdminPanel();
});

adminSeedDario.addEventListener("click", async () => {
  if (!state.isAdmin) return;
  state.adminDraft = cloneData(serializeRoutine(routines.dario));
  try {
    await saveRoutineToFirestore(state.adminDraft);
    if (state.pendingAssignUserId || state.selectedAdminUserId) {
      await updateUserRoutine(state.pendingAssignUserId || state.selectedAdminUserId, state.adminDraft.id);
    }
    setAdminMessage(state.pendingAssignUserId || state.selectedAdminUserId ? t("darioMigratedAssigned") : t("darioMigrated"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
});

adminSaveRoutine.addEventListener("click", async () => {
  if (!state.isAdmin || !state.adminDraft) return;
  readAdminBasics();
  if (!state.adminDraft.id) {
    setAdminMessage(t("routineNeedsId"), "error");
    return;
  }
  try {
    const assignedUserId = await saveAdminDraftAndAssignment();
    setAdminMessage(assignedUserId ? t("routineSavedAssigned") : t("routineSaved"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
});

adminDeleteRoutine.addEventListener("click", async () => {
  if (!state.isAdmin || !state.adminDraft?.id) return;
  const deletedId = state.adminDraft.id;
  if (!confirm(t("deleteRoutineConfirm", { name: state.adminDraft.name || state.adminDraft.id }))) return;
  try {
    await deleteRoutineFromFirestore(deletedId);
    setAdminMessage(t("routineDeleted"), "success");
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
  setAuthMessage(t("signingIn"));

  try {
    const email = normalizeEmail(authEmail.value);
    const password = authPassword.value;
    await applyAuthPersistence();
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
  setAuthMessage(t("creatingAccount"));

  try {
    await applyAuthPersistence();
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
    setAuthMessage(t("writeEmailForReset"), "error");
    return;
  }

  setAuthBusy(true);
  setAuthMessage(t("sendingReset"));

  try {
    await firebase.auth().sendPasswordResetEmail(email);
    setAuthMessage(t("resetSent"), "success");
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

function primeNativeScroll() {
  try {
    window.dispatchEvent(new Event("resize"));
    const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.scrollTo(0, y + 1);
    window.scrollTo(0, y);
  } catch (error) {
    console.warn("No se pudo inicializar el scroll nativo.", error);
  }
}

window.addEventListener("load", () => {
  setTimeout(primeNativeScroll, 100);
  setTimeout(primeNativeScroll, 350);
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) setTimeout(primeNativeScroll, 80);
});

initializeRememberSession();
applyTranslations();

if (rememberSession) {
  rememberSession.addEventListener("change", () => {
    localStorage.setItem(AUTH_PERSISTENCE_KEY, rememberSession.checked ? "local" : "session");
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

if (!window.firebase || !isFirebaseConfigured()) {
  showAuthScreen(t("firebaseMissing"));
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
