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
  isTrainer: false,
  adminPanelOpen: false,
  activeView: "home",
  adminRoutineId: "",
  adminDraft: null,
  adminUsers: [],
  trainerInvites: [],
  studentInvites: [],
  selectedAdminUserId: "",
  adminEditorMode: "",
  adminRoutineScreen: "list",
  adminRoutineBasicsOpen: false,
  pendingAssignUserId: "",
  adminEditingExerciseKey: "",
  adminStudentQuery: "",
  adminStudentFilter: "all",
  adminStudentFormOpen: false,
  adminAssignmentMode: false,
  assignmentStudentId: "",
  assignmentRoutineId: "",
  assignmentStartDate: "",
  adminWeekEditorIndex: null,
  adminDayEditorIndex: null,
  accountSubView: "profile",
  progressSubView: "summary",
  progressHistoryFilter: "all",
  progressMeasureTab: "summary",
  routineSubView: "weeks",
  selectedRoutineWeekNumber: 1,
  selectedRoutineDayIndex: null,
  selectedRoutineExerciseKey: "",
  exerciseSeriesDone: 2,
  currentExerciseKey: null,
  timerSeconds: 0,
  timerInterval: null
};

let progressKey = "";
let collapsedWeeksKey = "";
let progress = {};
let collapsedWeeks = {};
let db = null;
let unsubscribeCurrentUser = null;
let unsubscribeAdminUsers = null;
let unsubscribeTrainerInvites = null;
let unsubscribeStudentInvites = null;
let deferredInstallPrompt = null;
let installCompletedInBrowser = false;

const installWall = document.querySelector("#installWall");
const installAppButton = document.querySelector("#installAppButton");
const installHelp = document.querySelector("#installHelp");
const routineSelect = document.querySelector("#routineSelect");
const appHeader = document.querySelector("#appHeader");
const appMain = document.querySelector("#appMain");
const changeRoutine = document.querySelector("#changeRoutine");
const authForm = document.querySelector("#authForm");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const rememberSession = document.querySelector("#rememberSession");
const accountRole = document.querySelector("#accountRole");
const languageSelect = document.querySelector("#languageSelect");
const registerButton = document.querySelector("#registerButton");
const resetPasswordButton = document.querySelector("#resetPasswordButton");
const authMessage = document.querySelector("#authMessage");
const routinePlaceholder = document.querySelector("#routinePlaceholder");
const studentInvitesPanel = document.querySelector("#studentInvitesPanel");
const accountPanel = document.querySelector("#accountPanel");
const trainerHome = document.querySelector("#trainerHome");
const studentHome = document.querySelector("#studentHome");
const studentProgress = document.querySelector("#studentProgress");
const weeksContainer = document.querySelector("#weeksContainer");
const summaryStrip = document.querySelector("#summaryStrip");
const progressPercent = document.querySelector("#progressPercent");
const progressRing = document.querySelector(".progress-ring");
const appKicker = document.querySelector(".app-header .kicker");
const appTitle = document.querySelector(".app-header h1");
const userGreeting = document.querySelector("#userGreeting");
const adminToggle = document.querySelector("#adminToggle");
const adminPanel = document.querySelector("#adminPanel");
const adminClose = document.querySelector("#adminClose");
const adminUsersCard = document.querySelector("#adminUsersCard");
const adminRoutineEditor = document.querySelector("#adminRoutineEditor");
const adminEditorBack = document.querySelector("#adminEditorBack");
const adminEditorTitle = document.querySelector("#adminEditorTitle");
const adminRoutineSelect = document.querySelector("#adminRoutineSelect");
const adminRoutineId = document.querySelector("#adminRoutineId");
const adminRoutineName = document.querySelector("#adminRoutineName");
const adminRoutineTitle = document.querySelector("#adminRoutineTitle");
const adminRoutineKicker = document.querySelector("#adminRoutineKicker");
const adminRoutineLevel = document.querySelector("#adminRoutineLevel");
const adminRoutineDescription = document.querySelector("#adminRoutineDescription");
const adminRoutineTags = document.querySelector("#adminRoutineTags");
const adminSaveRoutine = document.querySelector("#adminSaveRoutine");
const adminNewRoutine = document.querySelector("#adminNewRoutine");
const adminEditRoutine = document.querySelector("#adminEditRoutine");
const adminSeedDario = document.querySelector("#adminSeedDario");
const adminAddWeek = document.querySelector("#adminAddWeek");
const adminDeleteRoutine = document.querySelector("#adminDeleteRoutine");
const adminMessage = document.querySelector("#adminMessage");
const bottomNav = document.querySelector("#bottomNav");
const adminWeeks = document.querySelector("#adminWeeks");
const adminUsers = document.querySelector("#adminUsers");

const modal = document.querySelector("#exerciseModal");
const closeModal = document.querySelector("#closeModal");
const doneButton = document.querySelector("#doneButton");
const startTimer = document.querySelector("#startTimer");
const resetTimer = document.querySelector("#resetTimer");
const timerDisplay = document.querySelector("#timerDisplay");
const confirmModal = document.querySelector("#confirmModal");
const confirmMessage = document.querySelector("#confirmMessage");
const confirmCancel = document.querySelector("#confirmCancel");
const confirmAccept = document.querySelector("#confirmAccept");
const AUTH_PERSISTENCE_KEY = "rutfit-auth-persistence";
const LANGUAGE_KEY = "rutfit-language";
const PENDING_ACCOUNT_ROLE_KEY = "rutfit-pending-account-role";
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
    accountType: "Tipo de cuenta",
    student: "Alumno",
    trainer: "Entrenador",
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
    routinePanelHelp: "Crea y edita rutinas.",
    closePanel: "Cerrar panel",
    users: "Usuarios",
    loadingUsers: "Cargando usuarios...",
    students: "Alumnos",
    studentPanel: "Panel de alumnos",
    studentPanelHelp: "Invita alumnos, espera su aceptación y asígnales rutinas.",
    inviteStudent: "Invitar alumno",
    studentEmail: "Email del alumno",
    sendInvite: "Enviar solicitud",
    pendingInvites: "Solicitudes pendientes",
    acceptedStudents: "Alumnos aceptados",
    routinesNav: "Rutinas",
    professorsNav: "Profesores",
    accountNav: "Cuenta",
    yourProfessors: "Tus profesores",
    acceptedProfessors: "Profesores aceptados",
    noProfessors: "Todavía no tienes profesores aceptados.",
    accountPanelTitle: "Cuenta",
    accountPanelHelp: "Gestiona tu sesión en RutFit.",
    profile: "Perfil",
    editProfile: "Editar perfil",
    saveProfile: "Guardar perfil",
    profileSaved: "Perfil guardado.",
    photo: "Foto",
    changePhoto: "Cambiar foto",
    weight: "Peso",
    height: "Altura",
    age: "Edad",
    goal: "Objetivo",
    memberSince: "Miembro desde",
    trainerLabel: "Entrenador",
    notCompleted: "Sin completar",
    noStudents: "Todavía no tienes alumnos aceptados.",
    noPendingInvites: "No hay solicitudes pendientes.",
    inviteSent: "Solicitud enviada. El alumno la verá al crear cuenta o iniciar sesión.",
    inviteExists: "Ya existe una solicitud pendiente o aceptada para ese email.",
    invitationForYou: "Solicitud de entrenador",
    invitationHelp: "{name} quiere asignarte rutinas en RutFit.",
    acceptInvite: "Aceptar",
    declineInvite: "Rechazar",
    inviteAccepted: "Solicitud aceptada.",
    inviteDeclined: "Solicitud rechazada.",
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
    noUsers: "Todavía no hay usuarios.",
    usersLoadError: "No se pudieron cargar usuarios.",
    noRoutine: "Sin rutina",
    unavailableRoutine: "Rutina no disponible: {id}",
    user: "Usuario",
    noEmail: "Sin email",
    assignExistingRoutine: "Asignar rutina existente",
    addRoutine: "Agregar rutina",
    editCurrentRoutine: "Editar rutina actual",
    removeRoutine: "Quitar rutina",
    backToUsers: "&larr; Volver a usuarios",
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
    savedExercisesCount: "{count} ejercicios guardados",
    editDay: "Editar día",
    saveDay: "Guardar día",
    editWeek: "Editar semana",
    saveWeek: "Guardar semana",
    weekSavedSummary: "Semana guardada - {count} días guardados",
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
    badge: "Etiqueta",
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
    adminRulesNotice: "Entraste como admin.",
    userLoadError: "No se pudo cargar tu usuario.",
    uploadingImage: "Guardando imagen...",
    imageLoaded: "Imagen comprimida y guardada en la rutina.",
    imageStoredInRoutine: "Imagen comprimida y guardada en la rutina.",
    updatingUser: "Actualizando usuario...",
    assignedRoutine: "Rutina asignada al usuario.",
    userWithoutRoutine: "Usuario sin rutina asignada.",
    newRoutinePreparedAssign: "Nueva rutina preparada. Al guardar se asigna a este usuario.",
    removingRoutine: "Quitando rutina...",
    routineRemoved: "Rutina quitada. El usuario verá Próximamente.",
    newRoutinePrepared: "Nueva rutina preparada. Edita los datos y guárdala.",
    darioMigrated: "Rutina Dario migrada.",
    darioMigratedAssigned: "Rutina Dario migrada y asignada al usuario.",
    routineNeedsId: "La rutina necesita un ID.",
    routineSaved: "Rutina guardada.",
    routineSavedAssigned: "Rutina guardada y asignada al usuario.",
    deleteRoutineConfirm: "¿Eliminar la rutina \"{name}\"?",
    routineDeleted: "Rutina eliminada.",
    deleteUser: "Eliminar usuario",
    deleteUserConfirm: "¿Eliminar el usuario \"{name}\" de RutFit?",
    userDeleted: "Usuario eliminado.",
    cannotDeleteSelf: "No puedes eliminar tu propio usuario admin desde aquí.",
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
    storageNotReady: "La imagen se guarda dentro de la rutina.",
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
    accountType: "Account type",
    student: "Student",
    trainer: "Trainer",
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
    routinePanelHelp: "Create and edit routines.",
    closePanel: "Close panel",
    users: "Users",
    loadingUsers: "Loading users...",
    students: "Students",
    studentPanel: "Student panel",
    studentPanelHelp: "Invite students, wait for acceptance, and assign routines.",
    inviteStudent: "Invite student",
    studentEmail: "Student email",
    sendInvite: "Send request",
    pendingInvites: "Pending requests",
    acceptedStudents: "Accepted students",
    routinesNav: "Routines",
    professorsNav: "Trainers",
    accountNav: "Account",
    yourProfessors: "Your trainers",
    acceptedProfessors: "Accepted trainers",
    noProfessors: "You do not have accepted trainers yet.",
    accountPanelTitle: "Account",
    accountPanelHelp: "Manage your RutFit session.",
    profile: "Profile",
    editProfile: "Edit profile",
    saveProfile: "Save profile",
    profileSaved: "Profile saved.",
    photo: "Photo",
    changePhoto: "Change photo",
    weight: "Weight",
    height: "Height",
    age: "Age",
    goal: "Goal",
    memberSince: "Member since",
    trainerLabel: "Trainer",
    notCompleted: "Not completed",
    noStudents: "You do not have accepted students yet.",
    noPendingInvites: "There are no pending requests.",
    inviteSent: "Request sent. The student will see it after creating an account or signing in.",
    inviteExists: "There is already a pending or accepted request for that email.",
    invitationForYou: "Trainer request",
    invitationHelp: "{name} wants to assign routines to you in RutFit.",
    acceptInvite: "Accept",
    declineInvite: "Decline",
    inviteAccepted: "Request accepted.",
    inviteDeclined: "Request declined.",
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
    noUsers: "There are no users yet.",
    usersLoadError: "Could not load users.",
    noRoutine: "No routine",
    unavailableRoutine: "Routine unavailable: {id}",
    user: "User",
    noEmail: "No email",
    assignExistingRoutine: "Assign existing routine",
    addRoutine: "Add routine",
    editCurrentRoutine: "Edit current routine",
    removeRoutine: "Remove routine",
    backToUsers: "&larr; Back to users",
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
    savedExercisesCount: "{count} saved exercises",
    editDay: "Edit day",
    saveDay: "Save day",
    editWeek: "Edit week",
    saveWeek: "Save week",
    weekSavedSummary: "Week saved - {count} saved days",
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
    adminRulesNotice: "You are signed in as admin.",
    userLoadError: "Could not load your user.",
    uploadingImage: "Saving image...",
    imageLoaded: "Image compressed and saved in the routine.",
    imageStoredInRoutine: "Image compressed and saved in the routine.",
    updatingUser: "Updating user...",
    assignedRoutine: "Routine assigned to user.",
    userWithoutRoutine: "User has no assigned routine.",
    newRoutinePreparedAssign: "New routine prepared. Saving will assign it to this user.",
    removingRoutine: "Removing routine...",
    routineRemoved: "Routine removed. The user will see Coming soon.",
    newRoutinePrepared: "New routine prepared. Edit it and save.",
    darioMigrated: "Dario routine migrated.",
    darioMigratedAssigned: "Dario routine migrated and assigned to user.",
    routineNeedsId: "The routine needs an ID.",
    routineSaved: "Routine saved.",
    routineSavedAssigned: "Routine saved and assigned to user.",
    deleteRoutineConfirm: "Delete routine \"{name}\"?",
    routineDeleted: "Routine deleted.",
    deleteUser: "Delete user",
    deleteUserConfirm: "Delete user \"{name}\" from RutFit?",
    userDeleted: "User deleted.",
    cannotDeleteSelf: "You cannot delete your own admin user here.",
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
    storageNotReady: "Image is saved inside the routine.",
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
    accountType: "Tipo de conta",
    student: "Aluno",
    trainer: "Treinador",
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
    routinePanelHelp: "Crie e edite rotinas.",
    closePanel: "Fechar painel",
    users: "Usuários",
    loadingUsers: "Carregando usuários...",
    students: "Alunos",
    studentPanel: "Painel de alunos",
    studentPanelHelp: "Convide alunos, espere a aceitação e atribua rotinas.",
    inviteStudent: "Convidar aluno",
    studentEmail: "Email do aluno",
    sendInvite: "Enviar solicitação",
    pendingInvites: "Solicitações pendentes",
    acceptedStudents: "Alunos aceitos",
    routinesNav: "Rotinas",
    professorsNav: "Professores",
    accountNav: "Conta",
    yourProfessors: "Seus professores",
    acceptedProfessors: "Professores aceitos",
    noProfessors: "Você ainda não tem professores aceitos.",
    accountPanelTitle: "Conta",
    accountPanelHelp: "Gerencie sua sessão no RutFit.",
    profile: "Perfil",
    editProfile: "Editar perfil",
    saveProfile: "Salvar perfil",
    profileSaved: "Perfil salvo.",
    photo: "Foto",
    changePhoto: "Trocar foto",
    weight: "Peso",
    height: "Altura",
    age: "Idade",
    goal: "Objetivo",
    memberSince: "Membro desde",
    trainerLabel: "Treinador",
    notCompleted: "Sem preencher",
    noStudents: "Você ainda não tem alunos aceitos.",
    noPendingInvites: "Não há solicitações pendentes.",
    inviteSent: "Solicitação enviada. O aluno verá ao criar conta ou entrar.",
    inviteExists: "Já existe uma solicitação pendente ou aceita para esse email.",
    invitationForYou: "Solicitação de treinador",
    invitationHelp: "{name} quer atribuir rotinas para você no RutFit.",
    acceptInvite: "Aceitar",
    declineInvite: "Recusar",
    inviteAccepted: "Solicitação aceita.",
    inviteDeclined: "Solicitação recusada.",
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
    noUsers: "Ainda não há usuários.",
    usersLoadError: "Não foi possível carregar usuários.",
    noRoutine: "Sem rotina",
    unavailableRoutine: "Rotina indisponível: {id}",
    user: "Usuário",
    noEmail: "Sem email",
    assignExistingRoutine: "Atribuir rotina existente",
    addRoutine: "Adicionar rotina",
    editCurrentRoutine: "Editar rotina atual",
    removeRoutine: "Remover rotina",
    backToUsers: "&larr; Voltar aos usuários",
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
    savedExercisesCount: "{count} exercícios salvos",
    editDay: "Editar dia",
    saveDay: "Salvar dia",
    editWeek: "Editar semana",
    saveWeek: "Salvar semana",
    weekSavedSummary: "Semana salva - {count} dias salvos",
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
    badge: "Etiqueta",
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
    adminRulesNotice: "Você entrou como admin.",
    userLoadError: "Não foi possível carregar seu usuário.",
    uploadingImage: "Salvando imagem...",
    imageLoaded: "Imagem comprimida e salva na rotina.",
    imageStoredInRoutine: "Imagem comprimida e salva na rotina.",
    updatingUser: "Atualizando usuário...",
    assignedRoutine: "Rotina atribuída ao usuário.",
    userWithoutRoutine: "Usuário sem rotina atribuída.",
    newRoutinePreparedAssign: "Nova rotina preparada. Ao salvar, será atribuída a este usuário.",
    removingRoutine: "Removendo rotina...",
    routineRemoved: "Rotina removida. O usuário verá Em breve.",
    newRoutinePrepared: "Nova rotina preparada. Edite os dados e salve.",
    darioMigrated: "Rotina Dario migrada.",
    darioMigratedAssigned: "Rotina Dario migrada e atribuída ao usuário.",
    routineNeedsId: "A rotina precisa de um ID.",
    routineSaved: "Rotina salva.",
    routineSavedAssigned: "Rotina salva e atribuída ao usuário.",
    deleteRoutineConfirm: "Excluir a rotina \"{name}\"?",
    routineDeleted: "Rotina excluída.",
    deleteUser: "Excluir usuário",
    deleteUserConfirm: "Excluir o usuário \"{name}\" do RutFit?",
    userDeleted: "Usuário excluído.",
    cannotDeleteSelf: "Você não pode excluir seu próprio usuário admin aqui.",
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
    storageNotReady: "A imagem e salva dentro da rotina.",
    selectImageFile: "Selecione um arquivo de imagem."
  }
};

function getActiveRoutine() {
  return routines[state.selectedRoutine] || null;
}

function getRoutineTotalSessions(routine) {
  return (routine?.plan || []).reduce((sum, week) => {
    return sum + (week.days || []).reduce((daySum, day) => daySum + (day.exercises || []).length, 0);
  }, 0);
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
  if (accountRole) {
    accountRole.disabled = isBusy;
  }
}

function isFirebaseConfigured() {
  const config = window.FIREBASE_CONFIG || {};
  return Boolean(config.apiKey && config.authDomain && !String(config.apiKey).startsWith("PEGAR_"));
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function normalizeText(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
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
    doneButton.textContent = progress[state.currentExerciseKey.id] ?t("done") : t("markDone");
  }
}

function setLanguage(language) {
  state.language = translations[language] ?language : DEFAULT_LANGUAGE;
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
  const mode = rememberSession.checked ?"local" : "session";
  localStorage.setItem(AUTH_PERSISTENCE_KEY, mode);
  const persistence = mode === "local"
    ?firebase.auth.Auth.Persistence.LOCAL
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
    name: "",
    title: "",
    kicker: "",
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
    level: routine.level || "Intermedio",
    description: routine.description || "",
    tags: routine.tags || "",
    ownerTrainerId: routine.ownerTrainerId || "",
    ownerTrainerEmail: routine.ownerTrainerEmail || "",
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

function getPendingAccountRole() {
  const role = localStorage.getItem(PENDING_ACCOUNT_ROLE_KEY) || accountRole?.value || "student";
  return role === "trainer" ?"trainer" : "student";
}

function canManageStudents() {
  return state.isAdmin || state.isTrainer;
}

function canManageUser(uid) {
  if (state.isAdmin) return true;
  if (!state.isTrainer || !uid) return false;
  return state.adminUsers.some((user) => user.uid === uid);
}

function getTrainerDisplayName() {
  return state.currentUserData?.displayName || getDisplayNameFromEmail(state.currentUser?.email || "") || t("trainer");
}

function getUserPhoto(user = {}) {
  return user.photoDataUrl || user.photoUrl || "";
}

function getProfileInitials(user = {}) {
  const source = user.displayName || user.email || "RF";
  return source
    .split(/[\s.@_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "RF";
}

function renderUserAvatar(user = {}, className = "profile-avatar") {
  const photo = getUserPhoto(user);
  if (photo) {
    return `<img class="${className}" src="${escapeHtml(photo)}" alt="${escapeHtml(user.displayName || t("profile"))}" />`;
  }
  return `<div class="${className} profile-avatar-empty">${escapeHtml(getProfileInitials(user))}</div>`;
}

function getProfileStats(user = {}) {
  return [
    user.weight ?`${user.weight} kg` : "",
    user.height ?`${user.height} m` : "",
    user.age ?`${user.age} años` : ""
  ].filter(Boolean);
}

function formatMemberSince(value) {
  if (!value) return t("notCompleted");
  const date = typeof value.toDate === "function"
    ?value.toDate()
    : typeof value.seconds === "number"
      ?new Date(value.seconds * 1000)
      : new Date(value);
  if (Number.isNaN(date.getTime())) return t("notCompleted");
  return date.toLocaleDateString(state.language === "en" ?"en-US" : state.language === "pt" ?"pt-BR" : "es-ES", {
    month: "long",
    year: "numeric"
  });
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
  return t("actionFailed", { code: code ?` (${code})` : "" });
}

function showAuthScreen(message = "") {
  document.body.classList.remove("native-admin-subscreen-active");
  stopUserSubscriptions();
  state.selectedRoutine = "";
  state.currentUser = null;
  state.currentUserData = null;
  state.isAdmin = false;
  state.isTrainer = false;
  state.adminPanelOpen = false;
  state.adminDraft = null;
  state.adminUsers = [];
  state.trainerInvites = [];
  state.studentInvites = [];
  state.selectedAdminUserId = "";
  state.adminEditorMode = "";
  state.adminRoutineBasicsOpen = false;
  state.pendingAssignUserId = "";
  state.adminEditingExerciseKey = "";
  state.adminWeekEditorIndex = null;
  state.adminDayEditorIndex = null;
  state.activeView = "home";
  closeExercise();
  stopTimer();
  routineSelect.classList.remove("is-hidden");
  appHeader.classList.add("is-hidden");
  appMain.classList.add("is-hidden");
  adminToggle.classList.add("is-hidden");
  adminPanel.classList.add("is-hidden");
  bottomNav?.classList.add("is-hidden");
  if (bottomNav) bottomNav.innerHTML = "";
  trainerHome?.classList.add("is-hidden");
  studentHome?.classList.add("is-hidden");
  studentProgress?.classList.add("is-hidden");
  studentInvitesPanel?.classList.add("is-hidden");
  accountPanel?.classList.add("is-hidden");
  routinePlaceholder?.classList.add("is-hidden");
  if (summaryStrip) summaryStrip.innerHTML = "";
  if (weeksContainer) weeksContainer.innerHTML = "";
  if (adminUsers) adminUsers.innerHTML = "";
  if (adminWeeks) adminWeeks.innerHTML = "";
  if (trainerHome) trainerHome.innerHTML = "";
  if (studentHome) studentHome.innerHTML = "";
  if (studentProgress) studentProgress.innerHTML = "";
  if (studentInvitesPanel) studentInvitesPanel.innerHTML = "";
  if (accountPanel) accountPanel.innerHTML = "";
  setAuthMessage(message);
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
  if (unsubscribeTrainerInvites) {
    unsubscribeTrainerInvites();
    unsubscribeTrainerInvites = null;
  }
  if (unsubscribeStudentInvites) {
    unsubscribeStudentInvites();
    unsubscribeStudentInvites = null;
  }
}

async function ensureUserDocument(user) {
  const ref = db.collection("users").doc(user.uid);
  const snapshot = await ref.get();
  const isAdmin = isAdminEmail(user.email);
  if (!snapshot.exists) {
    const routineId = getDefaultRoutineForUser(user);
    const displayName = getDisplayNameFromEmail(user.email);
    const selectedRole = isAdmin ?"admin" : getPendingAccountRole();
    await ref.set({
      email: normalizeEmail(user.email),
      displayName,
      routineId,
      role: selectedRole,
      trainerIds: [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    localStorage.removeItem(PENDING_ACCOUNT_ROLE_KEY);
    return { email: normalizeEmail(user.email), displayName, routineId, role: selectedRole, trainerIds: [] };
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
    ownerTrainerId: data.ownerTrainerId || "",
    ownerTrainerEmail: data.ownerTrainerEmail || "",
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
        ownerTrainerId: data.ownerTrainerId || "",
        ownerTrainerEmail: data.ownerTrainerEmail || "",
        exerciseLibrary: data.exerciseLibrary || {},
        plan: data.plan || []
      };
    });
  } catch (error) {
    console.warn("No se pudieron cargar rutinas Firestore para admin.", error);
    setAuthMessage(t("adminRulesNotice"), "error");
  }
}

async function loadFirestoreRoutinesForTrainer() {
  if (!state.isTrainer || !state.currentUser?.uid) return;
  try {
    const snapshot = await db.collection("routines").where("ownerTrainerId", "==", state.currentUser.uid).get();
    snapshot.forEach((doc) => {
      const data = doc.data();
      routines[doc.id] = {
        id: data.id || doc.id,
        name: data.name || doc.id,
        title: data.title || data.name || doc.id,
        kicker: data.kicker || "",
        ownerTrainerId: data.ownerTrainerId || "",
        exerciseLibrary: data.exerciseLibrary || {},
        plan: data.plan || []
      };
    });
  } catch (error) {
    console.warn("No se pudieron cargar rutinas Firestore para entrenador.", error);
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
        state.adminRoutineBasicsOpen = false;
        state.pendingAssignUserId = "";
        state.adminEditingExerciseKey = "";
        state.adminDraft = null;
      }
      if (state.adminPanelOpen) {
        renderAdminPanel();
      }
      if (canManageStudents()) renderApp();
    },
    (error) => {
      console.error("Admin users listener error:", error);
      if (adminUsers) {
        adminUsers.innerHTML = `<div class="empty-state">${t("usersLoadError")}</div>`;
      }
    }
  );
}

function startTrainerInvitesListener() {
  if (!state.isTrainer || state.isAdmin || unsubscribeTrainerInvites || !state.currentUser?.uid) return;
  unsubscribeTrainerInvites = db.collection("trainerInvitations").where("trainerId", "==", state.currentUser.uid).onSnapshot(
    async (snapshot) => {
      state.trainerInvites = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const accepted = state.trainerInvites.filter((invite) => invite.status === "accepted" && invite.studentId);
      const students = await Promise.all(
        accepted.map(async (invite) => {
          try {
            const studentDoc = await db.collection("users").doc(invite.studentId).get();
            return studentDoc.exists ?{ uid: studentDoc.id, inviteId: invite.id, ...studentDoc.data() } : null;
          } catch (error) {
            console.warn("No se pudo cargar un alumno aceptado.", error);
            return null;
          }
        })
      );
      state.adminUsers = students
        .filter(Boolean)
        .sort((a, b) => String(a.email || a.displayName || "").localeCompare(String(b.email || b.displayName || "")));
      if (state.selectedAdminUserId && !state.adminUsers.some((user) => user.uid === state.selectedAdminUserId)) {
        state.selectedAdminUserId = "";
        state.adminEditorMode = "";
        state.adminRoutineBasicsOpen = false;
        state.pendingAssignUserId = "";
        state.adminEditingExerciseKey = "";
        state.adminDraft = null;
      }
      if (state.adminPanelOpen) renderAdminPanel();
      if (canManageStudents()) renderApp();
    },
    (error) => {
      console.error("Trainer invites listener error:", error);
      if (adminUsers) adminUsers.innerHTML = `<div class="empty-state">${t("usersLoadError")}</div>`;
    }
  );
}

function startStudentInvitesListener() {
  if (!state.currentUser?.email || unsubscribeStudentInvites) return;
  const email = normalizeEmail(state.currentUser.email);
  unsubscribeStudentInvites = db.collection("trainerInvitations").where("studentEmail", "==", email).onSnapshot(
    (snapshot) => {
      state.studentInvites = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      renderStudentProfessorsPanel();
      renderApp();
    },
    (error) => {
      console.error("Student invites listener error:", error);
      state.studentInvites = [];
      renderStudentProfessorsPanel();
    }
  );
}

async function updateUserRoutine(uid, routineId) {
  if (!canManageUser(uid)) throw new Error(t("permissionDenied"));
  await db.collection("users").doc(uid).set(
    {
      routineId,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: normalizeEmail(state.currentUser?.email || "")
    },
    { merge: true }
  );
}

async function deleteRutfitUser(user) {
  if (!state.isAdmin || !user?.uid) return;
  if (user.uid === state.currentUser?.uid) {
    throw new Error(t("cannotDeleteSelf"));
  }
  const batch = db.batch();
  batch.delete(db.collection("users").doc(user.uid));

  const invitationQueries = [
    db.collection("trainerInvitations").where("studentId", "==", user.uid).get(),
    db.collection("trainerInvitations").where("trainerId", "==", user.uid).get()
  ];
  if (user.email) {
    invitationQueries.push(db.collection("trainerInvitations").where("studentEmail", "==", normalizeEmail(user.email)).get());
  }
  const snapshots = await Promise.all(invitationQueries);
  const seen = new Set();
  snapshots.forEach((snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (seen.has(doc.id)) return;
      seen.add(doc.id);
      batch.delete(doc.ref);
    });
  });

  await batch.commit();
}

async function createTrainerInvitation(studentEmail) {
  if (!state.isTrainer || state.isAdmin || !state.currentUser?.uid) return;
  const email = normalizeEmail(studentEmail);
  if (!email) throw new Error(t("invalidEmail"));
  const inviteId = `${state.currentUser.uid}_${slugify(email)}`;
  const inviteRef = db.collection("trainerInvitations").doc(inviteId);
  const existing = await inviteRef.get();
  if (existing.exists && ["pending", "accepted"].includes(existing.data().status)) throw new Error(t("inviteExists"));
  await inviteRef.set({
    trainerId: state.currentUser.uid,
    trainerEmail: normalizeEmail(state.currentUser.email || ""),
    trainerName: getTrainerDisplayName(),
    trainerPhotoDataUrl: state.currentUserData?.photoDataUrl || "",
    studentEmail: email,
    status: "pending",
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

async function respondToTrainerInvitation(inviteId, accepted) {
  const inviteRef = db.collection("trainerInvitations").doc(inviteId);
  const inviteSnapshot = await inviteRef.get();
  if (!inviteSnapshot.exists) throw new Error(t("actionFailed", { code: "" }));
  const invite = inviteSnapshot.data();
  if (normalizeEmail(invite.studentEmail) !== normalizeEmail(state.currentUser?.email || "")) {
    throw new Error(t("permissionDenied"));
  }
  if (accepted) {
    const batch = db.batch();
    batch.set(
      inviteRef,
      {
        status: "accepted",
        studentId: state.currentUser.uid,
        acceptedAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    );
    batch.set(
      db.collection("users").doc(state.currentUser.uid),
      {
        trainerIds: firebase.firestore.FieldValue.arrayUnion(invite.trainerId),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    );
    await batch.commit();
    state.currentUserData = {
      ...(state.currentUserData || {}),
      trainerIds: Array.from(new Set([...(state.currentUserData?.trainerIds || []), invite.trainerId]))
    };
  } else {
    await inviteRef.set(
      {
        status: "declined",
        declinedAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    );
  }
  state.studentInvites = accepted
    ?state.studentInvites.map((item) => (item.id === inviteId ?{ ...item, status: "accepted" } : item))
    : state.studentInvites.filter((item) => item.id !== inviteId);
  renderStudentProfessorsPanel();
  return { ...invite, status: accepted ?"accepted" : "declined" };
}

function getAdminUser(uid) {
  return state.adminUsers.find((user) => user.uid === uid) || null;
}

function getRoutineCountForManager() {
  return getAdminRoutineIds().length;
}

function getRecentActivityItems() {
  const accepted = state.trainerInvites
    .filter((invite) => invite.status === "accepted")
    .slice(-2)
    .map((invite) => {
      const student = state.adminUsers.find((user) => user.uid === invite.studentId);
      const name = student?.displayName || getDisplayNameFromEmail(invite.studentEmail || "") || invite.studentEmail || "Alumno";
      return `${name} aceptó tu invitación`;
    });
  const routinesUpdated = getAdminRoutineIds()
    .slice(0, 2)
    .map((id) => `Rutina ${routines[id]?.name || id} disponible`);
  return [...accepted, ...routinesUpdated].slice(0, 3);
}

function renderTrainerHome() {
  if (!trainerHome) return;
  const activeStudents = state.adminUsers.length;
  const pendingInvites = state.trainerInvites.filter((invite) => invite.status === "pending").length;
  const routineCount = getRoutineCountForManager();
  const displayName = state.currentUserData?.displayName || getDisplayNameFromEmail(state.currentUser?.email || "");
  const recentItems = getRecentActivityItems();
  trainerHome.innerHTML = `
    <section class="trainer-dashboard-hero">
      <div>
        <span class="student-role-pill">${state.isAdmin ?"Admin" : "Entrenador"}</span>
        <h1>RutFit</h1>
        <p>Hola, ${escapeHtml(displayName || t("user"))} <span aria-hidden="true">&#128075;</span></p>
      </div>
      <div class="student-home-actions">
        <button class="student-notification-button" type="button" data-home-action="notifications" aria-label="Notificaciones">
          <span aria-hidden="true">&#128276;</span>
          <b></b>
        </button>
        ${renderUserAvatar(state.currentUserData || {}, "student-home-avatar")}
      </div>
    </section>

    <section class="trainer-goal-card">
      <div>
        <small>Inicio</small>
        <strong>¡Vamos a por tus objetivos!</strong>
        <span>Hoy es un gran día para entrenar.</span>
      </div>
      <b aria-hidden="true">&#128640;</b>
    </section>

    <div class="home-section-title">Resumen</div>
    <div class="home-grid trainer-summary-grid">
      <article class="home-stat">
        <strong>${activeStudents}</strong>
        <span>Alumnos activos</span>
        <small>+2 hoy</small>
      </article>
      <article class="home-stat">
        <strong>${pendingInvites}</strong>
        <span>Solicitudes pendientes</span>
      </article>
      <article class="home-stat">
        <strong>${routineCount}</strong>
        <span>Rutinas creadas</span>
        <small>+1 esta semana</small>
      </article>
    </div>

    <div class="home-section-title">Acciones rápidas</div>
    <div class="home-actions trainer-quick-actions">
      <button class="primary-button" type="button" data-home-action="new-student"><span>+</span>Nuevo alumno</button>
      <button class="secondary-button" type="button" data-home-action="new-routine"><span>▣</span>Nueva rutina</button>
      <button class="secondary-button" type="button" data-home-action="assign-routine"><span>↻</span>Asignar rutina</button>
    </div>

    <section class="home-activity">
      <div class="home-section-title">Actividad reciente</div>
      ${recentItems.length
        ?recentItems.map((item, index) => `<div class="activity-item"><i></i><span>${escapeHtml(item)}</span><small>${index === 0 ?"Hace 2h" : index === 1 ?"Ayer" : "Hace 3h"}</small></div>`).join("")
        : `<div class="empty-state">Sin actividad reciente.</div>`
      }
    </section>
  `;
}

function setActiveView(view) {
  state.activeView = view;
  state.adminPanelOpen = canManageStudents() && ["students", "routines"].includes(view);
  if (view !== "students") {
    state.selectedAdminUserId = "";
    state.adminAssignmentMode = false;
  }
  if (view !== "routines") {
    state.adminEditorMode = "";
    state.adminRoutineScreen = "list";
    state.adminRoutineBasicsOpen = false;
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminDraft = null;
  }
  renderApp();
}

function openAcceptedStudentsForAssignment() {
  const timestampValue = (value) => {
    if (!value) return 0;
    if (typeof value.toMillis === "function") return value.toMillis();
    if (typeof value.seconds === "number") return value.seconds * 1000;
    return 0;
  };
  const acceptedInvites = state.trainerInvites
    .filter((invite) => invite.status === "accepted" && invite.studentId)
    .sort((a, b) =>
      timestampValue(a.acceptedAt || a.updatedAt || a.createdAt) -
      timestampValue(b.acceptedAt || b.updatedAt || b.createdAt)
    );
  const lastAcceptedId = acceptedInvites[acceptedInvites.length - 1]?.studentId || "";
  const fallbackId = state.adminUsers[state.adminUsers.length - 1]?.uid || "";
  state.activeView = "students";
  state.adminPanelOpen = canManageStudents();
  state.selectedAdminUserId = "";
  state.adminAssignmentMode = true;
  state.assignmentStudentId = lastAcceptedId || fallbackId;
  const selectedUser = getAdminUser(state.assignmentStudentId);
  state.assignmentRoutineId = selectedUser?.routineId || getAdminRoutineIds()[0] || "";
  state.assignmentStartDate = state.assignmentStartDate || new Date().toISOString().slice(0, 10);
  state.adminEditorMode = "";
  state.adminRoutineScreen = "list";
  state.adminRoutineBasicsOpen = false;
  state.pendingAssignUserId = "";
  state.adminEditingExerciseKey = "";
  state.adminWeekEditorIndex = null;
  state.adminDayEditorIndex = null;
  state.adminDraft = null;
  setAdminMessage("");
  renderApp();
}

function getRoutineProgressStats(routine = getActiveRoutine()) {
  const totalSessions = getRoutineTotalSessions(routine);
  const doneCount = Object.values(progress).filter(Boolean).length;
  const percent = totalSessions ?Math.round((doneCount / totalSessions) * 100) : 0;
  const totalExercises = routine ?Object.keys(routine.exerciseLibrary || {}).length : 0;
  const totalWeeks = routine?.plan?.length || 0;
  return { totalSessions, doneCount, percent, totalExercises, totalWeeks };
}

function getNextTrainingLabel(routine = getActiveRoutine()) {
  if (!routine?.plan?.length) return t("routineInPreparation");
  for (const week of routine.plan) {
    for (let dayIndex = 0; dayIndex < (week.days || []).length; dayIndex += 1) {
      const day = week.days[dayIndex];
      const ids = (day.exercises || []).map((exerciseKey) => progressId(week.number, dayIndex, exerciseKey));
      if (ids.some((id) => !progress[id])) return `${t("week")} ${week.number} · ${day.title}`;
    }
  }
  return t("completeWeek");
}

function getNextTrainingInfo(routine = getActiveRoutine()) {
  if (!routine?.plan?.length) return null;
  const totalWeeks = routine.plan.length;
  for (const week of routine.plan) {
    const days = week.days || [];
    for (let dayIndex = 0; dayIndex < days.length; dayIndex += 1) {
      const day = days[dayIndex];
      const ids = (day.exercises || []).map((exerciseKey) => progressId(week.number, dayIndex, exerciseKey));
      if (ids.some((id) => !progress[id])) {
        return {
          weekNumber: week.number,
          totalWeeks,
          dayNumber: dayIndex + 1,
          totalDays: days.length,
          dayTitle: day.title,
          exerciseCount: (day.exercises || []).length
        };
      }
    }
  }
  return null;
}

function renderStudentHome() {
  if (!studentHome) return;
  const routine = getActiveRoutine();
  const stats = getRoutineProgressStats(routine);
  const nextInfo = getNextTrainingInfo(routine);
  const displayName = state.currentUserData?.displayName || getDisplayNameFromEmail(state.currentUser?.email || "");
  const subtitle = nextInfo
    ?`${t("week")} ${nextInfo.weekNumber} de ${nextInfo.totalWeeks} · Día ${nextInfo.dayNumber} de ${nextInfo.totalDays}`
    : (routine?.plan?.length ?"Rutina completada" : t("noRoutine"));
  const todayExercises = nextInfo ?nextInfo.exerciseCount : 0;
  const todayMinutes = todayExercises ?Math.round(todayExercises * 7.5) : 0;
  const todayKcal = todayMinutes ?Math.round(todayMinutes * 7) : 0;

  studentHome.innerHTML = `
    <p class="sh-greeting">Hola, ${escapeHtml(displayName || t("user"))} <span aria-hidden="true"></span></p>
    <section class="student-dashboard-card">
      <div>
        <span class="kicker">Rutina actual</span>
        <h2>${escapeHtml(routine?.name || t("noRoutine"))}</h2>
        <p>${escapeHtml(subtitle)}</p>
      </div>
      <div class="mini-progress" style="--progress:${stats.percent}%">
        <strong>${stats.percent}%</strong>
      </div>
    </section>
    <div class="home-section-title">Resumen de hoy</div>
    <div class="home-grid student-stat-grid">
      <article class="home-stat">
        <strong>${todayExercises}</strong>
        <span>Ejercicios</span>
      </article>
      <article class="home-stat">
        <strong>${todayMinutes}</strong>
        <span>Minutos</span>
      </article>
      <article class="home-stat">
        <strong>${todayKcal}</strong>
        <span>Kcal aprox.</span>
      </article>
    </div>
    <div class="home-section-title">Próximo entrenamiento</div>
    <section class="student-current-card next-training-card">
      <small>${nextInfo ?`${t("week")} ${nextInfo.weekNumber}` : ""}</small>
      <strong>${escapeHtml(nextInfo ?nextInfo.dayTitle : getNextTrainingLabel(routine))}</strong>
      <span>Mañana · 18:00</span>
    </section>
    <section class="student-current-card streak-card">
      <small>Racha</small>
      <strong>12</strong>
      <span>Dias seguidos</span>
      <div class="flame-row" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    </section>
  `;
}

function renderStudentHomeV2() {
  if (!studentHome) return;
  const routine = getActiveRoutine();
  const stats = getRoutineProgressStats(routine);
  const nextInfo = getNextTrainingInfo(routine);
  const displayName = state.currentUserData?.displayName || getDisplayNameFromEmail(state.currentUser?.email || "");
  const subtitle = nextInfo
    ?`${t("week")} ${nextInfo.weekNumber} de ${nextInfo.totalWeeks} · Día ${nextInfo.dayNumber} de ${nextInfo.totalDays}`
    : (routine?.plan?.length ?"Rutina completada" : t("noRoutine"));
  const todayExercises = nextInfo ?nextInfo.exerciseCount : 0;
  const todayMinutes = todayExercises ?Math.round(todayExercises * 7.5) : 0;
  const todayKcal = todayMinutes ?Math.round(todayMinutes * 7) : 0;

  studentHome.innerHTML = `
    <section class="student-home-hero">
      <div>
        <span class="student-role-pill">Alumno</span>
        <h1>RutFit</h1>
        <p>Hola, ${escapeHtml(displayName || t("user"))} <span aria-hidden="true">&#128075;</span></p>
      </div>
      <div class="student-home-actions">
        <button class="student-notification-button" type="button" data-student-home-action="notifications" aria-label="Notificaciones">
          <span aria-hidden="true">&#128276;</span>
          <b></b>
        </button>
        ${renderUserAvatar(state.currentUserData || {}, "student-home-avatar")}
      </div>
    </section>
    <section class="student-dashboard-card">
      <div>
        <span class="kicker">Rutina actual</span>
        <h2>${escapeHtml(routine?.name || t("noRoutine"))}</h2>
        <p>${escapeHtml(subtitle)}</p>
      </div>
      <div class="mini-progress" style="--progress:${stats.percent}%">
        <strong>${stats.percent}%</strong>
      </div>
    </section>
    <div class="home-section-title">Resumen de hoy</div>
    <div class="home-grid student-stat-grid">
      <article class="home-stat">
        <strong>${todayExercises}</strong>
        <span>Ejercicios</span>
      </article>
      <article class="home-stat">
        <strong>${todayMinutes}</strong>
        <span>Minutos</span>
      </article>
      <article class="home-stat">
        <strong>${todayKcal}</strong>
        <span>Kcal aprox.</span>
      </article>
    </div>
    <div class="home-section-title">Próximo entrenamiento</div>
    <button class="student-current-card next-training-card" type="button" data-student-home-action="routine">
      <small>${nextInfo ?`${t("week")} ${nextInfo.weekNumber}` : ""}</small>
      <strong>${escapeHtml(nextInfo ?nextInfo.dayTitle : getNextTrainingLabel(routine))}</strong>
      <span>Mañana · 18:00</span>
    </button>
    <section class="student-current-card streak-card">
      <small>Racha</small>
      <strong>12</strong>
      <span>Días seguidos</span>
      <div class="flame-row" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    </section>
  `;
}

function renderStudentNotifications() {
  if (!studentProgress) return;
  const routine = getActiveRoutine();
  const nextInfo = getNextTrainingInfo(routine);
  const routineName = routine?.name || t("noRoutine");
  const nextTitle = nextInfo?.dayTitle || getNextTrainingLabel(routine);
  studentProgress.innerHTML = `
    <section class="student-notifications-screen">
      <div class="screen-topbar progress-topbar">
        <button class="icon-button ghost-icon" type="button" data-notification-action="back" aria-label="Volver">⬹</button>
        <h2>Notificaciones</h2>
        <span></span>
      </div>
      <button class="notifications-read-all" type="button" data-notification-action="read-all">Marcar todas como leídas</button>
      <div class="notification-list">
        ${renderNotificationRow("purple", "Nuevo entrenamiento disponible", `${escapeHtml(nextTitle)}<br>Hace 1h`, "")}
        ${renderNotificationRow("purple", "Entrenamiento completado", "Buen trabajo! Has completado tu entrenamiento del día.", "Ayer")}
        ${renderNotificationRow("orange", "Recordatorio", "No olvides registrar tus medidas semanales.", "2 días")}
        ${renderNotificationRow("orange", "Nueva rutina asignada", `${escapeHtml(routineName)} ha sido asignada a tu plan.`, "3 días")}
        ${renderNotificationRow("orange", "Meta alcanzada", "Felicidades! 10 días de racha conseguidos.", "5 días")}
      </div>
    </section>
  `;
}

function renderNotificationRow(color, title, body, time) {
  return `
    <article class="notification-row">
      <i class="${color}" aria-hidden="true"></i>
      <div>
        <strong>${title}</strong>
        <p>${body}</p>
      </div>
      ${time ?`<span>${time}</span>` : `<b aria-hidden="true"></b>`}
    </article>
  `;
}

function renderStudentProgress() {
  if (!studentProgress) return;
  const routine = getActiveRoutine();
  const stats = getRoutineProgressStats(routine);
  const nextInfo = getNextTrainingInfo(routine);
  const completedTrainings = Math.max(0, Math.min(stats.totalSessions || 0, stats.doneCount || 0));
  const weekWorkouts = Math.max(1, Math.min(6, nextInfo?.exerciseCount || completedTrainings || 4));
  const minutes = Math.max(45, Math.round(weekWorkouts * 11.25));
  const kcal = Math.max(320, Math.round(minutes * 26.7));
  const currentTab = state.progressSubView || "summary";
  if (currentTab === "history") {
    studentProgress.innerHTML = renderProgressHistory(routine);
    return;
  }
  if (currentTab === "measures") {
    studentProgress.innerHTML = renderProgressMeasures();
    return;
  }
  studentProgress.innerHTML = `
    <section class="student-progress-screen">
      <div class="screen-topbar progress-topbar">
        <span></span>
        <h2>Progreso</h2>
        <button class="icon-button ghost-icon" type="button" data-progress-action="menu" aria-label="Opciones">&vellip;</button>
      </div>

      <div class="mock-tabs progress-tabs">
        <button type="button" data-progress-tab="summary" class="${currentTab === "summary" ?"active" : ""}">Resumen</button>
        <button type="button" data-progress-tab="history" class="${currentTab === "history" ?"active" : ""}">Entrenamientos</button>
        <button type="button" data-progress-tab="measures" class="${currentTab === "measures" ?"active" : ""}">Medidas</button>
      </div>

      ${renderProgressSummary({
        weekWorkouts,
        percent: stats.percent,
        kcal,
        minutes
      })}
    </section>
  `;
}

function renderProgressSummary({ weekWorkouts, percent, kcal }) {
  return `
    <div class="progress-section-title">Esta semana</div>
    <div class="progress-stat-grid">
      <article>
        <strong>${weekWorkouts}</strong>
        <span>Entrenamientos</span>
      </article>
      <article>
        <strong>${percent}%</strong>
        <span>Cumplimiento</span>
      </article>
      <article>
        <strong>${kcal}</strong>
        <span>Kcal totales</span>
      </article>
    </div>

    <section class="performance-card">
      <div class="progress-section-title">Gráfico de rendimiento</div>
      <div class="performance-chart" aria-label="Gráfico de rendimiento">
        <span class="axis top">100%</span>
        <span class="axis mid">50%</span>
        <span class="axis bottom">0%</span>
        <svg viewBox="0 0 320 150" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="progressArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#a855f7" stop-opacity="0.58"/>
              <stop offset="1" stop-color="#7c3cff" stop-opacity="0.02"/>
            </linearGradient>
          </defs>
          <path d="M20 118 L62 91 L95 48 L132 82 L170 56 L205 92 L238 55 L275 42 L304 22 L304 130 L20 130 Z" fill="url(#progressArea)"/>
          <path d="M20 118 L62 91 L95 48 L132 82 L170 56 L205 92 L238 55 L275 42 L304 22" fill="none" stroke="#a855f7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <g fill="#c084fc">
            <circle cx="20" cy="118" r="4"/><circle cx="62" cy="91" r="4"/><circle cx="95" cy="48" r="4"/><circle cx="132" cy="82" r="4"/><circle cx="170" cy="56" r="4"/><circle cx="205" cy="92" r="4"/><circle cx="238" cy="55" r="4"/><circle cx="275" cy="42" r="4"/><circle cx="304" cy="22" r="4"/>
          </g>
        </svg>
        <div class="chart-days"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span></div>
      </div>
    </section>

    <section class="progress-streak">
      <div class="progress-section-title">Racha de entrenamiento</div>
      <strong>12 <span>días seguidos</span></strong>
      <div class="flame-row" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    </section>
  `;
}

function renderProgressHistory(routine) {
  const filter = state.progressHistoryFilter || "all";
  const allRows = (routine?.plan || []).flatMap((week) =>
    (week.days || []).map((day, index) => {
      const ids = (day.exercises || []).map((exerciseKey) => progressId(week.number, index, exerciseKey));
      const done = ids.filter((id) => progress[id]).length;
      const percent = ids.length ?Math.round((done / ids.length) * 100) : 0;
      const completed = percent >= 100;
      const pending = percent < 100;
      if (filter === "completed" && !completed) return "";
      if (filter === "pending" && !pending) return "";
      const iconClass = completed ?"calendar" : percent >= 80 ?"fire" : "dumbbell";
      const date = completed ?"Hoy" : "Ayer";
      const minutes = Math.max(40, Math.round(ids.length * 7.5));
      return `
        <article class="history-row">
          <span class="routine-list-icon ${iconClass}"></span>
          <div>
            <strong>${escapeHtml(day.title || `Día ${index + 1}`)}</strong>
            <small>${date} · ${minutes} min</small>
          </div>
          <b>${percent}%</b>
        </article>
      `;
    })
  ).filter(Boolean);
  const rows = allRows.length ?allRows.join("") : `<div class="empty-state">${t("routineInPreparation")}</div>`;
  return `
    <section class="student-progress-screen progress-history-screen">
      <div class="screen-topbar progress-topbar">
        <button class="icon-button ghost-icon" type="button" data-progress-back aria-label="Volver">⬹</button>
        <h2>Historial</h2>
        <button class="icon-button ghost-icon filter-icon" type="button" data-progress-action="cycle-history" aria-label="Filtrar">${getInlineIcon("filter")}</button>
      </div>
      <div class="mock-tabs progress-tabs history-filter-tabs">
        <button type="button" data-history-filter="all" class="${filter === "all" ?"active" : ""}">Todos</button>
        <button type="button" data-history-filter="completed" class="${filter === "completed" ?"active" : ""}">Completados</button>
        <button type="button" data-history-filter="pending" class="${filter === "pending" ?"active" : ""}">Pendientes</button>
      </div>
      <section class="progress-list-card history-list-card">${rows}</section>
    </section>
  `;
}

function renderProgressMeasures() {
  const userData = state.currentUserData || {};
  const weight = userData.weight || "--";
  const bodyFat = userData.bodyFat || "15.2";
  const muscleMass = userData.muscleMass || "66.6";
  const tab = state.progressMeasureTab || "summary";
  return `
    <section class="student-progress-screen progress-measures-screen">
      <div class="screen-topbar progress-topbar">
        <button class="icon-button ghost-icon" type="button" data-progress-back aria-label="Volver">⬹</button>
        <h2>Medidas</h2>
        <span></span>
      </div>
      <div class="mock-tabs progress-tabs measure-tabs">
        <button type="button" data-measure-tab="summary" class="${tab === "summary" ?"active" : ""}">Resumen</button>
        <button type="button" data-measure-tab="weight" class="${tab === "weight" ?"active" : ""}">Peso</button>
        <button type="button" data-measure-tab="photos" class="${tab === "photos" ?"active" : ""}">Fotos</button>
      </div>
      <section class="progress-list-card measure-card">
        <div class="progress-section-title">Actuales</div>
        ${tab === "photos" ?`
          <div class="measure-photo-empty">
            ${renderUserAvatar(userData)}
            <span>No hay fotos registradas.</span>
          </div>
        ` : `
          <div class="progress-stat-grid measure-stat-grid">
            <article><span>Peso</span><strong>${escapeHtml(weight)}</strong><small>kg</small></article>
            <article><span>Grasa corporal</span><strong>${escapeHtml(bodyFat)}</strong><small>%</small></article>
            <article><span>Masa muscular</span><strong>${escapeHtml(muscleMass)}</strong><small>kg</small></article>
          </div>
          <div class="progress-section-title">Histórico</div>
          <div class="performance-chart compact-chart measure-chart">
            <span class="axis top">80</span>
            <span class="axis mid">78</span>
            <span class="axis bottom">74</span>
            <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
              <path d="M20 32 L76 50 L132 54 L188 55 L244 75 L304 92" fill="none" stroke="#a855f7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 32 L76 50 L132 54 L188 55 L244 75 L304 92 L304 116 L20 116 Z" fill="rgba(124,60,255,.22)"/>
              <g fill="#c084fc"><circle cx="20" cy="32" r="4"/><circle cx="76" cy="50" r="4"/><circle cx="132" cy="54" r="4"/><circle cx="188" cy="55" r="4"/><circle cx="244" cy="75" r="4"/><circle cx="304" cy="92" r="4"/></g>
            </svg>
            <div class="chart-days"><span>15/04</span><span>22/04</span><span>29/04</span><span>06/05</span><span>13/05</span><span>20/05</span></div>
          </div>
        `}
        <button class="secondary-button measure-register-button" type="button" data-progress-action="edit-profile">+ Registrar medida</button>
      </section>
    </section>
  `;
}

function getNextRoutineNumber() {
  const numbers = getAdminRoutineIds()
    .map((id) => routines[id]?.name || "")
    .map((name) => Number(String(name).match(/^Rutina\s+(\d+)$/i)?.[1] || 0))
    .filter(Boolean);
  return numbers.length ?Math.max(...numbers) + 1 : getAdminRoutineIds().length + 1;
}

function createRoutineDraftId(number = getNextRoutineNumber()) {
  return slugify(`rutina-${number}-${Date.now()}`);
}

function startRoutineCreation(userId = "") {
  const routineNumber = getNextRoutineNumber();
  const routineId = createRoutineDraftId(routineNumber);
  state.activeView = "routines";
  state.adminPanelOpen = canManageStudents();
  state.selectedAdminUserId = userId || state.selectedAdminUserId || "";
  state.pendingAssignUserId = userId || "";
  state.adminEditorMode = "create";
  state.adminRoutineScreen = "basics";
  state.adminRoutineBasicsOpen = true;
  state.adminEditingExerciseKey = "";
  state.adminWeekEditorIndex = null;
  state.adminDayEditorIndex = null;
  state.adminDraft = createEmptyRoutine(routineId);
  state.adminDraft.name = `Rutina ${routineNumber}`;
  state.adminRoutineId = state.adminDraft.id;
  setAdminMessage(userId ?t("newRoutinePreparedAssign") : t("newRoutinePrepared"), "success");
  renderApp();
}

function startRoutineEditing(routineId, userId = "") {
  if (!routineId || !routines[routineId]) {
    setAdminMessage(t("newRoutinePrepared"), "error");
    return;
  }
  state.activeView = "routines";
  state.adminPanelOpen = canManageStudents();
  state.selectedAdminUserId = userId || state.selectedAdminUserId || "";
  state.pendingAssignUserId = userId || "";
  state.adminEditorMode = "edit";
  state.adminRoutineScreen = "detail";
  state.adminRoutineBasicsOpen = false;
  state.adminEditingExerciseKey = "";
  state.adminWeekEditorIndex = null;
  state.adminDayEditorIndex = null;
  setAdminDraftFromRoutine(routineId);
  state.adminDraft.plan.forEach((week) => {
    week.collapsed = true;
    (week.days || []).forEach((day) => {
      day.collapsed = true;
    });
  });
  setAdminMessage("");
  renderApp();
}

function renderStudentProfessorsPanel() {
  if (!studentInvitesPanel) return;
  const invites = state.studentInvites || [];
  const renderTrainerCard = (invite) => {
    const trainer = {
      displayName: invite.trainerName || invite.trainerEmail || t("trainer"),
      email: invite.trainerEmail || "",
      photoDataUrl: invite.trainerPhotoDataUrl || ""
    };
    return `
      <article class="profile-card">
        ${renderUserAvatar(trainer)}
        <div>
          <strong>${escapeHtml(trainer.displayName)}</strong>
          <span>${escapeHtml(trainer.email)}</span>
          <small>${t("trainer")}</small>
        </div>
      </article>
    `;
  };
  const pendingInvites = invites.filter((invite) => invite.status === "pending");
  const acceptedInvites = invites.filter((invite) => invite.status === "accepted");
  const pendingHtml = pendingInvites.length
    ?`
      <div class="home-section-title">${t("pendingInvites")}</div>
      ${pendingInvites
        .map((invite) => {
      const trainerName = invite.trainerName || invite.trainerEmail || t("trainer");
      return `
        <article class="invite-card" data-invite-id="${escapeHtml(invite.id)}">
          <div>
            <small>${t("invitationForYou")}</small>
            <strong>${escapeHtml(trainerName)}</strong>
            <p>${escapeHtml(t("invitationHelp", { name: trainerName }))}</p>
          </div>
          <div class="admin-row-actions">
            <button class="primary-button" type="button" data-student-invite-action="accept">${t("acceptInvite")}</button>
            <button class="secondary-button" type="button" data-student-invite-action="decline">${t("declineInvite")}</button>
          </div>
        </article>
      `;
    })
        .join("")}
    `
    : `<div class="empty-state">${t("noPendingInvites")}</div>`;
  const acceptedHtml = acceptedInvites.length
    ?`
      <div class="home-section-title">${t("acceptedProfessors")}</div>
      ${acceptedInvites
        .map((invite) => {
          return renderTrainerCard(invite);
        })
        .join("")}
    `
    : `<div class="empty-state">${t("noProfessors")}</div>`;

  studentInvitesPanel.innerHTML = `
    <section class="student-panel-card">
      <div class="home-section-title">${t("yourProfessors")}</div>
      <section class="professor-market-preview">
        <div>
          <strong>Buscar profesores</strong>
          <span>Filtra por precio, especialidad y disponibilidad.</span>
        </div>
        <div class="market-filter-grid">
          <label class="search-box">
            <span>Precio maximo</span>
            <input type="number" inputmode="decimal" placeholder="Ej: 15000" disabled />
          </label>
          <label class="search-box">
            <span>Especialidad</span>
            <input type="text" placeholder="MMA, fuerza, grappling" disabled />
          </label>
        </div>
        <small>Proximamente</small>
      </section>
      ${pendingHtml}
      ${acceptedHtml}
    </section>
  `;
}

function renderTrainerInviteTools() {
  const pending = state.trainerInvites.filter((invite) => invite.status === "pending");
  return `
    <section class="trainer-tools">
      <label class="search-box">
        <span>${t("studentEmail")}</span>
        <input id="trainerInviteEmail" type="email" placeholder="alumno@email.com" autocomplete="off" />
      </label>
      <button class="primary-button" type="button" data-trainer-action="invite">${t("sendInvite")}</button>
      <div class="trainer-pending">
        <small>${t("pendingInvites")}</small>
        ${pending.length
          ?pending.map((invite) => `<div class="trainer-pending-item">${escapeHtml(invite.studentEmail)}</div>`).join("")
          : `<div class="empty-state">${t("noPendingInvites")}</div>`
        }
      </div>
    </section>
  `;
}

function renderAdminUsers() {
  if (!adminUsers) return;
  const routineIds = getAdminRoutineIds();

  if (state.isTrainer && !state.isAdmin) {
    if (!state.adminUsers.length) {
      adminUsers.innerHTML = `${renderTrainerInviteTools()}<div class="empty-state">${t("noStudents")}</div>`;
      return;
    }
  } else if (!state.adminUsers.length) {
    adminUsers.innerHTML = `<div class="empty-state">${t("noUsers")}</div>`;
    return;
  }

  if (state.adminAssignmentMode) {
    adminUsers.innerHTML = renderAssignRoutineScreen(routineIds);
    return;
  }

  const query = normalizeText(state.adminStudentQuery || "");
  const filter = state.adminStudentFilter || "all";
  const filteredUsers = state.adminUsers.filter((user) => {
    const text = normalizeText(`${user.displayName || ""} ${user.email || ""}`);
    const isActive = Boolean(user.routineId);
    const matchesQuery = !query || text.includes(query);
    const matchesFilter = filter === "all" || (filter === "active" ?isActive : !isActive);
    return matchesQuery && matchesFilter;
  });
  const visibleUsers = state.selectedAdminUserId
    ?state.adminUsers.filter((user) => user.uid === state.selectedAdminUserId)
    : filteredUsers;

  if (state.selectedAdminUserId && !visibleUsers.length) {
    state.selectedAdminUserId = "";
    state.adminEditorMode = "";
    state.adminRoutineBasicsOpen = false;
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminDraft = null;
    renderAdminUsers();
    return;
  }

  if (state.selectedAdminUserId) {
    adminUsers.innerHTML = visibleUsers.map((user) => renderTrainerStudentActivity(user, routineIds)).join("");
    return;
  }

  adminUsers.innerHTML = `
    <section class="trainer-students-screen">
      <div class="trainer-students-topbar">
        <h2>Alumnos</h2>
        <button class="trainer-add-student-button" type="button" data-admin-new-student aria-label="Nuevo alumno">+</button>
      </div>
      <label class="trainer-student-search">
        <span aria-hidden="true">⌕</span>
        <input type="search" data-admin-student-search value="${escapeHtml(state.adminStudentQuery || "")}" placeholder="Buscar alumnos..." autocomplete="off" />
      </label>
      <div class="trainer-student-tabs">
        ${["all", "active", "inactive"].map((item) => `
          <button type="button" data-admin-student-filter="${item}" class="${filter === item ?"active" : ""}">
            ${item === "all" ?"Todos" : item === "active" ?"Activos" : "Inactivos"}
          </button>
        `).join("")}
      </div>
      ${state.adminStudentFormOpen ?renderTrainerNewStudentForm() : ""}
      <div class="trainer-student-list">
        ${filteredUsers.length
          ?filteredUsers.map((user) => renderTrainerStudentListItem(user)).join("")
          : `<div class="empty-state">${t("noStudents")}</div>`
        }
      </div>
    </section>
  `;
}

function renderAssignRoutineScreen(routineIds) {
  const student = getAdminUser(state.assignmentStudentId) || state.adminUsers[0] || {};
  const routineId = state.assignmentRoutineId || student.routineId || routineIds[0] || "";
  const routine = routines[routineId] || {};
  const studentName = student.displayName || getDisplayNameFromEmail(student.email || "") || t("user");
  const routineName = routine.name || t("noRoutine");
  const routineWeeks = routine.plan?.length || 0;
  const startDate = state.assignmentStartDate || new Date().toISOString().slice(0, 10);
  return `
    <section class="assign-routine-screen">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-assign-action="back" aria-label="Volver">&lsaquo;</button>
        <h2>Asignar rutina</h2>
        <span></span>
      </div>

      <section class="assign-step">
        <span class="assign-step-number">1</span>
        <label>
          <small>Seleccionar alumno</small>
          <select data-assign-student>
            ${state.adminUsers.map((user) => {
              const name = user.displayName || getDisplayNameFromEmail(user.email || "");
              return `<option value="${escapeHtml(user.uid)}" ${user.uid === student.uid ?"selected" : ""}>${escapeHtml(name)} · ${escapeHtml(user.email || "")}</option>`;
            }).join("")}
          </select>
        </label>
      </section>

      <section class="assign-step">
        <span class="assign-step-number">2</span>
        <label>
          <small>Seleccionar rutina</small>
          <select data-assign-routine>
            ${routineIds.map((id) => `<option value="${escapeHtml(id)}" ${id === routineId ?"selected" : ""}>${escapeHtml(routines[id]?.name || id)} · ${(routines[id]?.plan || []).length} semanas</option>`).join("")}
          </select>
        </label>
      </section>

      <section class="assign-step">
        <span class="assign-step-number">3</span>
        <label>
          <small>Fecha de inicio</small>
          <input type="date" data-assign-date value="${escapeHtml(startDate)}" />
        </label>
      </section>

      <section class="assign-summary">
        <small>Resumen</small>
        <div><span>Alumno</span><strong>${escapeHtml(studentName)}</strong></div>
        <div><span>Rutina</span><strong>${escapeHtml(routineName)}</strong></div>
        <div><span>Inicio</span><strong>${escapeHtml(formatDateDisplay(startDate))}</strong></div>
        <div><span>Duración</span><strong>${routineWeeks} semanas</strong></div>
      </section>

      <button class="primary-button assign-submit" type="button" data-assign-action="save">Asignar rutina</button>
    </section>
  `;
}

function formatDateDisplay(value) {
  if (!value) return "";
  const [year, month, day] = String(value).split("-");
  return day && month && year ?`${day}/${month}/${year}` : value;
}

function renderAdminWeekEditorScreen(week, weekIndex) {
  const phase = week.phase || {};
  const daysCount = (week.days || []).length;
  return `
    <article class="native-edit-screen week-edit-screen" data-week-index="${weekIndex}">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-action="back-to-routine-weeks" aria-label="Volver">&lsaquo;</button>
        <h2>Editar semana</h2>
        <span></span>
      </div>
      <div class="week-edit-heading">
        <div>
          <small>Semana</small>
          <strong>${escapeHtml(week.number || weekIndex + 1)}: ${escapeHtml(phase.name || "Adaptación")}</strong>
        </div>
        <div>
          <button class="primary-button tiny-action" type="button" data-admin-action="save-week">Guardar semana</button>
          <button class="danger-button tiny-action" type="button" data-admin-action="delete-week">Excluir semana</button>
        </div>
      </div>
      <label class="native-field">
        <span>Número</span>
        <input class="admin-field" data-week-field="number" value="${escapeHtml(week.number || "")}" />
      </label>
      <label class="native-field">
        <span>Fase</span>
        <select class="admin-field" data-week-field="phase.name">
          ${["Adaptación", "Fuerza básica", "Hipertrofia", "Hipertrofia avanzada", "Fuerza máxima"].map((item) =>
            `<option value="${escapeHtml(item)}" ${item === (phase.name || "") ?"selected" : ""}>${escapeHtml(item)}</option>`
          ).join("")}
        </select>
      </label>
      <label class="native-field">
        <span>Etiqueta</span>
        <input class="admin-field" data-week-field="phase.badge" value="${escapeHtml(phase.badge || "")}" placeholder="Ej: Semana inicial" />
      </label>
      <label class="native-field">
        <span>Indicaciones</span>
        <textarea class="admin-textarea" data-week-field="phase.modifier" placeholder="Enfocarse en la técnica y en la adaptación al volumen.">${escapeHtml(phase.modifier || "")}</textarea>
      </label>
      <div class="week-training-days-banner">
        <div><strong>Días de entrenamiento</strong><span>${daysCount} ${daysCount === 1 ? "día" : "días"}</span></div>
        <i aria-hidden="true">&star;</i>
      </div>
      <button class="primary-button native-main-button" type="button" data-admin-action="add-day">+ Crear día</button>
    </article>
  `;
}

function getAdminWeekStats(week) {
  const days = week?.days || [];
  const exerciseCount = days.reduce((total, day) => total + (day.exercises || []).length, 0);
  const totalSets = days.reduce((total, day) => {
    return total + (day.exercises || []).reduce((setsTotal, key) => {
      const exercise = state.adminDraft?.exerciseLibrary?.[key] || {};
      return setsTotal + (Number(String(exercise.baseSets || "").match(/\d+/)?.[0]) || 0);
    }, 0);
  }, 0);
  const duration = days.reduce((total, day) => total + (Number(String(day.duration || "").match(/\d+/)?.[0]) || 45), 0);
  const completedDays = days.filter((day) => (day.exercises || []).length > 0).length;
  const progress = days.length ?Math.round((completedDays / days.length) * 100) : 0;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const durationLabel = hours ?`${hours}h ${minutes}m` : `${duration || 0} min`;
  return { daysCount: days.length, exerciseCount, totalSets, durationLabel, progress };
}

function renderAdminWeekOverviewScreen(week, weekIndex) {
  const phase = week.phase || {};
  const stats = getAdminWeekStats(week);
  const days = week.days || [];
  return `
    <article class="native-edit-screen week-overview-screen" data-week-index="${weekIndex}">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-action="back-to-routine-weeks" aria-label="Volver">&lsaquo;</button>
        <h2>Semana ${escapeHtml(week.number || weekIndex + 1)} - ${escapeHtml(phase.name || "Adaptación")}</h2>
        <button class="icon-button ghost-icon" type="button" data-admin-action="edit-week" aria-label="Editar semana">&vellip;</button>
      </div>

      <section class="week-progress-hero">
        <div>
          <span>Progreso de la semana</span>
          <strong>${stats.progress}%</strong>
        </div>
        <b aria-hidden="true">&#127881;</b>
        <i style="--progress:${stats.progress}%"></i>
      </section>

      <div class="admin-day-stats native-day-stats week-overview-stats">
        <article><span>Días</span><strong>${stats.daysCount}</strong></article>
        <article><span>Ejercicios</span><strong>${stats.exerciseCount}</strong></article>
        <article><span>Duración</span><strong>${escapeHtml(stats.durationLabel)}</strong></article>
      </div>

      <div class="week-days-title">
        <span>Días de entrenamiento</span>
        <button class="primary-button" type="button" data-admin-action="add-day">+ Nuevo día</button>
      </div>

      <section class="week-overview-day-list">
        ${days.map((day, dayIndex) => `
          <button class="week-overview-day-card" type="button" data-admin-action="edit-day" data-week-index="${weekIndex}" data-day-index="${dayIndex}">
            <span>
              <strong>${escapeHtml(day.title || `Día ${dayIndex + 1}`)}</strong>
              <small>${(day.exercises || []).length} ejercicios</small>
            </span>
            <b aria-hidden="true">&check;</b>
          </button>
        `).join("") || `<div class="empty-state">Todavía no hay días creados.</div>`}
      </section>
    </article>
  `;
}

function renderAdminRoutineDetailScreen(draft) {
  const weeks = draft.plan || [];
  const assignedCount = getRoutineAssignedCount(draft.id);
  const progressValues = [100, 75, 50, 25, 0, 0];
  const weekRows = weeks.map((week, index) => {
    const phase = week.phase || {};
    const progress = progressValues[index] ?? 0;
    const icon = "calendar";
    return `
      <button class="routine-detail-week-row" type="button" data-admin-action="open-week" data-admin-open-week="true" data-week-index="${index}">
        <span class="routine-list-icon icon-${icon} calendar">${getInlineIcon("calendar")}</span>
        <span class="routine-detail-week-main">
          <strong>Semana ${escapeHtml(week.number || index + 1)}</strong>
          <small>${escapeHtml(phase.name || "Sin fase")}</small>
        </span>
        <b class="routine-detail-week-progress progress-${progress}">${progress}%</b>
        <i aria-hidden="true">&rsaquo;</i>
      </button>
    `;
  }).join("");

  return `
    <section class="routine-detail-screen">
      <div class="screen-topbar routine-detail-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-action="back-to-routine-list" aria-label="Volver">&lsaquo;</button>
        <h2>${escapeHtml(draft.name || "Rutina")}</h2>
        <div class="routine-detail-actions">
          <button class="icon-button ghost-icon" type="button" data-admin-action="edit-routine-basics" aria-label="Editar">&#9998;</button>
          <button class="icon-button ghost-icon" type="button" aria-label="Más opciones">&vellip;</button>
        </div>
      </div>

      <section class="admin-routine-overview-card routine-detail-summary">
        <article><span>Duración</span><strong>${weeks.length || 0} semanas</strong></article>
        <article><span>Alumnos</span><strong>${assignedCount}</strong></article>
        <div class="mini-progress" style="--progress:75%"><strong>75%</strong></div>
      </section>

      <div class="admin-routine-weeks-title">
        <span>Semanas</span>
        <button class="primary-button" type="button" data-admin-action="add-week">+ Nueva semana</button>
      </div>

      <section class="routine-detail-week-list">
        ${weekRows || `<div class="empty-state">${t("createWeekPrompt")}</div>`}
      </section>
    </section>
  `;
}

function renderAdminDayEditorScreen(week, day, weekIndex, dayIndex) {
  const focus = day.focus || "Hipertrofia";
  const exerciseCount = (day.exercises || []).length;
  const totalSets = (day.exercises || []).reduce((total, key) => {
    const exercise = state.adminDraft?.exerciseLibrary?.[key] || {};
    return total + (Number(String(exercise.baseSets || "").match(/\d+/)?.[0]) || 0);
  }, 0);
  return `
    <article class="native-edit-screen day-edit-screen" data-week-index="${weekIndex}" data-day-index="${dayIndex}">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-action="back-to-week-edit" aria-label="Volver">&lsaquo;</button>
        <h2>${day.title ?escapeHtml(day.title) : "Crear día"}</h2>
        <button class="icon-button ghost-icon" type="button" data-admin-action="save-day" aria-label="Guardar">&check;</button>
      </div>
      <div class="admin-day-stats native-day-stats">
        <article><span>Ejercicios</span><strong>${exerciseCount}</strong></article>
        <article><span>Series totales</span><strong>${totalSets}</strong></article>
        <article><span>Duración</span><strong>${escapeHtml(day.duration || "45")} min</strong></article>
      </div>
      <div class="native-tabs two-tabs">
        <button class="active" type="button">Información</button>
        <button type="button" data-admin-action="add-exercise">Ejercicios <b>${exerciseCount}</b></button>
      </div>
      <label class="native-field">
        <span>Nombre del día</span>
        <input class="admin-field" data-day-field="title" value="${escapeHtml(day.title || "")}" placeholder="Día 1 - Pecho y Tríceps" />
      </label>
      <div class="native-field">
        <span>Foco principal</span>
        <div class="native-pill-row">
          ${["Fuerza", "Hipertrofia", "Resistencia"].map((item) => `
            <button type="button" class="${item === focus ?"active" : ""}" data-day-focus="${escapeHtml(item)}">${escapeHtml(item)}</button>
          `).join("")}
        </div>
      </div>
      <label class="native-field duration-field">
        <span>Duración estimada</span>
        <input class="admin-field" data-day-field="duration" value="${escapeHtml(day.duration || "45")}" />
        <small>minutos ◷</small>
      </label>
      <label class="native-field">
        <span>Notas</span>
        <textarea class="admin-textarea" data-day-field="notes" placeholder="Notas o indicaciones especiales para este día...">${escapeHtml(day.notes || "")}</textarea>
      </label>
      <div class="native-exercise-list">
        <div class="week-days-title">
          <span>Ejercicios</span>
          <button class="primary-button" type="button" data-admin-action="add-exercise">+ Agregar ejercicio</button>
        </div>
        ${(day.exercises || []).map((key, index) => {
          const exercise = state.adminDraft?.exerciseLibrary?.[key] || {};
          const images = exercise.images || ["", ""];
          const thumb = images[0] ?`<img src="${escapeHtml(resolveExerciseImage(images[0], exercise.name || t("newExercise")))}" alt="${escapeHtml(exercise.name || t("newExercise"))}" />` : "";
          return `
            <button class="native-exercise-row" type="button" data-admin-action="edit-exercise" data-exercise-key="${escapeHtml(key)}">
              <span class="native-exercise-thumb">${thumb}</span>
              <span>
                <strong>${index + 1}. ${escapeHtml(exercise.name || t("newExercise"))}</strong>
                <small>${escapeHtml([exercise.baseSets ?`${exercise.baseSets} series` : "", exercise.baseReps ?`${exercise.baseReps} reps` : "", exercise.rest ?`Descanso: ${exercise.rest}` : ""].filter(Boolean).join(" · "))}</small>
              </span>
              <b>&vellip;</b>
            </button>
          `;
        }).join("") || `<div class="empty-state">Agrega ejercicios para este día.</div>`}
      </div>
      <button class="primary-button native-main-button" type="button" data-admin-action="save-day">▣ Guardar día</button>
    </article>
  `;
}

function findExerciseLocation(exerciseKey) {
  if (!state.adminDraft || !exerciseKey) return null;
  for (let weekIndex = 0; weekIndex < state.adminDraft.plan.length; weekIndex += 1) {
    const week = state.adminDraft.plan[weekIndex];
    for (let dayIndex = 0; dayIndex < (week.days || []).length; dayIndex += 1) {
      if ((week.days[dayIndex].exercises || []).includes(exerciseKey)) {
        return { weekIndex, dayIndex };
      }
    }
  }
  return null;
}

function renderAdminExerciseEditorScreen(exercise, exerciseKey, weekIndex, dayIndex) {
  const images = exercise.images || ["", ""];
  const startPreview = images[0]
    ?`<img class="admin-image-preview" src="${escapeHtml(resolveExerciseImage(images[0], exercise.name || t("newExercise")))}" alt="${escapeHtml(exercise.name || t("newExercise"))}" />`
    : `<div class="admin-image-empty">RutFit</div>`;
  return `
    <article class="native-edit-screen exercise-edit-screen" data-week-index="${weekIndex}" data-day-index="${dayIndex}" data-exercise-key="${escapeHtml(exerciseKey)}">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-action="back-to-day-edit" aria-label="Volver">&lsaquo;</button>
        <h2>${exercise.name ? "Editar ejercicio" : "Nuevo ejercicio"}</h2>
        <button class="icon-button ghost-icon" type="button" data-admin-action="delete-exercise" aria-label="Eliminar">&vellip;</button>
      </div>
      <div class="exercise-editor-hero native-hero-upload">
        ${startPreview}
        <label class="native-camera-button">
          ${getInlineIcon("camera")}
          <input type="file" accept="image/*" data-image-upload="0" />
        </label>
      </div>
      <label class="native-field">
        <span>Nombre del ejercicio</span>
        <input class="admin-field" data-exercise-field="name" value="${escapeHtml(exercise.name || "")}" placeholder="Press de banca" />
      </label>
      <label class="native-field native-icon-field">
        <span>Grupo muscular</span>
        <input class="admin-field" data-exercise-field="objective" value="${escapeHtml(exercise.objective || "")}" placeholder="Pecho" />
      </label>
      <label class="native-field native-icon-field">
        <span>Equipo</span>
        <input class="admin-field" data-exercise-field="equipment" value="${escapeHtml(exercise.equipment || "")}" placeholder="Barra" />
      </label>
      <div class="native-two-grid">
        <label class="native-field">
          <span>Series</span>
          <input class="admin-field" data-exercise-field="baseSets" value="${escapeHtml(exercise.baseSets || "")}" placeholder="4" />
        </label>
        <label class="native-field">
          <span>Repeticiones</span>
          <input class="admin-field" data-exercise-field="baseReps" value="${escapeHtml(exercise.baseReps || "")}" placeholder="8 - 10" />
        </label>
      </div>
      <label class="native-field duration-field">
        <span>Descanso</span>
        <input class="admin-field" data-exercise-field="rest" value="${escapeHtml(exercise.rest || "")}" placeholder="90" />
        <small>segundos</small>
      </label>
      <label class="native-field">
        <span>Técnica</span>
        <textarea class="admin-textarea" data-exercise-field="technique" placeholder="Indicaciones técnicas...">${escapeHtml(exercise.technique || "")}</textarea>
      </label>
      <button class="primary-button native-main-button" type="button" data-admin-action="save-exercise">▣ Guardar cambios</button>
    </article>
  `;
}

function renderTrainerStudentListItem(user) {
  const displayName = user.displayName || getDisplayNameFromEmail(user.email || "");
  const isActive = Boolean(user.routineId);
  const canDeleteUser = state.isAdmin && user.uid !== state.currentUser?.uid;
  return `
    <article class="trainer-student-item" data-user-id="${escapeHtml(user.uid)}">
      <button class="trainer-student-open" type="button" data-user-toggle>
        ${renderUserAvatar(user, "student-list-avatar")}
        <span>
          <strong>${escapeHtml(displayName || t("user"))}</strong>
          <small>${escapeHtml(user.email || t("noEmail"))}</small>
        </span>
        <em class="${isActive ?"active" : "inactive"}">${isActive ?"Activo" : "Inactivo"}</em>
      </button>
      ${canDeleteUser ?`<button class="user-delete-button compact-delete" type="button" data-user-delete aria-label="${t("deleteUser")}">×</button>` : ""}
    </article>
  `;
}

function renderTrainerNewStudentForm() {
  return `
    <section class="trainer-new-student-card">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-new-student-close aria-label="Volver">&lsaquo;</button>
        <h2>Nuevo alumno</h2>
        <span></span>
      </div>
      <div class="new-student-avatar">
        ${renderUserAvatar(state.currentUserData || {}, "student-home-avatar")}
        <b aria-hidden="true">▣</b>
      </div>
      <label class="search-box"><span>Nombre completo</span><input type="text" id="trainerInviteName" placeholder="Juan Pérez García" /></label>
      <label class="search-box"><span>Email</span><input type="email" id="trainerInviteEmail" placeholder="juan.perez@email.com" /></label>
      <label class="search-box"><span>Teléfono</span><input type="tel" id="trainerInvitePhone" placeholder="+34 600 123 456" /></label>
      <label class="search-box"><span>Fecha de nacimiento</span><input type="text" id="trainerInviteBirth" placeholder="15/05/1995" /></label>
      <div class="student-level-pills">
        <span>Principiante</span><span class="active">Intermedio</span><span>Avanzado</span>
      </div>
      <button class="primary-button" type="button" data-trainer-action="invite">Guardar alumno</button>
    </section>
  `;
}

function renderTrainerStudentActivity(user, routineIds) {
  const displayName = user.displayName || getDisplayNameFromEmail(user.email || "");
  const currentRoutine = user.routineId || "";
  const routine = currentRoutine ?routines[currentRoutine] : null;
  const currentRoutineName = routine ?routine.name || currentRoutine : t("noRoutine");
  const routineStats = routine ?getRoutineProgressStats(routine) : { percent: 0, totalSessions: 0 };
  const nextInfo = routine ?getNextTrainingInfo(routine) : null;
  const canDeleteUser = state.isAdmin && user.uid !== state.currentUser?.uid;
  const routineOptions = [
    `<option value="" ${!currentRoutine ?"selected" : ""}>${t("noRoutine")}</option>`,
    ...routineIds.map((id) => `<option value="${escapeHtml(id)}" ${id === currentRoutine ?"selected" : ""}>${escapeHtml(routines[id].name || id)}</option>`),
    currentRoutine && !routineIds.includes(currentRoutine)
      ?`<option value="${escapeHtml(currentRoutine)}" selected>${escapeHtml(t("unavailableRoutine", { id: currentRoutine }))}</option>`
      : ""
  ].join("");
  return `
    <section class="trainer-student-activity" data-user-id="${escapeHtml(user.uid)}">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-users-back aria-label="Volver">9</button>
        <h2>${escapeHtml(displayName || t("user"))}</h2>
        ${canDeleteUser ?`<button class="icon-button ghost-icon user-delete-button" type="button" data-user-delete aria-label="${t("deleteUser")}">&vellip;</button>` : `<button class="icon-button ghost-icon" type="button" aria-label="Opciones">&vellip;</button>`}
      </div>
      <div class="activity-profile-hero">
        ${renderUserAvatar(user, "student-activity-avatar")}
      </div>
      <div class="student-activity-tabs">
        <button class="active" type="button">Resumen</button>
        <button type="button" data-user-action="edit-routine" ${currentRoutine && routines[currentRoutine] ?"" : "disabled"}>Rutinas</button>
        <button type="button">Progreso</button>
        <button type="button">Historial</button>
      </div>
      <section class="student-activity-routine">
        <div>
          <small>Rutina actual</small>
          <strong>${escapeHtml(currentRoutineName)}</strong>
          <span>${nextInfo ?`Semana ${nextInfo.weekNumber} de ${nextInfo.totalWeeks}` : "Sin plan activo"}</span>
        </div>
        <div class="mini-progress" style="--progress:${routineStats.percent}%"><strong>${routineStats.percent}%</strong></div>
      </section>
      <div class="progress-section-title">Estadísticas</div>
      <div class="student-activity-stats">
        <article><b>▣</b><strong>${routineStats.totalSessions || 0}</strong><span>Entrenamientos</span></article>
        <article><b>◴</b><strong>12h 45m</strong><span>Tiempo total</span></article>
        <article><b>◎</b><strong>85%</strong><span>Asistencia</span></article>
      </div>
      <div class="progress-section-title">Próximo entrenamiento</div>
      <section class="student-current-card next-training-card">
        <strong>${escapeHtml(nextInfo ?nextInfo.dayTitle : getNextTrainingLabel(routine))}</strong>
        <span>Mañana · 18:00</span>
      </section>
      <label class="search-box admin-user-routine">
        <span>${t("assignExistingRoutine")}</span>
        <select data-user-routine>${routineOptions}</select>
      </label>
      <div class="admin-row-actions">
        <button class="primary-button" type="button" data-user-action="add-routine">${t("addRoutine")}</button>
        <button class="secondary-button" type="button" data-user-action="edit-routine" ${currentRoutine && routines[currentRoutine] ?"" : "disabled"}>${t("editCurrentRoutine")}</button>
        <button class="danger-button" type="button" data-user-clear>${t("removeRoutine")}</button>
      </div>
    </section>
  `;
}
async function saveRoutineToFirestore(routine) {
  const data = serializeRoutine(routine);
  if (state.isTrainer && !state.isAdmin) {
    data.ownerTrainerId = state.currentUser.uid;
    data.ownerTrainerEmail = normalizeEmail(state.currentUser.email || "");
  }
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

async function saveAdminDraftAndAssignment(options = {}) {
  if (!state.adminDraft) return "";
  if (!options.skipReadBasics) readAdminBasics();
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
  if (state.isTrainer && !state.isAdmin && routines[routineId]?.ownerTrainerId !== state.currentUser?.uid) {
    throw new Error(t("permissionDenied"));
  }
  await db.collection("routines").doc(routineId).delete();
  if (state.isAdmin) {
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
  } else {
    const assignedUsers = state.adminUsers.filter((user) => user.routineId === routineId);
    const batch = db.batch();
    assignedUsers.forEach((user) => {
      batch.set(
        db.collection("users").doc(user.uid),
        {
          routineId: "",
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedBy: normalizeEmail(state.currentUser?.email || "")
        },
        { merge: true }
      );
    });
    if (assignedUsers.length) await batch.commit();
  }
  delete routines[routineId];
}

function selectRoutine(routineId) {
  if (!routines[routineId]) return;
  state.selectedRoutine = routineId;
  state.search = "";
  state.filter = "todos";
  loadRoutineStorage(routineId);
  renderApp();
}

async function applyUserData(userData) {
  state.currentUserData = userData;
  state.isAdmin = userData.role === "admin" || isAdminEmail(state.currentUser?.email);
  state.isTrainer = userData.role === "trainer";
  if (state.isAdmin) {
    await loadFirestoreRoutinesForAdmin();
    startAdminUsersListener();
  } else if (state.isTrainer) {
    if (unsubscribeAdminUsers) {
      unsubscribeAdminUsers();
      unsubscribeAdminUsers = null;
    }
    await loadFirestoreRoutinesForTrainer();
    startTrainerInvitesListener();
  } else {
    if (unsubscribeAdminUsers) {
      unsubscribeAdminUsers();
      unsubscribeAdminUsers = null;
    }
    if (unsubscribeTrainerInvites) {
      unsubscribeTrainerInvites();
      unsubscribeTrainerInvites = null;
    }
    state.adminUsers = [];
    state.trainerInvites = [];
  }
  startStudentInvitesListener();

  const routineId = userData.routineId || "";
  let firestoreRoutine = null;
  try {
    firestoreRoutine = routineId ?await loadRoutineFromFirestore(routineId) : null;
  } catch (error) {
    console.warn("No se pudo cargar la rutina asignada.", error);
    setAuthMessage(getAuthErrorMessage(error), "error");
  }
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
        setAuthMessage(getAuthErrorMessage(error), "error");
        selectRoutine("pending");
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
  const managerMode = canManageStudents();
  if (managerMode && !["home", "students", "routines", "account", "notifications"].includes(state.activeView)) {
    state.activeView = "home";
  }
  if (!managerMode && !["home", "routines", "progress", "professors", "account", "notifications"].includes(state.activeView)) {
    state.activeView = "home";
  }
  const trainerDashboardOnly = managerMode && ["home", "students", "routines", "account", "notifications"].includes(state.activeView);
  const studentMode = !managerMode;
  const nativeAdminSubscreen = managerMode
    && state.activeView === "routines"
    && Boolean(state.adminDraft && state.adminEditorMode)
    && state.adminWeekEditorIndex !== null;

  routineSelect.classList.add("is-hidden");
  appHeader.classList.add("is-hidden");
  appMain.classList.remove("is-hidden");
  document.body.classList.toggle("native-admin-subscreen-active", nativeAdminSubscreen);
  appKicker.textContent = trainerDashboardOnly ?(state.isAdmin ?t("admin") : t("trainer")) : "";
  appKicker.classList.toggle("is-hidden", !appKicker.textContent.trim());
  appTitle.textContent = "RutFit";
  const displayName = state.currentUserData?.displayName || getDisplayNameFromEmail(state.currentUser?.email || "");
  userGreeting.textContent = displayName ?t("hello", { name: displayName }) : "";
  adminToggle.textContent = state.isAdmin ?t("admin") : t("students");
  adminToggle.classList.add("is-hidden");
  bottomNav?.classList.toggle("is-hidden", nativeAdminSubscreen);
  renderBottomNav();

  const showAdminPanel = managerMode && ["students", "routines"].includes(state.activeView);
  state.adminPanelOpen = showAdminPanel;
  adminPanel.classList.toggle("is-hidden", !showAdminPanel);
  if (showAdminPanel) {
    renderAdminPanel();
  }
  renderStudentProfessorsPanel();

  trainerHome?.classList.toggle("is-hidden", !(managerMode && state.activeView === "home"));
  if (managerMode && state.activeView === "home") renderTrainerHome();
  studentHome?.classList.toggle("is-hidden", !(studentMode && state.activeView === "home"));
  if (studentMode && state.activeView === "home") renderStudentHomeV2();
  studentProgress?.classList.toggle("is-hidden", !((studentMode && ["progress", "notifications"].includes(state.activeView)) || (managerMode && state.activeView === "notifications")));
  if (studentMode && state.activeView === "progress") renderStudentProgress();
  if (state.activeView === "notifications") renderStudentNotifications();
  studentInvitesPanel?.classList.toggle("is-hidden", !(studentMode && state.activeView === "professors"));

  const showAccount = state.activeView === "account";
  renderAccountPanel();
  accountPanel?.classList.toggle("is-hidden", !showAccount);
  changeRoutine.classList.add("is-hidden");
  progressRing.classList.toggle("is-hidden", showAccount || managerMode || state.activeView !== "routines" || !((routine?.plan || []).length > 0));

  const showRoutineView = studentMode && state.activeView === "routines";
  const hasPlan = (routine?.plan || []).length > 0 && showRoutineView;
  summaryStrip.classList.add("is-hidden");
  weeksContainer.classList.toggle("is-hidden", !hasPlan);
  routinePlaceholder.classList.toggle("is-hidden", hasPlan || !showRoutineView);

  if (hasPlan) {
    renderPlan();
  } else {
    weeksContainer.innerHTML = "";
    summaryStrip.innerHTML = "";
    stopTimer();
  }
}

function renderBottomNav() {
  if (!bottomNav) return;
  const items = canManageStudents()
    ?[
        ["home", "Inicio"],
        ["students", t("students")],
        ["routines", t("routinesNav")],
        ["account", t("accountNav")]
      ]
    : [
        ["home", "Inicio"],
        ["routines", "Rutina"],
        ["progress", "Progreso"],
        ["professors", t("professorsNav")],
        ["account", "Perfil"]
      ];
  bottomNav.style.gridTemplateColumns = `repeat(${items.length}, 1fr)`;
  bottomNav.innerHTML = items
    .map(([view, label]) => `
      <button type="button" data-view="${view}">
        <span class="nav-icon" aria-hidden="true">${getNavIcon(view)}</span>
        <span>${label}</span>
      </button>
    `)
    .join("");
  bottomNav.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.activeView);
  });
}

function getNavIcon(view) {
  const icons = {
    home: '<svg viewBox="0 0 24 24"><path d="M3 10.8 12 3l9 7.8v9.7a.5.5 0 0 1-.5.5H15v-6H9v6H3.5a.5.5 0 0 1-.5-.5v-9.7Z"/></svg>',
    students: '<svg viewBox="0 0 24 24"><path d="M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2 20.5C2 16.9 4.9 14 8.5 14s6.5 2.9 6.5 6.5V21H2v-.5Zm13.5.5h6.5v-.4c0-3.1-2.3-5.7-5.3-6.1a8 8 0 0 1 1.8 5v1.5Z"/></svg>',
    routines: '<svg viewBox="0 0 24 24"><path d="M6 3h12a2 2 0 0 1 2 2v15.5a.5.5 0 0 1-.75.43L12 16.7l-7.25 4.23A.5.5 0 0 1 4 20.5V5a2 2 0 0 1 2-2Zm2.5 5h7v2h-7V8Zm0 4h5v2h-5v-2Z"/></svg>',
    progress: '<svg viewBox="0 0 24 24"><path d="M4 19h16v2H4v-2Zm2-8h3v6H6v-6Zm5-6h3v12h-3V5Zm5 3h3v9h-3V8Z"/></svg>',
    professors: '<svg viewBox="0 0 24 24"><path d="M12 3 2 8l10 5 10-5-10-5Zm-7 8.1v4.2c0 2.2 3.1 4.7 7 4.7s7-2.5 7-4.7v-4.2l-7 3.5-7-3.5Z"/></svg>',
    account: '<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-9 9a9 9 0 0 1 18 0v1H3v-1Z"/></svg>'
  };
  return icons[view] || icons.routines;
}

function renderAccountPanel() {
  if (!accountPanel) return;
  const email = state.currentUser?.email || "";
  const userData = state.currentUserData || {};
  const displayName = userData.displayName || getDisplayNameFromEmail(email);
  const role = state.isAdmin ?t("admin") : state.isTrainer ?t("trainer") : t("student");
  const isStudentProfile = !state.isAdmin && !state.isTrainer;
  if (isStudentProfile) {
    accountPanel.innerHTML = state.accountSubView === "settings"
      ?renderStudentSettingsAccount(userData, displayName, email)
      : renderStudentProfileAccount(userData, displayName, email);
    return;
  }
  const stats = isStudentProfile ?getProfileStats(userData) : [];
  accountPanel.innerHTML = `
    <section class="student-panel-card">
      <div class="home-section-title">${t("profile")}</div>
      <article class="profile-card">
        ${renderUserAvatar(userData)}
        <div>
          <strong>${escapeHtml(displayName || t("user"))}</strong>
          <span>${escapeHtml(email || t("noEmail"))}</span>
          <small>${escapeHtml(role)}</small>
          ${stats.length ?`<p>${stats.map(escapeHtml).join(" · ")}</p>` : ""}
        </div>
      </article>
      <div class="profile-form">
        <label class="search-box">
          <span>${t("name")}</span>
          <input type="text" data-profile-field="displayName" value="${escapeHtml(displayName || "")}" autocomplete="name" />
        </label>
        ${canManageStudents() ?`<div class="profile-grid trainer-market-fields">
          <label class="search-box">
            <span>Precio</span>
            <input type="number" inputmode="decimal" data-profile-field="trainerPrice" value="${escapeHtml(userData.trainerPrice || "")}" placeholder="Ej: 15000" />
          </label>
          <label class="search-box">
            <span>Especialidad</span>
            <input type="text" data-profile-field="trainerSpecialty" value="${escapeHtml(userData.trainerSpecialty || "")}" placeholder="MMA, fuerza" />
          </label>
        </div>` : ""}
        ${isStudentProfile ?`<div class="profile-grid">
          <label class="search-box">
            <span>${t("weight")}</span>
            <input type="number" inputmode="decimal" data-profile-field="weight" value="${escapeHtml(userData.weight || "")}" placeholder="78" />
          </label>
          <label class="search-box">
            <span>${t("height")}</span>
            <input type="number" inputmode="decimal" step="0.01" data-profile-field="height" value="${escapeHtml(userData.height || "")}" placeholder="1.75" />
          </label>
          <label class="search-box">
            <span>${t("age")}</span>
            <input type="number" inputmode="numeric" data-profile-field="age" value="${escapeHtml(userData.age || "")}" placeholder="24" />
          </label>
        </div>
        <label class="search-box">
          <span>${t("goal")}</span>
          <textarea data-profile-field="goal" rows="2" placeholder="${t("goal")}">${escapeHtml(userData.goal || "")}</textarea>
        </label>` : ""}
        <label class="file-button profile-photo-button">
          ${t("changePhoto")}
          <input type="file" accept="image/*" data-profile-photo hidden />
        </label>
      </div>
      <p class="account-help">${t("accountPanelHelp")}</p>
      <section class="settings-list" aria-label="${t("accountNav")}">
        <div><span>Información personal</span><strong>></strong></div>
        <div><span>Objetivos</span><strong>></strong></div>
        <div><span>Preferencias</span><strong>></strong></div>
        <div><span>Centro de ayuda</span><strong>></strong></div>
      </section>
      <p class="account-status" id="accountStatus" aria-live="polite"></p>
      <button class="secondary-button" type="button" data-profile-save>${t("saveProfile")}</button>
      <button class="primary-button" type="button" data-account-logout>${t("logout")}</button>
    </section>
  `;
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
  return Boolean(exercise);
}

function phasePrescription(exercise, weekNumber) {
  if ([4, 8].includes(weekNumber)) {
    return {
      sets: exercise.objective === "recuperación" ?exercise.baseSets : "2-3",
      reps: exercise.objective === "fuerza" ?"3 suave" : exercise.baseReps,
      rest: exercise.objective === "recuperación" ?exercise.rest : "1:00-1:30"
    };
  }

  if (weekNumber === 12) {
    return {
      sets: exercise.objective === "lactato" ?"4" : "2-3",
      reps: exercise.objective === "fuerza" ?"2 rápido" : exercise.baseReps,
      rest: exercise.objective === "lactato" ?"1:30" : exercise.rest
    };
  }

  if (weekNumber >= 9) {
    return {
      sets: exercise.objective === "lactato" || exercise.objective === "ground and pound" ?"6-8" : exercise.baseSets,
      reps: exercise.objective === "fuerza" ?"2-3" : exercise.baseReps,
      rest: exercise.objective === "lactato" ?"0:45-1:00" : exercise.rest
    };
  }

  if (weekNumber >= 5) {
    return {
      sets: exercise.objective === "potencia" ?"5-7" : exercise.baseSets,
      reps: exercise.objective === "fuerza" ?"3" : exercise.baseReps,
      rest: exercise.objective === "potencia" ?"1:30" : exercise.rest
    };
  }

  return { sets: exercise.baseSets, reps: exercise.baseReps, rest: exercise.rest };
}

const summaryIcons = {
  sessions: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 15h.01"/><path d="M12 15h.01"/><path d="M16 15h.01"/></svg>`,
  exercises: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7v10"/><path d="M18 7v10"/><path d="M3 9v6"/><path d="M21 9v6"/><path d="M6 12h12"/></svg>`,
  completed: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.2 2.2 4.8-5.4"/></svg>`,
  weeks: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v3"/><path d="M17 3v3"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M4 10h16"/><path d="M8 14h3"/><path d="M13 14h3"/><path d="M8 18h3"/></svg>`
};

function getCurrentWeekNumber(routine) {
  const plan = routine?.plan || [];
  for (const week of plan) {
    if (!isWeekDone(week)) return week.number;
  }
  return plan[plan.length - 1]?.number || 1;
}

function renderSummary() {
  const routine = getActiveRoutine();
  const totalSessions = getRoutineTotalSessions(routine);
  const doneCount = Object.values(progress).filter(Boolean).length;
  const percent = totalSessions ?Math.round((doneCount / totalSessions) * 100) : 0;
  progressPercent.textContent = `${percent}%`;
  progressRing.style.setProperty("--progress", `${percent}%`);

  const currentWeek = getCurrentWeekNumber(routine);
  const totalWeeks = routine?.plan?.length || 0;

  summaryStrip.innerHTML = `
    <section class="mi-rutina-card">
      <div>
        <span class="kicker">Rutina actual</span>
        <strong>${escapeHtml(routine.name || t("noRoutine"))}</strong>
        <span class="mi-rutina-sub">${t("week")} ${currentWeek} de ${totalWeeks}</span>
      </div>
      <div class="mini-progress" style="--progress:${percent}%">
        <strong>${percent}%</strong>
      </div>
    </section>
  `;
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

function createImagePlaceholder() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="675" viewBox="0 0 900 675">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#1b1b1b"/>
          <stop offset="1" stop-color="#070707"/>
        </linearGradient>
      </defs>
      <rect width="900" height="675" rx="34" fill="url(#bg)"/>
      <text x="50%" y="52%" text-anchor="middle" fill="#F5F5F5" font-family="Arial, sans-serif" font-size="48" font-weight="800">RutFit</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function resolveExerciseImage(src, label) {
  const value = String(src || "").trim();
  if (!value || value.includes("placeholder-")) return createImagePlaceholder(label);
  return value;
}

function hasRealExerciseImage(src) {
  const value = String(src || "").trim();
  return Boolean(value && !value.includes("placeholder-"));
}

function compressImageFile(file, maxSize = 520, quality = 0.68) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error || new Error(t("selectImageFile")));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error(t("selectImageFile")));
      image.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function getFileExtension(file) {
  const nameExtension = file.name.includes(".") ?file.name.split(".").pop().toLowerCase() : "";
  if (nameExtension) return nameExtension.replace(/[^a-z0-9]/g, "") || "jpg";
  const mimeExtension = file.type.split("/")[1] || "jpg";
  return mimeExtension.replace(/[^a-z0-9]/g, "") || "jpg";
}

async function createExerciseImageDataUrl(file) {
  if (!file?.type?.startsWith("image/")) throw new Error(t("selectImageFile"));
  return compressImageFile(file);
}

async function createProfileImageDataUrl(file) {
  if (!file?.type?.startsWith("image/")) throw new Error(t("selectImageFile"));
  return compressImageFile(file, 360, 0.72);
}

function readProfileForm() {
  const payload = {};
  accountPanel?.querySelectorAll("[data-profile-field]").forEach((field) => {
    payload[field.dataset.profileField] = field.value.trim();
  });
  return payload;
}

async function saveCurrentUserProfile(extra = {}) {
  if (!state.currentUser?.uid) return;
  const payload = {
    ...readProfileForm(),
    ...extra,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  await db.collection("users").doc(state.currentUser.uid).set(payload, { merge: true });
  state.currentUserData = { ...(state.currentUserData || {}), ...payload };
  setAuthMessage(t("profileSaved"), "success");
  renderApp();
  accountPanel?.querySelector("#accountStatus")?.classList.add("success");
  const status = accountPanel?.querySelector("#accountStatus");
  if (status) status.textContent = t("profileSaved");
}

function setAdminMessage(message, type = "") {
  adminMessage.textContent = message;
  adminMessage.classList.toggle("error", type === "error");
  adminMessage.classList.toggle("success", type === "success");
}

function getAdminRoutineIds() {
  return Object.keys(routines).filter((id) => {
    if (id === "pending") return false;
    if (state.isTrainer && !state.isAdmin) return routines[id]?.ownerTrainerId === state.currentUser?.uid;
    return true;
  });
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
  state.adminDraft.name = adminRoutineName.value.trim();
  state.adminDraft.title = adminRoutineTitle.value.trim();
  state.adminDraft.kicker = adminRoutineKicker.value.trim();
  state.adminDraft.description = adminRoutineDescription?.value.trim() || "";
  state.adminDraft.tags = adminRoutineTags?.value.trim() || "";
  state.adminDraft.level = state.adminDraft.level || "Intermedio";
  state.adminRoutineId = id;
}

function getRoutineAssignedCount(routineId) {
  return state.adminUsers.filter((user) => user.routineId === routineId).length;
}

function getRoutineCardIcon(index) {
  const icons = ["dumbbell"];
  return icons[index % icons.length];
}

function renderRoutineCatalog(routineIds) {
  if (!routineIds.length) {
    return `
      <section class="routine-catalog-screen">
        <div class="routine-catalog-topbar">
          <h2>Rutinas</h2>
          <button class="trainer-add-student-button" type="button" data-admin-action="new-routine-card" aria-label="Nueva rutina">+</button>
        </div>
        <label class="trainer-student-search routine-search">
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="Buscar rutinas..." autocomplete="off" />
        </label>
        <div class="trainer-student-tabs routine-tabs">
          <button type="button" class="active">Todas</button>
          <button type="button">Activas</button>
          <button type="button">Archivadas</button>
        </div>
        <div class="empty-state">${t("newRoutinePrepared")}</div>
      </section>
    `;
  }
  return `
    <section class="routine-catalog-screen">
      <div class="routine-catalog-topbar">
        <h2>Rutinas</h2>
        <button class="trainer-add-student-button" type="button" data-admin-action="new-routine-card" aria-label="Nueva rutina">+</button>
      </div>
      <label class="trainer-student-search routine-search">
        <span aria-hidden="true">&#8981;</span>
        <input type="search" placeholder="Buscar rutinas..." autocomplete="off" />
      </label>
      <div class="trainer-student-tabs routine-tabs">
        <button type="button" class="active">Todas</button>
        <button type="button">Activas</button>
        <button type="button">Archivadas</button>
      </div>
      <div class="routine-card-list">
      ${routineIds.map((id, index) => {
        const routine = routines[id] || {};
        const totalWeeks = routine.plan?.length || 0;
        const assigned = getRoutineAssignedCount(id);
        const progressValue = [75, 60, 90, 40, 30][index % 5] || (totalWeeks ?Math.min(95, Math.max(30, Math.round(100 / Math.max(1, totalWeeks)))) : 0);
        return `
          <article class="routine-list-card" data-routine-card="${escapeHtml(id)}">
            <span class="routine-list-icon ${getRoutineCardIcon(index)}">${getInlineIcon("dumbbell")}</span>
            <span class="routine-list-main">
              <strong>${escapeHtml(routine.name || id)}</strong>
              <small>${totalWeeks} semanas · ${assigned} alumnos</small>
            </span>
            <span class="routine-mini-ring" style="--progress:${progressValue}%">${progressValue}%</span>
            <button class="routine-menu-button" type="button" data-routine-card-edit="${escapeHtml(id)}" aria-label="Editar rutina">&vellip;</button>
          </article>
        `;
      }).join("")}
      </div>
    </section>
  `;
}

function getRoutineLevel(routine) {
  return routine?.level || "Intermedio";
}

function getRoutineDurationLabel(routine) {
  const weeks = routine?.plan?.length || 0;
  if (routine?.kicker) return routine.kicker;
  return weeks ?`${weeks} semanas` : "8 semanas";
}

function renderRoutineLevelPills(level) {
  return ["Principiante", "Intermedio", "Avanzado"].map((item) => `
    <button class="${item === level ?"active" : ""}" type="button" data-routine-level="${escapeHtml(item)}">${escapeHtml(item)}</button>
  `).join("");
}

function renderAdminRoutineBasicsScreen(draft) {
  const isNew = state.adminEditorMode === "create";
  const title = isNew ? "Nueva rutina" : "Editar rutina";
  return `
    <section class="native-edit-screen routine-basics-screen">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-admin-action="${isNew ?"back-to-routine-list" : "back-to-routine-detail"}" aria-label="Volver">&lsaquo;</button>
        <h2>${title} &#127947;</h2>
        <button class="icon-button ghost-icon" type="button" aria-label="Más opciones">&vellip;</button>
      </div>

      <label class="native-field">
        <span>Nombre de la rutina</span>
        <input class="admin-field" data-routine-field="name" value="${escapeHtml(draft.name || "")}" placeholder="Rutina Fuerza Superior" />
      </label>

      <label class="native-field">
        <span>Objetivo</span>
        <select class="admin-field" data-routine-field="title">
          ${["", "Aumentar fuerza", "Hipertrofia", "Resistencia", "Preparación física", "Bajar de peso"].map((item) => `
            <option value="${escapeHtml(item)}" ${item === (draft.title || "") ?"selected" : ""}>${escapeHtml(item || "Seleccionar objetivo")}</option>
          `).join("")}
        </select>
      </label>

      <label class="native-field">
        <span>Duración estimada</span>
        <select class="admin-field" data-routine-field="kicker">
          ${["", "4 semanas", "6 semanas", "8 semanas", "12 semanas"].map((item) => `
            <option value="${escapeHtml(item)}" ${item === (draft.kicker || "") ?"selected" : ""}>${escapeHtml(item || "Seleccionar duración")}</option>
          `).join("")}
        </select>
      </label>

      <div class="native-field">
        <span>Nivel</span>
        <div class="native-pill-row" data-routine-level-row>${renderRoutineLevelPills(getRoutineLevel(draft))}</div>
      </div>

      <label class="native-field">
        <span>Descripción</span>
        <textarea class="admin-textarea" data-routine-field="description" placeholder="Describe el objetivo de esta rutina...">${escapeHtml(draft.description || "")}</textarea>
      </label>

      <label class="native-field duration-field">
        <span>Etiqueta</span>
        <input class="admin-field" data-routine-field="tags" value="${escapeHtml(draft.tags || "")}" placeholder="Fuerza, Superior, Hipertrofia" />
        <small>&times;</small>
      </label>

      <button class="primary-button native-main-button" type="button" data-admin-action="save-routine">▣ Guardar rutina</button>
    </section>
  `;
}

function renderAdminRoutineWorkspace() {
  if (!state.adminDraft) return "";
  const draft = state.adminDraft;
  const screen = state.adminRoutineScreen || (state.adminEditorMode === "create" ? "basics" : "detail");
  const weekIndex = Number(state.adminWeekEditorIndex);
  const dayIndex = Number(state.adminDayEditorIndex);
  const exerciseKey = state.adminEditingExerciseKey;

  if (screen === "basics") return renderAdminRoutineBasicsScreen(draft);
  if (screen === "weekOverview" && Number.isInteger(weekIndex) && draft.plan?.[weekIndex]) {
    return renderAdminWeekOverviewScreen(draft.plan[weekIndex], weekIndex);
  }
  if (screen === "week" && Number.isInteger(weekIndex) && draft.plan?.[weekIndex]) {
    return renderAdminWeekEditorScreen(draft.plan[weekIndex], weekIndex);
  }
  if (screen === "day" && Number.isInteger(weekIndex) && Number.isInteger(dayIndex) && draft.plan?.[weekIndex]?.days?.[dayIndex]) {
    return renderAdminDayEditorScreen(draft.plan[weekIndex], draft.plan[weekIndex].days[dayIndex], weekIndex, dayIndex);
  }
  if (screen === "exercise" && exerciseKey && draft.exerciseLibrary?.[exerciseKey]) {
    const location = findExerciseLocation(exerciseKey) || { weekIndex, dayIndex };
    return renderAdminExerciseEditorScreen(draft.exerciseLibrary[exerciseKey], exerciseKey, location.weekIndex, location.dayIndex);
  }
  state.adminRoutineScreen = "detail";
  state.adminWeekEditorIndex = null;
  state.adminDayEditorIndex = null;
  state.adminEditingExerciseKey = "";
  return renderAdminRoutineDetailScreen(draft);
}

function getProfileCompletionPercent() {
  const routine = getActiveRoutine() || routines.pending;
  const total = getRoutineTotalSessions(routine);
  const done = Object.values(progress).filter(Boolean).length;
  return total ?Math.round((done / total) * 100) : 0;
}

function renderStudentProfileAccount(userData, displayName, email) {
  const percent = getProfileCompletionPercent();
  const stats = [
    ["12", "Días de racha"],
    [String(Object.values(progress).filter(Boolean).length), "Entrenamientos"],
    [`${percent}%`, "Cumplimiento"]
  ];
  return `
    <section class="student-account-screen profile-screen">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-account-back aria-label="Volver">&lsaquo;</button>
        <h2>Perfil del Alumno</h2>
        <button class="icon-button ghost-icon" type="button" data-account-section="settings" aria-label="Ajustes">${getInlineIcon("settings")}</button>
      </div>

      <article class="student-profile-hero">
        <div class="profile-photo-wrap">
          ${renderUserAvatar(userData, "student-profile-photo")}
          <label class="profile-camera" aria-label="${t("changePhoto")}">
            ${getInlineIcon("camera")}
            <input type="file" accept="image/*" data-profile-photo hidden />
          </label>
        </div>
        <strong>${escapeHtml(displayName || t("user"))}</strong>
        <span>${escapeHtml(email || t("noEmail"))}</span>
      </article>

      <div class="profile-metrics">
        ${stats.map(([value, label]) => `
          <article>
            <strong>${escapeHtml(value)}</strong>
            <span>${escapeHtml(label)}</span>
          </article>
        `).join("")}
      </div>

      <section class="settings-list account-menu">
        <button type="button" data-account-section="personal"><span>${getInlineIcon("user")} Información personal</span><strong>></strong></button>
        <button type="button" data-account-section="goals"><span>${getInlineIcon("heart")} Objetivos</span><strong>></strong></button>
        <button type="button" data-account-section="settings"><span>${getInlineIcon("settings")} Preferencias</span><strong>></strong></button>
        <button type="button" data-account-action="help"><span>${getInlineIcon("info")} Centro de ayuda</span><strong>></strong></button>
      </section>

      <section class="profile-form compact-profile-form ${["personal", "goals"].includes(state.accountSubView) ?"" : "is-hidden"}">
        <label class="search-box">
          <span>${t("name")}</span>
          <input type="text" data-profile-field="displayName" value="${escapeHtml(displayName || "")}" autocomplete="name" />
        </label>
        <div class="profile-grid">
          <label class="search-box">
            <span>${t("weight")}</span>
            <input type="number" inputmode="decimal" data-profile-field="weight" value="${escapeHtml(userData.weight || "")}" placeholder="78" />
          </label>
          <label class="search-box">
            <span>${t("height")}</span>
            <input type="number" inputmode="decimal" step="0.01" data-profile-field="height" value="${escapeHtml(userData.height || "")}" placeholder="1.75" />
          </label>
          <label class="search-box">
            <span>${t("age")}</span>
            <input type="number" inputmode="numeric" data-profile-field="age" value="${escapeHtml(userData.age || "")}" placeholder="24" />
          </label>
        </div>
        <label class="search-box">
          <span>${t("goal")}</span>
          <textarea data-profile-field="goal" rows="2" placeholder="${t("goal")}">${escapeHtml(userData.goal || "")}</textarea>
        </label>
        <button class="secondary-button" type="button" data-profile-save>${t("saveProfile")}</button>
      </section>

      <p class="account-status" id="accountStatus" aria-live="polite"></p>
      <button class="account-logout-row" type="button" data-account-logout>
        <span>${getInlineIcon("logout")} ${t("logout")}</span><strong>></strong>
      </button>
    </section>
  `;
}

function renderStudentSettingsAccount(userData) {
  const preferences = userData.preferences || {};
  const preference = (key, fallback = true) => preferences[key] !== undefined ?preferences[key] : fallback;
  return `
    <section class="student-account-screen settings-screen">
      <div class="screen-topbar">
        <button class="icon-button ghost-icon" type="button" data-account-section="profile" aria-label="Volver">⬹</button>
        <h2>Ajustes</h2>
        <span></span>
      </div>

      <div class="settings-group-title">Preferencias</div>
      <section class="settings-list account-menu">
        <button type="button" data-settings-action="units"><span>Unidades</span><em>Métrico (kg, cm)</em><strong>></strong></button>
        ${renderPreferenceToggle("reminders", "Recordatorios", preference("reminders", true))}
        ${renderPreferenceToggle("notifications", "Notificaciones", preference("notifications", true))}
        ${renderPreferenceToggle("sounds", "Sonidos", preference("sounds", true))}
      </section>

      <div class="settings-group-title">Cuenta</div>
      <section class="settings-list account-menu">
        <button type="button" data-settings-action="password"><span>Cambiar contraseña</span><strong>></strong></button>
        <button type="button" data-settings-action="privacy"><span>Privacidad</span><strong>></strong></button>
        <button class="delete-account-row" type="button" data-settings-action="delete"><span>Eliminar cuenta</span></button>
      </section>

      <p class="account-status" id="accountStatus" aria-live="polite"></p>
      <p class="app-version">Versión 1.0.0</p>
    </section>
  `;
}

function renderPreferenceToggle(key, label, checked) {
  return `
    <label class="settings-toggle-row">
      <span>${escapeHtml(label)}</span>
      <em>${checked ?"Activado" : "Desactivado"}</em>
      <input type="checkbox" data-preference-toggle="${escapeHtml(key)}" ${checked ?"checked" : ""} />
      <i aria-hidden="true"></i>
    </label>
  `;
}

function getInlineIcon(name) {
  const icons = {
    calendar: '<svg viewBox="0 0 24 24"><path d="M7 2h2v3h6V2h2v3h2.2A2.8 2.8 0 0 1 22 7.8v10.4a2.8 2.8 0 0 1-2.8 2.8H4.8A2.8 2.8 0 0 1 2 18.2V7.8A2.8 2.8 0 0 1 4.8 5H7V2Zm12.5 8.5h-15v7.7c0 .7.6 1.3 1.3 1.3h12.4c.7 0 1.3-.6 1.3-1.3v-7.7ZM5.8 6.5c-.7 0-1.3.6-1.3 1.3V9h15V7.8c0-.7-.6-1.3-1.3-1.3H5.8Z"/></svg>',
    dumbbell: '<svg viewBox="0 0 24 24"><path d="M3 9h2v6H3V9Zm3-2h3v10H6V7Zm9 0h3v10h-3V7Zm4 2h2v6h-2V9ZM9.5 11h5v2h-5v-2Z"/></svg>',
    settings: '<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm8.5 3.5-2.1-.7a7 7 0 0 0-.5-1.2l1-2-2.8-2.8-2 .9a7 7 0 0 0-1.2-.5L12 3.5H8l-.7 2.2a7 7 0 0 0-1.2.5l-2-.9-2.8 2.8 1 2a7 7 0 0 0-.5 1.2L-.5 12v4l2.3.7c.1.4.3.8.5 1.2l-1 2 2.8 2.8 2-.9c.4.2.8.4 1.2.5L8 24.5h4l.7-2.2c.4-.1.8-.3 1.2-.5l2 .9 2.8-2.8-1-2c.2-.4.4-.8.5-1.2l2.3-.7v-4Z"/></svg>',
    camera: '<svg viewBox="0 0 24 24"><path d="M8 6 9.5 4h5L16 6h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3Zm4 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>',
    user: '<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-9 9a9 9 0 0 1 18 0v1H3v-1Z"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-8-4.8-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.2-8 11-8 11Z"/></svg>',
    info: '<svg viewBox="0 0 24 24"><path d="M11 10h2v8h-2v-8Zm0-4h2v2h-2V6Zm1 16a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/></svg>',
    logout: '<svg viewBox="0 0 24 24"><path d="M10 4H4v16h6v-2H6V6h4V4Zm5.5 3.5L14 9l2 2H9v2h7l-2 2 1.5 1.5L20 12l-4.5-4.5Z"/></svg>',
    filter: '<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4V6Zm3 5h10v2H7v-2Zm3 5h4v2h-4v-2Z"/></svg>'
  };
  return icons[name] || "";
}

function renderAdminPanel() {
  const panelTitle = adminPanel.querySelector("[data-i18n='routinePanel']");
  const panelHelp = adminPanel.querySelector("[data-i18n='routinePanelHelp']");
  const usersTitle = adminPanel.querySelector("[data-i18n='assignRoutines']");
  const showUsers = state.activeView === "students";
  const showRoutines = state.activeView === "routines";
  const isEditingRoutine = Boolean(state.adminDraft && state.adminEditorMode);
  const isRoutineDetail = showRoutines
    && isEditingRoutine
    && state.adminEditorMode === "edit"
    && !state.adminRoutineBasicsOpen
    && state.adminWeekEditorIndex === null;
  const isNativeSubscreen = showRoutines && isEditingRoutine && state.adminWeekEditorIndex !== null;
  document.body.classList.toggle("native-admin-subscreen-active", isNativeSubscreen);
  bottomNav?.classList.toggle("is-hidden", isNativeSubscreen);
  adminPanel.classList.toggle("students-view", showUsers);
  adminPanel.classList.toggle("routines-view", showRoutines);
  adminPanel.classList.toggle("editing-routine", isEditingRoutine);
  adminPanel.classList.toggle("routine-detail-view", isRoutineDetail);
  adminPanel.classList.toggle("routine-basics-view", isEditingRoutine && (state.adminEditorMode === "create" || state.adminRoutineBasicsOpen));
  adminPanel.classList.toggle("creating-routine", isEditingRoutine && state.adminEditorMode === "create");
  adminPanel.classList.toggle("editing-existing-routine", isEditingRoutine && state.adminEditorMode === "edit");
  adminPanel.classList.toggle("routine-workspace-view", showRoutines && isEditingRoutine);
  adminPanel.classList.toggle("assigning-routine", showUsers && state.adminAssignmentMode);
  adminPanel.classList.toggle("native-subscreen", isNativeSubscreen);
  if (state.isTrainer && !state.isAdmin) {
    if (panelTitle) panelTitle.textContent = showRoutines ?t("routinePanel") : t("studentPanel");
    if (panelHelp) panelHelp.textContent = showRoutines ?t("routinePanelHelp") : t("studentPanelHelp");
    if (usersTitle) usersTitle.textContent = t("acceptedStudents");
  } else {
    if (panelTitle) panelTitle.textContent = t("routinePanel");
    if (panelHelp) panelHelp.textContent = t("routinePanelHelp");
    if (usersTitle) usersTitle.textContent = t("assignRoutines");
  }
  adminSeedDario?.classList.toggle("is-hidden", state.isTrainer && !state.isAdmin);
  adminNewRoutine?.classList.toggle("is-hidden", !showRoutines || isEditingRoutine);
  adminEditRoutine?.classList.toggle("is-hidden", !showRoutines || isEditingRoutine);
  adminUsersCard?.classList.toggle("is-hidden", !showUsers);
  adminRoutineEditor?.classList.toggle("is-hidden", !showRoutines);
  if (showUsers) renderAdminUsers();

  if (showRoutines && !isEditingRoutine) {
    const routineIds = getAdminRoutineIds();
    adminRoutineEditor.classList.remove("is-hidden");
    adminRoutineSelect.innerHTML = routineIds.length
      ?routineIds.map((id) => `<option value="${escapeHtml(id)}">${escapeHtml(routines[id].name || id)}</option>`).join("")
      : `<option value="">${t("newRoutineOption")}</option>`;
    adminRoutineId.value = "";
    adminRoutineName.value = "";
    adminRoutineTitle.value = "";
    adminRoutineKicker.value = "";
    if (adminRoutineDescription) adminRoutineDescription.value = "";
    if (adminRoutineTags) adminRoutineTags.value = "";
    adminWeeks.innerHTML = renderRoutineCatalog(routineIds);
    return;
  }

  if (!showRoutines || !state.adminDraft || !state.adminEditorMode) {
    adminRoutineEditor.classList.add("is-hidden");
    adminWeeks.innerHTML = "";
    adminRoutineSelect.innerHTML = "";
    return;
  }

  adminRoutineEditor.classList.remove("is-hidden");
  adminEditorTitle.textContent = "";
  adminWeeks.innerHTML = renderAdminRoutineWorkspace();
  return;

  adminRoutineEditor.classList.remove("is-hidden");
  const draft = state.adminDraft;
  const selectedUser = getAdminUser(state.pendingAssignUserId || state.selectedAdminUserId);
  const selectedUserName = selectedUser?.displayName || getDisplayNameFromEmail(selectedUser?.email || "");
  adminEditorTitle.textContent = state.adminEditorMode === "create"
    ?"Nueva rutina"
    : t("editingRoutine", { name: draft.name || t("newRoutineOption") });

  const routineIds = getAdminRoutineIds();
  adminRoutineSelect.innerHTML = [
    !routineIds.includes(draft.id) ?`<option value="${escapeHtml(draft.id)}" selected>${t("newRoutineOption")}</option>` : "",
    ...routineIds.map((id) => `<option value="${escapeHtml(id)}" ${id === draft.id ?"selected" : ""}>${escapeHtml(routines[id].name || id)}</option>`)
  ].join("");
  adminRoutineId.value = draft.id || "";
  adminRoutineName.value = draft.name || "";
  adminRoutineTitle.value = draft.title || "";
  adminRoutineKicker.value = draft.kicker || "";
  if (adminRoutineDescription) adminRoutineDescription.value = draft.description || "";
  if (adminRoutineTags) adminRoutineTags.value = draft.tags || "";
  adminRoutineLevel?.querySelectorAll("[data-routine-level]").forEach((button) => {
    button.classList.toggle("active", button.dataset.routineLevel === (draft.level || "Intermedio"));
  });

  const focusedWeekIndex = Number(state.adminWeekEditorIndex);
  const focusedDayIndex = Number(state.adminDayEditorIndex);
  if (Number.isInteger(focusedWeekIndex) && draft.plan[focusedWeekIndex]) {
    const focusedWeek = draft.plan[focusedWeekIndex];
    const exerciseLocation = findExerciseLocation(state.adminEditingExerciseKey);
    if (
      state.adminEditingExerciseKey
      && exerciseLocation
      && exerciseLocation.weekIndex === focusedWeekIndex
      && exerciseLocation.dayIndex === focusedDayIndex
      && draft.exerciseLibrary[state.adminEditingExerciseKey]
    ) {
      adminWeeks.innerHTML = renderAdminExerciseEditorScreen(
        draft.exerciseLibrary[state.adminEditingExerciseKey],
        state.adminEditingExerciseKey,
        focusedWeekIndex,
        focusedDayIndex
      );
      return;
    }
    if (Number.isInteger(focusedDayIndex) && focusedWeek.days?.[focusedDayIndex]) {
      adminWeeks.innerHTML = renderAdminDayEditorScreen(focusedWeek, focusedWeek.days[focusedDayIndex], focusedWeekIndex, focusedDayIndex);
      return;
    }
    adminWeeks.innerHTML = renderAdminWeekEditorScreen(focusedWeek, focusedWeekIndex);
    return;
  }

  if (state.adminEditorMode === "edit" && !state.adminRoutineBasicsOpen) {
    adminEditorTitle.textContent = draft.name || "Rutina";
    adminWeeks.innerHTML = renderAdminRoutineDetailScreen(draft);
    return;
  }

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
              const thumb = images[0]
                ?`<img src="${escapeHtml(resolveExerciseImage(images[0], exercise.name || t("newExercise")))}" alt="${escapeHtml(exercise.name || t("newExercise"))}" />`
                : "";
              const startPreview = images[0]
                ?`<img class="admin-image-preview" src="${escapeHtml(resolveExerciseImage(images[0], t("startImage")))}" alt="${t("startImage")}" />`
                : `<div class="admin-image-empty">${t("noStartImage")}</div>`;
              const endPreview = images[1]
                ?`<img class="admin-image-preview" src="${escapeHtml(resolveExerciseImage(images[1], t("endImage")))}" alt="${t("endImage")}" />`
                : `<div class="admin-image-empty">${t("noEndImage")}</div>`;
              return `
                <div class="admin-exercise ${isEditingExercise ?"is-editing" : ""}" data-week-index="${weekIndex}" data-day-index="${dayIndex}" data-exercise-key="${escapeHtml(exerciseKey)}">
                  <div class="admin-exercise-summary">
                    <span class="admin-exercise-thumb">${thumb}</span>
                    <div>
                      <strong>${escapeHtml(exercise.name || t("newExercise"))}</strong>
                      <small>${escapeHtml([
                        exercise.baseSets && exercise.baseReps ?`${exercise.baseSets} series x ${exercise.baseReps} reps` : "",
                        exercise.rest ?`Descanso: ${exercise.rest}` : ""
                      ].filter(Boolean).join(" · "))}</small>
                    </div>
                    <button class="exercise-kebab" type="button" data-admin-action="edit-exercise" aria-label="${t("editExercise")}">&vellip;</button>
                  </div>
                  ${isEditingExercise ?`
                    <div class="admin-exercise-form">
                      <div class="exercise-editor-hero">
                        ${startPreview}
                      </div>
                      <div class="admin-exercise-grid">
                        <label class="search-box"><span>${t("name")}</span><input class="admin-field" data-exercise-field="name" value="${escapeHtml(exercise.name || "")}" /></label>
                        <label class="search-box exercise-field-muscle"><span>Grupo muscular</span><input class="admin-field" data-exercise-field="objective" value="${escapeHtml(exercise.objective || "")}" placeholder="Pecho" /></label>
                        <label class="search-box exercise-field-equipment"><span>Equipo</span><input class="admin-field" data-exercise-field="equipment" value="${escapeHtml(exercise.equipment || "")}" placeholder="Barra" /></label>
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
                      <button class="primary-button exercise-save-button" type="button" data-admin-action="save-exercise">▣ Guardar cambios</button>
                    </div>
                  ` : ""}
                </div>
              `;
            })
            .join("");

          const isDayCollapsed = day.collapsed === true;

return `
  <div class="admin-day ${isDayCollapsed ?"collapsed" : ""}" data-week-index="${weekIndex}" data-day-index="${dayIndex}">
    <div class="admin-card-title">
      <div>
        <h4>${escapeHtml(day.title || t("dayNumber", { number: dayIndex + 1 }))}</h4>
        <small>${t("savedExercisesCount", { count: (day.exercises || []).length })}</small>
      </div>

      <div class="admin-row-actions">
        ${isDayCollapsed
          ?`<button class="secondary-button" type="button" data-admin-action="edit-day">${t("editDay")}</button>`
          : `<button class="primary-button" type="button" data-admin-action="save-day">${t("saveDay")}</button>`
        }
        <button class="danger-button" type="button" data-admin-action="delete-day">${t("deleteDay")}</button>
      </div>
    </div>

    ${isDayCollapsed ?"" : `
      <div class="admin-day-stats">
        <article><span>Ejercicios</span><strong>${(day.exercises || []).length}</strong></article>
        <article><span>Series totales</span><strong>${(day.exercises || []).reduce((total, key) => total + (Number(String(draft.exerciseLibrary[key]?.baseSets || "").match(/\d+/)?.[0]) || 0), 0)}</strong></article>
        <article><span>Duración</span><strong>45 min</strong></article>
      </div>
      <div class="admin-exercise-grid">
        <label class="search-box"><span>${t("dayTitle")}</span><input class="admin-field" data-day-field="title" value="${escapeHtml(day.title || "")}" /></label>
        <label class="search-box"><span>${t("focus")}</span><input class="admin-field" data-day-field="focus" value="${escapeHtml(day.focus || "")}" /></label>
      </div>

      <div class="admin-row-actions">
        <button class="secondary-button" type="button" data-admin-action="add-exercise">${t("createExercise")}</button>
      </div>

      ${exercises ?`<div class="admin-exercise-list"><small>${t("savedExercises")}</small>${exercises}</div>` : `<div class="empty-state">${t("emptyDay")}</div>`}
    `}
  </div>
          `;
        })
        .join("");
        const isWeekCollapsed = week.collapsed === true;
        const totalExercises = (week.days || []).reduce((total, day) => total + (day.exercises || []).length, 0);
      return `
        <article class="admin-editor-card ${isWeekCollapsed ?"week-overview-mode" : "week-edit-mode"}" data-week-index="${weekIndex}" ${isWeekCollapsed ?'data-admin-open-week="true"' : ""}>
          <div class="admin-card-title">
            <div>
              <small>${t("week")}</small>
              <h3>${escapeHtml(week.number || weekIndex + 1)}: ${escapeHtml(phase.name || t("noPhase"))}</h3>
            </div>
            <div class="admin-row-actions">
  ${isWeekCollapsed
  ?`<button class="secondary-button" type="button" data-admin-action="edit-week">${t("editWeek")}</button>`
  : `<button class="primary-button" type="button" data-admin-action="save-week">${t("saveWeek")}</button>`
}
  <button class="danger-button" type="button" data-admin-action="delete-week">${t("deleteWeek")}</button>
</div>
          ${isWeekCollapsed ?`
  <section class="week-overview-panel">
    <div class="week-progress-card">
      <span>Progreso de la semana</span>
      <strong>100%</strong>
      <i></i>
    </div>
    <div class="admin-day-stats week-stats">
      <article><span>Días</span><strong>${(week.days || []).length}</strong></article>
      <article><span>Ejercicios</span><strong>${totalExercises}</strong></article>
      <article><span>Duración</span><strong>3h 20m</strong></article>
    </div>
    <div class="week-days-title">
      <span>Días de entrenamiento</span>
      <button class="primary-button" type="button" data-admin-action="add-day">+ Nuevo día</button>
    </div>
    <div class="week-overview-days">
      ${(week.days || []).map((day, index) => `
        <button class="week-overview-day" type="button" data-admin-action="edit-day" data-week-index="${weekIndex}" data-day-index="${index}">
          <span><strong>${escapeHtml(day.title || `Día ${index + 1}`)}</strong><small>${(day.exercises || []).length} ejercicios</small></span>
          <b>&check;</b>
        </button>
      `).join("") || `<div class="empty-state">${t("emptyWeek")}</div>`}
    </div>
  </section>
` : `
  <section class="week-edit-panel">
  <div class="admin-exercise-grid">
    <label class="search-box"><span>${t("number")}</span><input class="admin-field" data-week-field="number" value="${escapeHtml(week.number || "")}" /></label>
    <label class="search-box"><span>${t("phase")}</span><input class="admin-field" data-week-field="phase.name" value="${escapeHtml(phase.name || "")}" /></label>
    <label class="search-box"><span>${t("badge")}</span><input class="admin-field" data-week-field="phase.badge" value="${escapeHtml(phase.badge || "")}" /></label>
    <label class="search-box"><span>${t("instructions")}</span><input class="admin-field" data-week-field="phase.modifier" value="${escapeHtml(phase.modifier || "")}" /></label>
  </div>
  <div class="week-training-days-banner"><strong>Días de entrenamiento</strong><span>${(week.days || []).length} días</span></div>
  <div class="admin-row-actions">
    <button class="secondary-button" type="button" data-admin-action="add-day">+ Crear día</button>
  </div>
  ${days || `<div class="empty-state">${t("emptyWeek")}</div>`}
  </section>
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
  if (!state.adminDraft || !input) return;
  const weekIndex = Number(input.closest("[data-week-index]")?.dataset.weekIndex);
  const dayIndex = Number(input.closest("[data-day-index]")?.dataset.dayIndex);
  const exerciseKey = input.closest("[data-exercise-key]")?.dataset.exerciseKey;

  if (input.dataset.routineField) {
    const field = input.dataset.routineField;
    state.adminDraft[field] = input.value.trim();
    return;
  }

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

function syncAdminVisibleFields(container = adminWeeks) {
  if (!state.adminDraft || !container) return;
  container.querySelectorAll(".admin-field, .admin-textarea").forEach((input) => {
    if (input.matches("[data-image-upload]")) return;
    updateAdminDraftFromInput(input);
  });
}

function getAdminDayLocation(button) {
  const domWeekIndex = Number(button.closest("[data-week-index]")?.dataset.weekIndex);
  const domDayIndex = Number(button.closest("[data-day-index]")?.dataset.dayIndex);
  const weekIndex = Number.isInteger(domWeekIndex) ? domWeekIndex : Number(state.adminWeekEditorIndex);
  const dayIndex = Number.isInteger(domDayIndex) ? domDayIndex : Number(state.adminDayEditorIndex);
  const day = state.adminDraft?.plan?.[weekIndex]?.days?.[dayIndex];
  if (!day) return null;
  return { weekIndex, dayIndex, day };
}

function getAdminWeekLocation(button) {
  const domWeekIndex = Number(button.closest("[data-week-index]")?.dataset.weekIndex);
  const weekIndex = Number.isInteger(domWeekIndex) ? domWeekIndex : Number(state.adminWeekEditorIndex);
  const week = state.adminDraft?.plan?.[weekIndex];
  if (!week) return null;
  return { weekIndex, week };
}

async function handleRoutineWorkspaceAction(button) {
  const action = button.dataset.adminAction;
  const weekIndexFromDom = Number(button.closest("[data-week-index]")?.dataset.weekIndex ?? button.dataset.weekIndex);
  const dayIndexFromDom = Number(button.closest("[data-day-index]")?.dataset.dayIndex ?? button.dataset.dayIndex);
  const exerciseKeyFromDom = button.closest("[data-exercise-key]")?.dataset.exerciseKey || button.dataset.exerciseKey || "";

  if (!state.adminDraft && action !== "back-to-routine-list") return false;

  if (action === "back-to-routine-list") {
    state.adminEditorMode = "";
    state.adminRoutineScreen = "list";
    state.adminRoutineBasicsOpen = false;
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminDraft = null;
    setAdminMessage("");
    renderAdminPanel();
    return true;
  }

  if (action === "back-to-routine-detail" || action === "back-to-routine-weeks") {
    state.adminRoutineScreen = "detail";
    state.adminRoutineBasicsOpen = false;
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    setAdminMessage("");
    renderAdminPanel();
    return true;
  }

  if (action === "edit-routine-basics") {
    state.adminRoutineScreen = "basics";
    state.adminRoutineBasicsOpen = true;
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    setAdminMessage("");
    renderAdminPanel();
    return true;
  }

  if (action === "save-routine") {
    syncAdminVisibleFields();
    if (!state.adminDraft.name) state.adminDraft.name = `Rutina ${getNextRoutineNumber()}`;
    if (!state.adminDraft.id) state.adminDraft.id = createRoutineDraftId(getNextRoutineNumber());
    button.disabled = true;
    try {
      await saveAdminDraftAndAssignment({ skipReadBasics: true });
      state.adminEditorMode = "edit";
      state.adminRoutineScreen = "detail";
      state.adminRoutineBasicsOpen = false;
      state.adminWeekEditorIndex = null;
      state.adminDayEditorIndex = null;
      state.adminEditingExerciseKey = "";
      setAdminMessage("Rutina guardada.", "success");
      renderAdminPanel();
    } catch (error) {
      button.disabled = false;
      setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    }
    return true;
  }

  if (action === "delete-routine") {
    const confirmed = await showConfirmDialog(`¿Eliminar la rutina "${state.adminDraft.name || state.adminDraft.id}"?`);
    if (!confirmed) return true;
    button.disabled = true;
    try {
      await deleteRoutineFromFirestore(state.adminDraft.id);
      state.adminEditorMode = "";
      state.adminRoutineScreen = "list";
      state.adminRoutineBasicsOpen = false;
      state.adminDraft = null;
      setAdminMessage("Rutina eliminada.", "success");
      renderAdminPanel();
    } catch (error) {
      button.disabled = false;
      setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    }
    return true;
  }

  if (action === "add-week") {
    syncAdminVisibleFields();
    const nextIndex = state.adminDraft.plan.length;
    state.adminDraft.plan.push({
      number: nextIndex + 1,
      phase: { name: "", badge: "", modifier: "" },
      days: []
    });
    state.adminWeekEditorIndex = nextIndex;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    state.adminRoutineScreen = "week";
    renderAdminPanel();
    return true;
  }

  if (action === "open-week") {
    if (!Number.isInteger(weekIndexFromDom) || !state.adminDraft.plan?.[weekIndexFromDom]) return true;
    syncAdminVisibleFields();
    state.adminWeekEditorIndex = weekIndexFromDom;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    state.adminRoutineScreen = "weekOverview";
    renderAdminPanel();
    return true;
  }

  if (action === "edit-week") {
    const weekIndex = Number.isInteger(weekIndexFromDom) ?weekIndexFromDom : Number(state.adminWeekEditorIndex);
    if (!Number.isInteger(weekIndex) || !state.adminDraft.plan?.[weekIndex]) return true;
    syncAdminVisibleFields();
    state.adminWeekEditorIndex = weekIndex;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    state.adminRoutineScreen = "week";
    renderAdminPanel();
    return true;
  }

  if (action === "save-week") {
    const location = getAdminWeekLocation(button);
    if (!location) {
      setAdminMessage("No se encontró la semana para guardar.", "error");
      return true;
    }
    syncAdminVisibleFields();
    button.disabled = true;
    try {
      await saveAdminDraftAndAssignment({ skipReadBasics: true });
      state.adminRoutineScreen = "detail";
      state.adminWeekEditorIndex = null;
      state.adminDayEditorIndex = null;
      state.adminEditingExerciseKey = "";
      setAdminMessage("Semana guardada.", "success");
      renderAdminPanel();
    } catch (error) {
      button.disabled = false;
      setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    }
    return true;
  }

  if (action === "delete-week") {
    const location = getAdminWeekLocation(button);
    if (!location) return true;
    state.adminDraft.plan.splice(location.weekIndex, 1);
    state.adminDraft.plan.forEach((week, index) => {
      if (!week.number) week.number = index + 1;
    });
    state.adminRoutineScreen = "detail";
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    await saveAdminDraftAndAssignment({ skipReadBasics: true });
    setAdminMessage("Semana eliminada.", "success");
    renderAdminPanel();
    return true;
  }

  if (action === "back-to-week-edit") {
    state.adminRoutineScreen = "weekOverview";
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    setAdminMessage("");
    renderAdminPanel();
    return true;
  }

  if (action === "add-day") {
    const location = getAdminWeekLocation(button);
    if (!location) {
      setAdminMessage("No se encontró la semana para crear el día.", "error");
      return true;
    }
    syncAdminVisibleFields();
    location.week.days = location.week.days || [];
    const nextDayIndex = location.week.days.length;
    location.week.days.push({
      title: "",
      focus: "Hipertrofia",
      duration: "45",
      notes: "",
      exercises: []
    });
    state.adminWeekEditorIndex = location.weekIndex;
    state.adminDayEditorIndex = nextDayIndex;
    state.adminEditingExerciseKey = "";
    state.adminRoutineScreen = "day";
    renderAdminPanel();
    return true;
  }

  if (action === "edit-day" || action === "open-day") {
    const weekIndex = Number.isInteger(weekIndexFromDom) ?weekIndexFromDom : Number(state.adminWeekEditorIndex);
    const dayIndex = Number.isInteger(dayIndexFromDom) ?dayIndexFromDom : Number(state.adminDayEditorIndex);
    if (!state.adminDraft.plan?.[weekIndex]?.days?.[dayIndex]) return true;
    syncAdminVisibleFields();
    state.adminWeekEditorIndex = weekIndex;
    state.adminDayEditorIndex = dayIndex;
    state.adminEditingExerciseKey = "";
    state.adminRoutineScreen = "day";
    renderAdminPanel();
    return true;
  }

  if (action === "save-day") {
    const location = getAdminDayLocation(button);
    if (!location) {
      setAdminMessage("No se encontró el día para guardar.", "error");
      return true;
    }
    syncAdminVisibleFields();
    button.disabled = true;
    try {
      await saveAdminDraftAndAssignment({ skipReadBasics: true });
      state.adminRoutineScreen = "weekOverview";
      state.adminWeekEditorIndex = location.weekIndex;
      state.adminDayEditorIndex = null;
      state.adminEditingExerciseKey = "";
      setAdminMessage("Día guardado.", "success");
      renderAdminPanel();
    } catch (error) {
      button.disabled = false;
      setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    }
    return true;
  }

  if (action === "delete-day") {
    const location = getAdminDayLocation(button);
    if (!location) return true;
    state.adminDraft.plan[location.weekIndex].days.splice(location.dayIndex, 1);
    await saveAdminDraftAndAssignment({ skipReadBasics: true });
    state.adminRoutineScreen = "weekOverview";
    state.adminWeekEditorIndex = location.weekIndex;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    setAdminMessage("Día eliminado.", "success");
    renderAdminPanel();
    return true;
  }

  if (action === "back-to-day-edit") {
    state.adminRoutineScreen = "day";
    state.adminEditingExerciseKey = "";
    renderAdminPanel();
    return true;
  }

  if (action === "add-exercise") {
    const location = getAdminDayLocation(button);
    if (!location) {
      setAdminMessage("No se encontró el día para crear el ejercicio.", "error");
      return true;
    }
    syncAdminVisibleFields();
    const key = `ejercicio-${Date.now()}`;
    state.adminDraft.exerciseLibrary[key] = {
      name: "",
      objective: "",
      equipment: "",
      goal: "",
      baseSets: "",
      baseReps: "",
      rest: "",
      technique: "",
      mistakes: [],
      images: ["", ""]
    };
    location.day.exercises = location.day.exercises || [];
    location.day.exercises.push(key);
    state.adminWeekEditorIndex = location.weekIndex;
    state.adminDayEditorIndex = location.dayIndex;
    state.adminEditingExerciseKey = key;
    state.adminRoutineScreen = "exercise";
    renderAdminPanel();
    return true;
  }

  if (action === "edit-exercise") {
    const weekIndex = Number.isInteger(weekIndexFromDom) ?weekIndexFromDom : Number(state.adminWeekEditorIndex);
    const dayIndex = Number.isInteger(dayIndexFromDom) ?dayIndexFromDom : Number(state.adminDayEditorIndex);
    const exerciseKey = exerciseKeyFromDom;
    if (!exerciseKey || !state.adminDraft.exerciseLibrary?.[exerciseKey]) return true;
    syncAdminVisibleFields();
    state.adminWeekEditorIndex = weekIndex;
    state.adminDayEditorIndex = dayIndex;
    state.adminEditingExerciseKey = exerciseKey;
    state.adminRoutineScreen = "exercise";
    renderAdminPanel();
    return true;
  }

  if (action === "save-exercise") {
    if (!state.adminEditingExerciseKey || !state.adminDraft.exerciseLibrary?.[state.adminEditingExerciseKey]) {
      setAdminMessage("No se encontró el ejercicio para guardar.", "error");
      return true;
    }
    syncAdminVisibleFields();
    button.disabled = true;
    try {
      await saveAdminDraftAndAssignment({ skipReadBasics: true });
      state.adminRoutineScreen = "day";
      state.adminEditingExerciseKey = "";
      setAdminMessage("Ejercicio guardado.", "success");
      renderAdminPanel();
    } catch (error) {
      button.disabled = false;
      setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    }
    return true;
  }

  if (action === "delete-exercise") {
    const exerciseKey = exerciseKeyFromDom || state.adminEditingExerciseKey;
    const location = findExerciseLocation(exerciseKey);
    if (!exerciseKey || !location) return true;
    const exercises = state.adminDraft.plan[location.weekIndex].days[location.dayIndex].exercises || [];
    state.adminDraft.plan[location.weekIndex].days[location.dayIndex].exercises = exercises.filter((key) => key !== exerciseKey);
    delete state.adminDraft.exerciseLibrary[exerciseKey];
    await saveAdminDraftAndAssignment({ skipReadBasics: true });
    state.adminRoutineScreen = "day";
    state.adminWeekEditorIndex = location.weekIndex;
    state.adminDayEditorIndex = location.dayIndex;
    state.adminEditingExerciseKey = "";
    setAdminMessage("Ejercicio eliminado.", "success");
    renderAdminPanel();
    return true;
  }

  return false;
}

async function handleAdminAction(button) {
  const weekIndex = Number(button.closest("[data-week-index]")?.dataset.weekIndex);
  const dayIndex = Number(button.closest("[data-day-index]")?.dataset.dayIndex);
  const exerciseKey = button.closest("[data-exercise-key]")?.dataset.exerciseKey;
  const action = button.dataset.adminAction;

  if (action === "back-to-routine-weeks") {
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    renderApp();
    return;
  }

  if (action === "back-to-routine-list") {
    state.adminEditorMode = "";
    state.adminRoutineBasicsOpen = false;
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminDraft = null;
    setAdminMessage("");
    renderAdminPanel();
    return;
  }

  if (action === "edit-routine-basics") {
    state.adminRoutineBasicsOpen = true;
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    setAdminMessage("");
    renderAdminPanel();
    return;
  }

  if (action === "back-to-week-edit") {
    const location = getAdminDayLocation(button);
    if (location) {
      state.adminWeekEditorIndex = location.weekIndex;
      state.adminDayEditorIndex = null;
      state.adminEditingExerciseKey = "";
      setAdminMessage("");
      renderApp();
    } else {
      state.adminDayEditorIndex = null;
      state.adminEditingExerciseKey = "";
      setAdminMessage("");
      renderApp();
    }
    return;
  }

  if (action === "back-to-day-edit") {
    state.adminEditingExerciseKey = "";
    renderAdminPanel();
    return;
  }

  if (action === "add-week") {
    syncAdminVisibleFields();
    const nextIndex = state.adminDraft.plan.length;
    state.adminDraft.plan.push({
      number: "",
      phase: { name: "", badge: "", modifier: "" },
      days: []
    });
    state.adminWeekEditorIndex = nextIndex;
    state.adminDayEditorIndex = null;
    renderAdminPanel();
    return;
  }

  if (action === "edit-exercise") {
    state.adminEditingExerciseKey = exerciseKey || "";
    if (Number.isInteger(weekIndex)) state.adminWeekEditorIndex = weekIndex;
    if (Number.isInteger(dayIndex)) state.adminDayEditorIndex = dayIndex;
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
  const location = getAdminDayLocation(button);
  if (!location) {
    setAdminMessage("No se encontró el día para guardar.", "error");
    return;
  }
  try {
    syncAdminVisibleFields();
    location.day.collapsed = false;
    await saveAdminDraftAndAssignment({ skipReadBasics: true });
    state.adminDayEditorIndex = null;
    state.adminWeekEditorIndex = location.weekIndex;
    state.adminEditingExerciseKey = "";
    setAdminMessage("Día guardado.", "success");
    renderApp();
  } catch (error) {
    state.adminDayEditorIndex = null;
    state.adminWeekEditorIndex = location.weekIndex;
    state.adminEditingExerciseKey = "";
    setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    renderApp();
  }
  return;
}

if (action === "edit-day") {
  state.adminDraft.plan[weekIndex].days.forEach((day, index) => {
    day.collapsed = index !== dayIndex;
  });
  state.adminWeekEditorIndex = weekIndex;
  state.adminDayEditorIndex = dayIndex;
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
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminEditingExerciseKey = "";
    renderApp();
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
  state.adminWeekEditorIndex = weekIndex;
  state.adminDayEditorIndex = null;

  renderAdminPanel();
  return;
}
if (action === "delete-week") {
  state.adminDraft.plan.splice(weekIndex, 1);
  state.adminEditingExerciseKey = "";
  state.adminWeekEditorIndex = null;
  state.adminDayEditorIndex = null;
}

  if (action === "add-day") {
    const location = getAdminWeekLocation(button);
    if (!location) {
      setAdminMessage("No se encontró la semana para crear el día.", "error");
      return;
    }
    const { week } = location;
    syncAdminVisibleFields();
    week.days = week.days || [];
    const nextDayIndex = week.days.length;
    week.days.push({ title: "", focus: "Hipertrofia", duration: "45", notes: "", exercises: [] });
    state.adminWeekEditorIndex = location.weekIndex;
    state.adminDayEditorIndex = nextDayIndex;
    renderApp();
    return;
  }

  if (action === "delete-day") {
    state.adminDraft.plan[weekIndex].days.splice(dayIndex, 1);
    state.adminDayEditorIndex = null;
  }

  if (action === "add-exercise") {
    const key = `ejercicio-${Date.now()}`;
    state.adminDraft.exerciseLibrary[key] = {
      name: "",
      objective: "",
      goal: "",
      baseSets: "",
      baseReps: "",
      rest: "",
      technique: "",
      mistakes: [],
      images: ["", ""]
    };
    state.adminDraft.plan[weekIndex].days[dayIndex].exercises.push(key);
    state.adminWeekEditorIndex = weekIndex;
    state.adminDayEditorIndex = dayIndex;
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
  if (!routine?.plan) {
    weeksContainer.innerHTML = `<div class="empty-state">${t("routineInPreparation")}</div>`;
    renderSummary();
    return;
  }
  const plan = routine.plan || [];
  const library = routine.exerciseLibrary || {};
  if (state.routineSubView === "info") {
    weeksContainer.innerHTML = renderStudentRoutineInfo(routine);
    renderSummary();
    return;
  }
  if (state.routineSubView === "week") {
    const week = plan.find((item) => Number(item.number) === Number(state.selectedRoutineWeekNumber)) || plan[0];
    weeksContainer.innerHTML = week ?renderStudentRoutineWeek(routine, week) : `<div class="empty-state">${t("routineInPreparation")}</div>`;
    renderSummary();
    return;
  }
  if (state.routineSubView === "day") {
    const week = plan.find((item) => Number(item.number) === Number(state.selectedRoutineWeekNumber)) || plan[0];
    const day = week?.days?.[Number(state.selectedRoutineDayIndex) || 0];
    weeksContainer.innerHTML = week && day ?renderStudentRoutineDayScreen(routine, week, day, Number(state.selectedRoutineDayIndex) || 0) : `<div class="empty-state">${t("emptyDay")}</div>`;
    renderSummary();
    return;
  }
  if (state.routineSubView === "exercise") {
    const week = plan.find((item) => Number(item.number) === Number(state.selectedRoutineWeekNumber)) || plan[0];
    const dayIndex = Number(state.selectedRoutineDayIndex) || 0;
    const day = week?.days?.[dayIndex];
    weeksContainer.innerHTML = week && day ?renderStudentExerciseScreen(routine, week, day, dayIndex, state.selectedRoutineExerciseKey) : `<div class="empty-state">${t("newExercise")}</div>`;
    renderSummary();
    return;
  }
  weeksContainer.innerHTML = renderStudentRoutineOverview(routine);
  renderSummary();
  return;

  let visibleCount = 0;

  weeksContainer.innerHTML = plan
    .map((week) => {
      const weekDone = isWeekDone(week);
      const collapseId = weekCollapseId(week.number);
      const isCollapsed = isWeekCollapsed(week.number);
      const phase = week.phase || { name: "Semana", badge: "Plan", modifier: "" };
      const weekDays = week.days || [];
      const days = weekDays.length
        ?weekDays
        .map((day, dayIndex) => {
          const exerciseCards = (day.exercises || [])
            .map((exerciseKey) => {
              const exercise = library[exerciseKey];
              if (!exercise) return "";
              if (!matchesFilters(exercise)) return "";
              visibleCount += 1;
              const id = progressId(week.number, dayIndex, exerciseKey);
              const prescription = phasePrescription(exercise, week.number);
              const objectiveClass = normalize(exercise.objective).replaceAll(" ", "-");
              const thumb = Array.isArray(exercise.images) && hasRealExerciseImage(exercise.images[0])
                ?`<img src="${escapeHtml(resolveExerciseImage(exercise.images[0], exercise.name))}" alt="${escapeHtml(exercise.name)}" />`
                : "";
              return `
                <button class="exercise-card ${progress[id] ?"done" : ""}" type="button" data-week="${week.number}" data-day="${dayIndex}" data-exercise="${exerciseKey}">
                  <span class="exercise-thumb objective-dot ${objectiveClass}">${thumb}</span>
                  <span>
                    <strong>${exercise.name}</strong>
                    <small>${exercise.objective} · ${prescription.sets} x ${prescription.reps} · ${t("restLower")} ${prescription.rest}</small>
                  </span>
                  <span class="done-mark">&check;</span>
                </button>
              `;
            })
            .join("");

          return `
            <article class="day-card">
              <h3>${day.title}<span>${day.focus}</span></h3>
              <div class="exercise-list">${exerciseCards || `<div class="empty-state">${t("emptyDay")}</div>`}</div>
            </article>
          `;
        })
        .join("")
        : `<div class="empty-state">${t("emptyWeek")}</div>`;

      const weekIds = getWeekExerciseIds(week);
      const weekDoneCount = weekIds.filter((id) => progress[id]).length;
      const weekPercent = weekIds.length ?Math.round((weekDoneCount / weekIds.length) * 100) : 0;
      const weekStatus = weekPercent >= 100 ?"done" : weekPercent > 0 ?"active" : "pending";
      const weekStatusIcon = weekStatus === "done"
        ?'<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : weekStatus === "active"
          ?'<svg viewBox="0 0 24 24"><path d="M7 5v14l12-7z" fill="currentColor"/></svg>'
          : '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

      return `
        <article class="week-card ${weekDone ?"week-done" : ""} ${isCollapsed ?"collapsed" : ""}">
          <button class="week-row week-header week-toggle" type="button" data-week="${week.number}" aria-expanded="${!isCollapsed}">
            <span class="week-row-icon ${weekStatus}" aria-hidden="true">${weekStatusIcon}</span>
            <span class="week-row-text">
              <strong>${t("week")} ${week.number}</strong>
              <small>${phase.name}</small>
            </span>
            <span class="week-status-pill ${weekStatus}">${weekPercent}%</span>
          </button>
          ${isCollapsed ?"" : `<div class="days">${days}</div>`}
        </article>
      `;
    })
    .join("");

  if (!plan.length && !visibleCount) {
    weeksContainer.innerHTML = `<div class="empty-state">${t("noMatchingExercises")}</div>`;
  }

  renderSummary();
}

function getWeekProgressPercent(week) {
  const ids = getWeekExerciseIds(week);
  const done = ids.filter((id) => progress[id]).length;
  return ids.length ?Math.round((done / ids.length) * 100) : 0;
}

function getCurrentWeekInfo(routine) {
  const plan = routine?.plan || [];
  const activeWeek = plan.find((week) => getWeekProgressPercent(week) < 100) || plan[plan.length - 1] || null;
  return {
    week: activeWeek,
    percent: activeWeek ?getWeekProgressPercent(activeWeek) : 0
  };
}

function renderRoutineProgressRing(percent) {
  return `<div class="mini-progress routine-progress-ring" style="--progress:${percent}%"><strong>${percent}%</strong></div>`;
}

function renderStudentRoutineOverview(routine) {
  const stats = getRoutineProgressStats(routine);
  const current = getCurrentWeekInfo(routine);
  const currentWeek = current.week;
  const totalWeeks = (routine?.plan || []).length;
  const subtitle = currentWeek ?`${t("week")} ${currentWeek.number} de ${totalWeeks}` : t("routineInPreparation");
  const weekRows = (routine.plan || []).map((week, index) => {
    const percent = getWeekProgressPercent(week);
    const phase = week.phase || {};
    const iconClass = "calendar";
    const status = percent >= 100 ?"complete" : percent > 0 ?"progress" : "pending";
    return `
      <button class="routine-week-row ${status}" type="button" data-routine-week="${week.number}">
        <span class="routine-list-icon ${iconClass}">${getInlineIcon("calendar")}</span>
        <span>
          <strong>${t("week")} ${week.number}</strong>
          <small>${escapeHtml(phase.name || `Semana ${index + 1}`)}</small>
        </span>
        <b>${percent >= 100 ?"100%" : percent > 0 ?"En progreso" : "0%"}</b>
        <i>${percent >= 100 ?"&check;" : ">"}</i>
      </button>
    `;
  }).join("");
  return `
    <section class="student-routine-screen routine-overview-screen">
      <div class="screen-topbar routine-topbar">
        <button class="icon-button ghost-icon" type="button" data-routine-back aria-label="Volver">&lsaquo;</button>
        <h2>Mi Rutina</h2>
        <button class="icon-button ghost-icon" type="button" data-routine-menu aria-label="Opciones">&vellip;</button>
      </div>
      <section class="routine-current-card">
        <div>
          <span>Rutina actual</span>
          <strong>${escapeHtml(routine.name || routine.title || t("routine"))}</strong>
          <small>${escapeHtml(subtitle)}</small>
        </div>
        ${renderRoutineProgressRing(stats.percent)}
      </section>
      <div class="mock-tabs routine-tabs">
        <button type="button" data-routine-tab="weeks" class="active">Semanas</button>
        <button type="button" data-routine-tab="info">Información</button>
      </div>
      <section class="routine-week-list">
        ${weekRows || `<div class="empty-state">${t("routineInPreparation")}</div>`}
      </section>
    </section>
  `;
}

function renderStudentRoutineInfo(routine) {
  const stats = getRoutineProgressStats(routine);
  const current = getCurrentWeekInfo(routine);
  const title = routine.name || routine.title || t("routine");
  const description = routine.description || "Rutina enfocada en el desarrollo de fuerza en la parte superior del cuerpo.";
  return `
    <section class="student-routine-screen routine-info-screen">
      <div class="screen-topbar routine-topbar">
        <button class="icon-button ghost-icon" type="button" data-routine-tab="weeks" aria-label="Volver">⬹</button>
        <h2>Información de Rutina</h2>
        <span></span>
      </div>
      <section class="routine-current-card">
        <div>
          <strong>${escapeHtml(title)}</strong>
          <small>${current.week ?`${t("week")} ${current.week.number} de ${totalWeeks}` : t("routineInPreparation")}</small>
        </div>
        ${renderRoutineProgressRing(stats.percent)}
      </section>
      <div class="mock-tabs routine-tabs">
        <button type="button" data-routine-tab="info" class="active">Información</button>
        <button type="button" data-routine-tab="notes">Notas</button>
      </div>
      <section class="routine-info-list">
        <article><span>Objetivo</span><strong>${escapeHtml(routine.goal || "Aumentar fuerza y masa muscular")}</strong></article>
        <article><span>Nivel</span><strong>${escapeHtml(routine.level || "Intermedio")}</strong></article>
        <article><span>Duración</span><strong>${totalWeeks} semanas</strong></article>
        <article><span>Descripción</span><strong>${escapeHtml(description)}</strong></article>
        <article><span>Frecuencia</span><strong>${escapeHtml(routine.frequency || "4 días por semana")}</strong></article>
        <article><span>Equipo</span><strong>${escapeHtml(routine.equipment || "Gimnasio")}</strong></article>
      </section>
    </section>
  `;
}

function renderStudentRoutineWeek(routine, week) {
  const percent = getWeekProgressPercent(week);
  const phase = week.phase || {};
  const days = (week.days || []).map((day, dayIndex) => {
    const ids = (day.exercises || []).map((exerciseKey) => progressId(week.number, dayIndex, exerciseKey));
    const done = ids.filter((id) => progress[id]).length;
    const dayPercent = ids.length ?Math.round((done / ids.length) * 100) : 0;
    const completed = dayPercent >= 100;
    const inProgress = dayPercent > 0 && dayPercent < 100;
    const iconClass = "calendar";
    const open = Number(state.selectedRoutineDayIndex) === dayIndex;
    const exerciseList = open ?renderStudentRoutineDayExercises(routine, week, day, dayIndex) : "";
    return `
      <article class="routine-day-card ${open ?"open" : ""}">
        <button class="routine-day-row" type="button" data-routine-day="${dayIndex}">
          <span class="routine-list-icon ${iconClass}">${getInlineIcon("calendar")}</span>
          <span>
            <strong>${escapeHtml(day.title || `Día ${dayIndex + 1}`)}</strong>
            <small>${escapeHtml(day.focus || (completed ?"Completado" : inProgress ?"En progreso" : "Pendiente"))}</small>
          </span>
          <b class="${completed ?"complete" : inProgress ?"progress" : ""}">${completed ?"&check;" : inProgress ?"&#9654;" : "&#9633;"}</b>
        </button>
        ${exerciseList}
      </article>
    `;
  }).join("");
  return `
    <section class="student-routine-screen routine-week-screen">
      <div class="screen-topbar routine-topbar">
        <button class="icon-button ghost-icon" type="button" data-routine-tab="weeks" aria-label="Volver">⬹</button>
        <h2>${t("week")} ${week.number} - ${escapeHtml(phase.name || "Hipertrofia")}</h2>
        <span></span>
      </div>
      <section class="week-progress-card">
        <div>
          <span>Progreso de la semana</span>
          <strong>${percent}%</strong>
        </div>
        <div class="week-progress-bar"><span style="width:${percent}%"></span></div>
      </section>
      <div class="progress-section-title">Días</div>
      <section class="routine-day-list">${days || `<div class="empty-state">${t("emptyWeek")}</div>`}</section>
    </section>
  `;
}

function renderStudentRoutineDayExercises(routine, week, day, dayIndex) {
  const library = routine.exerciseLibrary || {};
  const items = (day.exercises || []).map((exerciseKey) => {
    const exercise = library[exerciseKey];
    if (!exercise) return "";
    const id = progressId(week.number, dayIndex, exerciseKey);
    const prescription = phasePrescription(exercise, week.number);
    const thumb = Array.isArray(exercise.images) && hasRealExerciseImage(exercise.images[0])
      ?`<img src="${escapeHtml(resolveExerciseImage(exercise.images[0], exercise.name))}" alt="${escapeHtml(exercise.name)}" />`
      : "";
    return `
      <button class="exercise-card ${progress[id] ?"done" : ""}" type="button" data-week="${week.number}" data-day="${dayIndex}" data-exercise="${escapeHtml(exerciseKey)}">
        <span class="exercise-thumb objective-dot ${normalize(exercise.objective).replaceAll(" ", "-")}">${thumb}</span>
        <span>
          <strong>${escapeHtml(exercise.name || t("newExercise"))}</strong>
          <small>${escapeHtml(exercise.objective || "")} · ${escapeHtml(prescription.sets)} x ${escapeHtml(prescription.reps)}</small>
        </span>
        <span class="done-mark">&check;</span>
      </button>
    `;
  }).join("");
  return `<div class="routine-day-exercises">${items || `<div class="empty-state">${t("emptyDay")}</div>`}</div>`;
}

function getDayProgressStats(week, day, dayIndex) {
  const ids = (day.exercises || []).map((exerciseKey) => progressId(week.number, dayIndex, exerciseKey));
  const done = ids.filter((id) => progress[id]).length;
  const total = ids.length;
  return {
    total,
    done,
    minutes: Math.max(45, Math.round(total * 7.5)),
    kcal: Math.max(320, Math.round(Math.max(45, total * 7.5) * 7)),
    percent: total ?Math.round((done / total) * 100) : 0
  };
}

function renderStudentRoutineDayScreen(routine, week, day, dayIndex) {
  const stats = getDayProgressStats(week, day, dayIndex);
  const exercises = (day.exercises || []).map((exerciseKey, index) => {
    const exercise = routine?.exerciseLibrary?.[exerciseKey];
    if (!exercise) return "";
    const prescription = phasePrescription(exercise, week.number);
    const id = progressId(week.number, dayIndex, exerciseKey);
    const done = Boolean(progress[id]);
    const current = !done && index === (day.exercises || []).findIndex((key) => !progress[progressId(week.number, dayIndex, key)]);
    const image = Array.isArray(exercise.images) && hasRealExerciseImage(exercise.images[0])
      ?`<img src="${escapeHtml(resolveExerciseImage(exercise.images[0], exercise.name))}" alt="${escapeHtml(exercise.name)}" />`
      : "";
    return `
      <button class="training-exercise-row ${done ?"done" : ""} ${current ?"current" : ""}" type="button" data-routine-exercise="${escapeHtml(exerciseKey)}">
        <span class="training-thumb">${image}</span>
        <span>
          <strong>${index + 1}. ${escapeHtml(exercise.name || t("newExercise"))}</strong>
          <small>${escapeHtml(prescription.sets)} series x ${escapeHtml(prescription.reps)} reps</small>
        </span>
        <b>${done ?"&check;" : current ?"&#9654;" : "&#9675;"}</b>
      </button>
    `;
  }).join("");
  return `
    <section class="student-routine-screen training-day-screen">
      <div class="screen-topbar routine-topbar">
        <button class="icon-button ghost-icon" type="button" data-routine-view="week" aria-label="Volver">&lsaquo;</button>
        <h2>${escapeHtml(day.title || `Día ${dayIndex + 1}`)}</h2>
        <button class="icon-button ghost-icon" type="button" data-routine-menu aria-label="Opciones">&vellip;</button>
      </div>
      <span class="training-status">${stats.percent >= 100 ?"Completado" : stats.percent > 0 ?"En progreso" : "Pendiente"}</span>
      <div class="progress-stat-grid training-stat-grid">
        <article><strong>${stats.total}</strong><span>Ejercicios</span></article>
        <article><strong>${stats.minutes}</strong><span>Minutos</span></article>
        <article><strong>${stats.kcal}</strong><span>Kcal aprox.</span></article>
      </div>
      <div class="progress-section-title">Ejercicios</div>
      <section class="training-exercise-list">${exercises || `<div class="empty-state">${t("emptyDay")}</div>`}</section>
      <button class="measure-register-button start-training-button" type="button" data-routine-action="start-first-exercise">Iniciar ejercicio</button>
    </section>
  `;
}

function renderStudentExerciseScreen(routine, week, day, dayIndex, exerciseKey) {
  const exercise = routine?.exerciseLibrary?.[exerciseKey] || {};
  const prescription = phasePrescription(exercise, week.number);
  const id = progressId(week.number, dayIndex, exerciseKey);
  const [startImage] = Array.isArray(exercise.images) ?exercise.images : [""];
  const image = resolveExerciseImage(startImage, exercise.name || t("newExercise"));
  const sets = Number(String(prescription.sets || "").match(/\d+/)?.[0] || 3);
  const reps = String(prescription.reps || exercise.baseReps || "8 / 12");
  const restSeconds = parseRestToSeconds(prescription.rest || "1:00");
  const done = Boolean(progress[id]);
  const currentSeries = done ?sets : Math.min(Math.max(1, state.exerciseSeriesDone || 2), sets);
  return `
    <section class="student-routine-screen exercise-run-screen">
      <div class="screen-topbar routine-topbar">
        <button class="icon-button ghost-icon" type="button" data-routine-view="day" aria-label="Volver">&lsaquo;</button>
        <h2>${escapeHtml(exercise.name || t("newExercise"))}</h2>
        <button class="icon-button ghost-icon" type="button" data-routine-menu aria-label="Opciones">&vellip;</button>
      </div>
      <div class="exercise-run-image">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(exercise.name || t("newExercise"))}" />
      </div>
      <div class="exercise-run-grid">
        <article><span>Serie actual</span><strong><em>${currentSeries}</em> / ${sets}</strong></article>
        <article><span>Repeticiones</span><strong>${escapeHtml(reps)}</strong></article>
      </div>
      <section class="exercise-rest-card">
        <span>Descanso <small>segundos</small></span>
        <strong>${restSeconds}</strong>
      </section>
      <button class="measure-register-button" type="button" data-routine-action="finish-exercise">${done ?"Ejercicio finalizado" : "Finalizar serie"}</button>
      <button class="secondary-button skip-exercise-button" type="button" data-routine-action="skip-exercise">Omitir ejercicio</button>
    </section>
  `;
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
  const exercise = routine?.exerciseLibrary?.[exerciseKey];
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

  const [startImage, endImage] = Array.isArray(exercise.images) ?exercise.images : ["", ""];
  const startFigure = document.querySelector("#modalImageStart").closest("figure");
  const endFigure = document.querySelector("#modalImageEnd").closest("figure");
  const hasStartImage = hasRealExerciseImage(startImage);
  const hasEndImage = hasRealExerciseImage(endImage);
  const showStartPlaceholder = !hasStartImage && !hasEndImage;

  startFigure.classList.toggle("is-hidden", !hasStartImage && !showStartPlaceholder);
  endFigure.classList.toggle("is-hidden", !hasEndImage);

  document.querySelector("#modalImageStart").src = resolveExerciseImage(startImage, t("startPosition"));
  document.querySelector("#modalImageStart").alt = t("startImageAlt", { name: exercise.name });
  document.querySelector("#modalImageEnd").src = resolveExerciseImage(endImage, t("endPosition"));
  document.querySelector("#modalImageEnd").alt = t("endImageAlt", { name: exercise.name });

  doneButton.classList.toggle("done", Boolean(progress[id]));
  doneButton.textContent = progress[id] ?t("done") : t("markDone");
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

function showConfirmDialog(message) {
  if (!confirmModal || !confirmMessage || !confirmCancel || !confirmAccept) {
    return Promise.resolve(window.confirm(message));
  }

  confirmMessage.textContent = message;
  confirmModal.classList.add("open");
  confirmModal.setAttribute("aria-hidden", "false");

  return new Promise((resolve) => {
    const finish = (confirmed) => {
      confirmModal.classList.remove("open");
      confirmModal.setAttribute("aria-hidden", "true");
      confirmCancel.removeEventListener("click", onCancel);
      confirmAccept.removeEventListener("click", onAccept);
      confirmModal.removeEventListener("click", onBackdrop);
      document.removeEventListener("keydown", onKeydown);
      resolve(confirmed);
    };

    const onCancel = () => finish(false);
    const onAccept = () => finish(true);
    const onBackdrop = (event) => {
      if (event.target === confirmModal) finish(false);
    };
    const onKeydown = (event) => {
      if (event.key === "Escape") finish(false);
    };

    confirmCancel.addEventListener("click", onCancel);
    confirmAccept.addEventListener("click", onAccept);
    confirmModal.addEventListener("click", onBackdrop);
    document.addEventListener("keydown", onKeydown);
  });
}

function toggleDone() {
  if (!state.currentExerciseKey) return;
  const { id, weekNumber } = state.currentExerciseKey;
  progress[id] = !progress[id];
  localStorage.setItem(progressKey, JSON.stringify(progress));
  doneButton.classList.toggle("done", Boolean(progress[id]));
  doneButton.textContent = progress[id] ?t("done") : t("markDone");

  const week = getActiveRoutine()?.plan?.find((item) => item.number === weekNumber);
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
  const routineMenu = event.target.closest("[data-routine-menu]");
  if (routineMenu) {
    state.routineSubView = "info";
    state.selectedRoutineDayIndex = null;
    state.selectedRoutineExerciseKey = "";
    renderPlan();
    return;
  }

  const routineTab = event.target.closest("[data-routine-tab]");
  if (routineTab) {
    const tab = routineTab.dataset.routineTab;
    state.routineSubView = tab === "info" || tab === "notes" ?"info" : "weeks";
    state.selectedRoutineDayIndex = null;
    renderPlan();
    return;
  }

  const routineBack = event.target.closest("[data-routine-back]");
  if (routineBack) {
    setActiveView("home");
    return;
  }

  const routineWeek = event.target.closest("[data-routine-week]");
  if (routineWeek) {
    state.selectedRoutineWeekNumber = Number(routineWeek.dataset.routineWeek) || 1;
    state.selectedRoutineDayIndex = null;
    state.routineSubView = "week";
    renderPlan();
    return;
  }

  const routineView = event.target.closest("[data-routine-view]");
  if (routineView) {
    const nextView = routineView.dataset.routineView || "weeks";
    state.routineSubView = nextView;
    if (nextView === "week") {
      state.selectedRoutineDayIndex = null;
      state.selectedRoutineExerciseKey = "";
    }
    renderPlan();
    return;
  }

  const routineDay = event.target.closest("[data-routine-day]");
  if (routineDay) {
    const index = Number(routineDay.dataset.routineDay);
    state.selectedRoutineDayIndex = index;
    state.selectedRoutineExerciseKey = "";
    state.routineSubView = "day";
    renderPlan();
    return;
  }

  const routineExercise = event.target.closest("[data-routine-exercise]");
  if (routineExercise) {
    state.selectedRoutineExerciseKey = routineExercise.dataset.routineExercise || "";
    state.routineSubView = "exercise";
    state.exerciseSeriesDone = 2;
    renderPlan();
    return;
  }

  const routineAction = event.target.closest("[data-routine-action]");
  if (routineAction) {
    const routine = getActiveRoutine();
    const week = routine?.plan?.find((item) => Number(item.number) === Number(state.selectedRoutineWeekNumber)) || routine?.plan?.[0];
    const dayIndex = Number(state.selectedRoutineDayIndex) || 0;
    const day = week?.days?.[dayIndex];
    if (routineAction.dataset.routineAction === "start-first-exercise" && week && day) {
      const first = (day.exercises || []).find((key) => !progress[progressId(week.number, dayIndex, key)]) || day.exercises?.[0] || "";
      state.selectedRoutineExerciseKey = first;
      state.routineSubView = "exercise";
      state.exerciseSeriesDone = 2;
      renderPlan();
      return;
    }
    if (routineAction.dataset.routineAction === "finish-exercise" && week && day && state.selectedRoutineExerciseKey) {
      const id = progressId(week.number, dayIndex, state.selectedRoutineExerciseKey);
      progress[id] = true;
      localStorage.setItem(progressKey, JSON.stringify(progress));
      state.exerciseSeriesDone = Math.max(1, state.exerciseSeriesDone || 2) + 1;
      renderPlan();
      return;
    }
    if (routineAction.dataset.routineAction === "skip-exercise") {
      state.routineSubView = "day";
      renderPlan();
      return;
    }
  }

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

adminToggle.addEventListener("click", () => {
  if (!canManageStudents()) return;
  state.adminPanelOpen = !state.adminPanelOpen;
    if (!state.adminPanelOpen) {
    state.selectedAdminUserId = "";
    state.adminEditorMode = "";
    state.adminRoutineBasicsOpen = false;
    state.pendingAssignUserId = "";
    state.adminEditingExerciseKey = "";
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    state.adminDraft = null;
  }
  renderApp();
});

adminClose.addEventListener("click", () => {
  state.adminPanelOpen = false;
  state.selectedAdminUserId = "";
  state.adminEditorMode = "";
  state.adminRoutineBasicsOpen = false;
  state.pendingAssignUserId = "";
  state.adminEditingExerciseKey = "";
  state.adminDraft = null;
  renderApp();
});

adminRoutineSelect.addEventListener("change", () => {
  if (state.activeView === "routines" && !state.adminEditorMode) {
    setAdminMessage("");
    return;
  }
  setAdminDraftFromRoutine(adminRoutineSelect.value);
  setAdminMessage("");
  renderAdminPanel();
});

[adminRoutineId, adminRoutineName, adminRoutineTitle, adminRoutineKicker, adminRoutineDescription, adminRoutineTags].forEach((input) => {
  if (!input) return;
  input.addEventListener("input", () => {
    if (!state.adminDraft) return;
    readAdminBasics();
  });
});

adminRoutineLevel?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-routine-level]");
  if (!button || !state.adminDraft) return;
  state.adminDraft.level = button.dataset.routineLevel || "Intermedio";
  adminRoutineLevel.querySelectorAll("[data-routine-level]").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
});

adminWeeks.addEventListener("input", (event) => {
  updateAdminDraftFromInput(event.target);
});

adminWeeks.addEventListener("change", async (event) => {
  const changedField = event.target.closest(".admin-field, .admin-textarea");
  if (changedField && !changedField.matches("[data-image-upload]")) {
    updateAdminDraftFromInput(changedField);
  }

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
      throw new Error("No se encontro el ejercicio para guardar la imagen");
    }

    const imageDataUrl = await createExerciseImageDataUrl(file);
    exercise.images = Array.isArray(exercise.images) ?exercise.images : ["", ""];
    exercise.images[imageIndex] = imageDataUrl;
    state.adminEditingExerciseKey = exerciseKey;

    await saveAdminDraftAndAssignment();

    setAdminMessage(t("imageLoaded"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage((getAuthErrorMessage(error) + " " + (error?.message || "")).trim(), "error");
  } finally {
    input.value = "";
  }
});

adminWeeks.addEventListener("click", async (event) => {
  const routineLevelButton = event.target.closest("[data-routine-level]");
  if (routineLevelButton && state.adminDraft) {
    state.adminDraft.level = routineLevelButton.dataset.routineLevel || "Intermedio";
    renderAdminPanel();
    return;
  }

  const dayFocus = event.target.closest("[data-day-focus]");
  if (dayFocus && state.adminDraft) {
    const weekIndex = Number(dayFocus.closest("[data-week-index]")?.dataset.weekIndex);
    const dayIndex = Number(dayFocus.closest("[data-day-index]")?.dataset.dayIndex);
    const day = state.adminDraft.plan?.[weekIndex]?.days?.[dayIndex];
    if (day) {
      day.focus = dayFocus.dataset.dayFocus || "";
      renderAdminPanel();
    }
    return;
  }

  const workspaceButton = event.target.closest("[data-admin-action]");
  if (workspaceButton && state.activeView === "routines" && state.adminDraft) {
    const handled = await handleRoutineWorkspaceAction(workspaceButton);
    if (handled) return;
  }

  const newRoutineCard = event.target.closest("[data-admin-action='new-routine-card']");
  if (newRoutineCard) {
    startRoutineCreation(state.selectedAdminUserId || "");
    return;
  }

  const routineCardButton = event.target.closest("[data-routine-card-edit], [data-routine-card]");
  if (routineCardButton && !event.target.closest("[data-admin-action]")) {
    const routineId = routineCardButton.dataset.routineCardEdit || routineCardButton.dataset.routineCard || "";
    if (routineId && routines[routineId]) {
      startRoutineEditing(routineId, state.selectedAdminUserId || "");
    }
    return;
  }

  const weekCard = event.target.closest("[data-admin-open-week]");
  if (weekCard && !event.target.closest("[data-admin-action]")) {
    const weekIndex = Number(weekCard.dataset.weekIndex);
    if (Number.isInteger(weekIndex) && state.adminDraft?.plan?.[weekIndex]) {
      state.adminDraft.plan.forEach((week, index) => {
        week.collapsed = index !== weekIndex;
      });
      state.adminDraft.plan[weekIndex].collapsed = false;
      state.adminWeekEditorIndex = weekIndex;
      state.adminDayEditorIndex = null;
      renderAdminPanel();
    }
    return;
  }

  const button = event.target.closest("[data-admin-action]");
  if (!button) return;
  await handleAdminAction(button);
});

adminUsers.addEventListener("change", async (event) => {
  const assignStudent = event.target.closest("[data-assign-student]");
  if (assignStudent) {
    state.assignmentStudentId = assignStudent.value;
    const user = getAdminUser(assignStudent.value);
    state.assignmentRoutineId = user?.routineId || state.assignmentRoutineId || getAdminRoutineIds()[0] || "";
    renderAdminUsers();
    return;
  }

  const assignRoutine = event.target.closest("[data-assign-routine]");
  if (assignRoutine) {
    state.assignmentRoutineId = assignRoutine.value;
    renderAdminUsers();
    return;
  }

  const assignDate = event.target.closest("[data-assign-date]");
  if (assignDate) {
    state.assignmentStartDate = assignDate.value;
    renderAdminUsers();
    return;
  }

  const select = event.target.closest("[data-user-routine]");
  if (!select) return;
  const card = select.closest("[data-user-id]");
  const uid = card?.dataset.userId;
  if (!uid) return;

  select.disabled = true;
  setAdminMessage(t("updatingUser"));
  try {
    await updateUserRoutine(uid, select.value);
    state.adminUsers = state.adminUsers.map((user) =>
      user.uid === uid ?{ ...user, routineId: select.value } : user
    );
    if (state.pendingAssignUserId === uid || state.selectedAdminUserId === uid) {
      state.adminEditorMode = "";
      state.adminRoutineBasicsOpen = false;
      state.pendingAssignUserId = "";
      state.adminEditingExerciseKey = "";
      state.adminDraft = null;
    }
    setAdminMessage(select.value ?t("assignedRoutine") : t("userWithoutRoutine"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  } finally {
    select.disabled = false;
  }
});

adminUsers.addEventListener("input", (event) => {
  const assignDate = event.target.closest("[data-assign-date]");
  if (assignDate) {
    state.assignmentStartDate = assignDate.value;
    return;
  }

  const searchInput = event.target.closest("[data-admin-student-search]");
  if (!searchInput) return;
  state.adminStudentQuery = searchInput.value || "";
  renderAdminUsers();
});

adminUsers.addEventListener("click", async (event) => {
  const assignButton = event.target.closest("[data-assign-action]");
  if (assignButton) {
    const action = assignButton.dataset.assignAction;
    if (action === "back") {
      state.adminAssignmentMode = false;
      setAdminMessage("");
      renderAdminPanel();
      return;
    }

    if (action === "save") {
      const uid = state.assignmentStudentId;
      const routineId = state.assignmentRoutineId;
      if (!uid || !routineId) {
        setAdminMessage("Selecciona alumno y rutina.", "error");
        return;
      }

      assignButton.disabled = true;
      setAdminMessage(t("updatingUser"));
      try {
        await updateUserRoutine(uid, routineId);
        await db.collection("users").doc(uid).set({
          routineStartDate: state.assignmentStartDate || "",
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedBy: normalizeEmail(state.currentUser?.email || "")
        }, { merge: true });
        state.adminUsers = state.adminUsers.map((user) =>
          user.uid === uid
            ?{ ...user, routineId, routineStartDate: state.assignmentStartDate || "" }
            : user
        );
        setAdminMessage(t("assignedRoutine"), "success");
        state.adminAssignmentMode = false;
        state.selectedAdminUserId = uid;
        renderAdminPanel();
      } catch (error) {
        setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
        assignButton.disabled = false;
      }
      return;
    }
  }

  const newStudentButton = event.target.closest("[data-admin-new-student]");
  if (newStudentButton) {
    state.adminStudentFormOpen = true;
    renderAdminUsers();
    return;
  }

  const closeNewStudentButton = event.target.closest("[data-admin-new-student-close]");
  if (closeNewStudentButton) {
    state.adminStudentFormOpen = false;
    renderAdminUsers();
    return;
  }

  const filterButton = event.target.closest("[data-admin-student-filter]");
  if (filterButton) {
    state.adminStudentFilter = filterButton.dataset.adminStudentFilter || "all";
    renderAdminUsers();
    return;
  }

  const deleteButton = event.target.closest("[data-user-delete]");
  if (deleteButton) {
    const card = deleteButton.closest("[data-user-id]");
    const uid = card?.dataset.userId;
    const user = getAdminUser(uid);
    if (!uid || !user) return;
    const name = user.displayName || user.email || uid;
    const confirmed = await showConfirmDialog(t("deleteUserConfirm", { name }));
    if (!confirmed) return;
    deleteButton.disabled = true;
    try {
      await deleteRutfitUser(user);
      state.adminUsers = state.adminUsers.filter((item) => item.uid !== uid);
      if (state.selectedAdminUserId === uid) {
        state.selectedAdminUserId = "";
        state.adminEditorMode = "";
        state.adminRoutineBasicsOpen = false;
        state.pendingAssignUserId = "";
        state.adminEditingExerciseKey = "";
        state.adminDraft = null;
      }
      setAdminMessage(t("userDeleted"), "success");
      renderAdminPanel();
    } catch (error) {
      setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    } finally {
      deleteButton.disabled = false;
    }
    return;
  }

  const trainerAction = event.target.closest("[data-trainer-action='invite']");
  if (trainerAction) {
    const input = adminUsers.querySelector("#trainerInviteEmail");
    trainerAction.disabled = true;
    setAdminMessage(t("inviteStudent"));
    try {
      await createTrainerInvitation(input?.value || "");
      if (input) input.value = "";
      setAdminMessage(t("inviteSent"), "success");
    } catch (error) {
      setAdminMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    } finally {
      trainerAction.disabled = false;
    }
    return;
  }

  const backButton = event.target.closest("[data-admin-users-back]");
  if (backButton) {
    state.selectedAdminUserId = "";
    state.adminEditorMode = "";
    state.adminRoutineBasicsOpen = false;
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
    state.selectedAdminUserId = state.selectedAdminUserId === uid ?"" : uid;
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
      startRoutineCreation(uid);
      return;
    }

    if (actionButton.dataset.userAction === "edit-routine" && user.routineId && routines[user.routineId]) {
      startRoutineEditing(user.routineId, uid);
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
    state.adminUsers = state.adminUsers.map((user) =>
      user.uid === uid ?{ ...user, routineId: "" } : user
    );
    if (state.pendingAssignUserId === uid) {
      state.adminEditorMode = "";
      state.adminRoutineBasicsOpen = false;
      state.pendingAssignUserId = "";
      state.adminEditingExerciseKey = "";
      state.adminDraft = null;
    }
    setAdminMessage(t("routineRemoved"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  } finally {
    button.disabled = false;
  }
});

bottomNav?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  if (button.dataset.view === "account") {
    state.accountSubView = "profile";
  }
  if (button.dataset.view === "progress") {
    state.progressSubView = "summary";
  }
  if (button.dataset.view === "routines") {
    state.routineSubView = "weeks";
    state.selectedRoutineDayIndex = null;
  }
  setActiveView(button.dataset.view);
});

studentProgress?.addEventListener("click", (event) => {
  const back = event.target.closest("[data-progress-back]");
  if (back) {
    state.progressSubView = "summary";
    renderStudentProgress();
    return;
  }

  const tab = event.target.closest("[data-progress-tab]");
  if (tab) {
    state.progressSubView = tab.dataset.progressTab || "summary";
    renderStudentProgress();
    return;
  }

  const historyFilter = event.target.closest("[data-history-filter]");
  if (historyFilter) {
    state.progressHistoryFilter = historyFilter.dataset.historyFilter || "all";
    renderStudentProgress();
    return;
  }

  const measureTab = event.target.closest("[data-measure-tab]");
  if (measureTab) {
    state.progressMeasureTab = measureTab.dataset.measureTab || "summary";
    renderStudentProgress();
    return;
  }

  const action = event.target.closest("[data-progress-action]");
  if (!action) return;
  if (action.dataset.progressAction === "edit-profile") {
    state.accountSubView = "personal";
    setActiveView("account");
    return;
  }
  if (action.dataset.progressAction === "menu") {
    state.progressSubView = state.progressSubView === "history" ?"summary" : "history";
    renderStudentProgress();
    return;
  }
  if (action.dataset.progressAction === "cycle-history") {
    const order = ["all", "completed", "pending"];
    const index = order.indexOf(state.progressHistoryFilter);
    state.progressHistoryFilter = order[(index + 1) % order.length];
    renderStudentProgress();
  }
});

accountPanel?.addEventListener("click", async (event) => {
  const backButton = event.target.closest("[data-account-back]");
  if (backButton) {
    setActiveView("home");
    return;
  }

  const sectionButton = event.target.closest("[data-account-section]");
  if (sectionButton) {
    const target = sectionButton.dataset.accountSection;
    state.accountSubView = target === "settings" ?"settings" : target === "profile" ?"profile" : target;
    renderAccountPanel();
    return;
  }

  const helpButton = event.target.closest("[data-account-action='help']");
  if (helpButton) {
    const status = accountPanel.querySelector("#accountStatus");
    if (status) status.textContent = "Soporte RutFit: escribe a tu entrenador o administrador.";
    return;
  }

  const settingsAction = event.target.closest("[data-settings-action]");
  if (settingsAction) {
    const action = settingsAction.dataset.settingsAction;
    const status = accountPanel.querySelector("#accountStatus");
    if (action === "password") {
      try {
        await firebase.auth().sendPasswordResetEmail(state.currentUser.email);
        if (status) status.textContent = "Te enviamos un mail para cambiar la contraseña.";
      } catch (error) {
        if (status) status.textContent = getAuthErrorMessage(error);
      }
      return;
    }
    if (action === "privacy") {
      if (status) status.textContent = "Tus datos solo se usan para RutFit y tus entrenadores aceptados.";
      return;
    }
    if (action === "units") {
      if (status) status.textContent = "RutFit usa sistema métrico: kg y cm.";
      return;
    }
    if (action === "delete") {
      const confirmed = await showConfirmDialog("¿Eliminar tu cuenta de RutFit?");
      if (!confirmed) return;
      if (status) status.textContent = "Para eliminar la cuenta definitivamente, vuelve a iniciar sesión recientemente y solicita eliminación al admin.";
      return;
    }
  }

  const saveButton = event.target.closest("[data-profile-save]");
  if (saveButton) {
    saveButton.disabled = true;
    try {
      await saveCurrentUserProfile();
    } catch (error) {
      setAuthMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    } finally {
      saveButton.disabled = false;
    }
    return;
  }
  if (!event.target.closest("[data-account-logout]")) return;
  await firebase.auth().signOut();
});

accountPanel?.addEventListener("change", async (event) => {
  const preferenceToggle = event.target.closest("[data-preference-toggle]");
  if (preferenceToggle) {
    const key = preferenceToggle.dataset.preferenceToggle;
    const value = preferenceToggle.checked;
    const status = accountPanel.querySelector("#accountStatus");
    try {
      await db.collection("users").doc(state.currentUser.uid).set(
        {
          preferences: {
            ...(state.currentUserData?.preferences || {}),
            [key]: value
          },
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      );
      state.currentUserData = {
        ...(state.currentUserData || {}),
        preferences: {
          ...(state.currentUserData?.preferences || {}),
          [key]: value
        }
      };
      renderAccountPanel();
      const nextStatus = accountPanel.querySelector("#accountStatus");
      if (nextStatus) nextStatus.textContent = "Preferencias guardadas.";
    } catch (error) {
      preferenceToggle.checked = !value;
      if (status) status.textContent = getAuthErrorMessage(error);
    }
    return;
  }

  const input = event.target.closest("[data-profile-photo]");
  if (!input?.files?.[0]) return;
  try {
    setAuthMessage(t("uploadingImage"));
    const photoDataUrl = await createProfileImageDataUrl(input.files[0]);
    await saveCurrentUserProfile({ photoDataUrl });
  } catch (error) {
    setAuthMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
  } finally {
    input.value = "";
  }
});

trainerHome?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-home-action]");
  if (!button) return;
  if (button.dataset.homeAction === "new-student") {
    state.adminStudentFormOpen = true;
    state.selectedAdminUserId = "";
    setActiveView("students");
    return;
  }
  if (button.dataset.homeAction === "notifications") {
    setActiveView("notifications");
    return;
  }
  if (button.dataset.homeAction === "assign-routine") {
    openAcceptedStudentsForAssignment();
    return;
  }
  if (button.dataset.homeAction === "new-routine") {
    startRoutineCreation();
  }
});

studentHome?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-student-home-action]");
  if (!button) return;
  if (button.dataset.studentHomeAction === "routine") {
    setActiveView("routines");
  }
  if (button.dataset.studentHomeAction === "notifications") {
    setActiveView("notifications");
  }
});

studentProgress?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-notification-action]");
  if (!button) return;
  if (button.dataset.notificationAction === "back") {
    setActiveView("home");
  }
  if (button.dataset.notificationAction === "read-all") {
    button.textContent = "Todo leído";
    button.disabled = true;
  }
});

studentInvitesPanel?.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-student-invite-action]");
  if (!button) return;
  const card = button.closest("[data-invite-id]");
  const inviteId = card?.dataset.inviteId;
  if (!inviteId) return;
  const actionButtons = Array.from(card.querySelectorAll("[data-student-invite-action]"));
  actionButtons.forEach((item) => {
    item.disabled = true;
  });
  try {
    const accepted = button.dataset.studentInviteAction === "accept";
    await respondToTrainerInvitation(inviteId, accepted);
    setAuthMessage(accepted ?t("inviteAccepted") : t("inviteDeclined"), "success");
  } catch (error) {
    setAuthMessage(`${getAuthErrorMessage(error)} ${error?.message || ""}`.trim(), "error");
    actionButtons.forEach((item) => {
      item.disabled = false;
    });
  } finally {
    if (!card.isConnected) return;
  }
});

adminAddWeek.addEventListener("click", () => {
  if (!state.adminDraft) {
    startRoutineCreation(state.selectedAdminUserId || "");
    return;
  }
  syncAdminVisibleFields();
  const nextIndex = state.adminDraft.plan.length;
  state.adminDraft.plan.push({
    number: nextIndex + 1,
    phase: { name: "", badge: "", modifier: "" },
    days: []
  });
  state.adminRoutineScreen = "week";
  state.adminEditingExerciseKey = "";
  state.adminDayEditorIndex = null;
  state.adminWeekEditorIndex = nextIndex;
  renderAdminPanel();
});

adminNewRoutine.addEventListener("click", () => {
  startRoutineCreation(state.selectedAdminUserId || "");
});

adminEditRoutine?.addEventListener("click", () => {
  const routineId = adminRoutineSelect.value || getAdminRoutineIds()[0] || "";
  startRoutineEditing(routineId, state.selectedAdminUserId || "");
});

adminEditorBack?.addEventListener("click", () => {
  state.adminEditorMode = "";
  state.adminRoutineScreen = "list";
  state.adminRoutineBasicsOpen = false;
  state.pendingAssignUserId = "";
  state.adminEditingExerciseKey = "";
  state.adminWeekEditorIndex = null;
  state.adminDayEditorIndex = null;
  state.adminDraft = null;
  setAdminMessage("");
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
    setAdminMessage(state.pendingAssignUserId || state.selectedAdminUserId ?t("darioMigratedAssigned") : t("darioMigrated"), "success");
    renderAdminPanel();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
});

adminSaveRoutine.addEventListener("click", async () => {
  if (!canManageStudents() || !state.adminDraft) return;
  syncAdminVisibleFields();
  if (!state.adminDraft.name) state.adminDraft.name = `Rutina ${getNextRoutineNumber()}`;
  if (!state.adminDraft.id) state.adminDraft.id = createRoutineDraftId(getNextRoutineNumber());
  try {
    const savedRoutineId = state.adminDraft.id;
    const assignedUserId = await saveAdminDraftAndAssignment({ skipReadBasics: true });
    setAdminMessage(assignedUserId ?t("routineSavedAssigned") : t("routineSaved"), "success");
    state.adminEditorMode = "edit";
    state.adminRoutineScreen = "detail";
    state.adminRoutineBasicsOpen = false;
    state.pendingAssignUserId = assignedUserId || "";
    state.adminEditingExerciseKey = "";
    state.adminWeekEditorIndex = null;
    state.adminDayEditorIndex = null;
    setAdminDraftFromRoutine(savedRoutineId);
    state.adminDraft.plan.forEach((week) => {
      week.collapsed = true;
      (week.days || []).forEach((day) => {
        day.collapsed = true;
      });
    });
    state.activeView = "routines";
    state.adminPanelOpen = true;
    renderApp();
  } catch (error) {
    setAdminMessage(getAuthErrorMessage(error), "error");
  }
});

adminDeleteRoutine.addEventListener("click", async () => {
  if (!canManageStudents() || !state.adminDraft?.id) return;
  const deletedId = state.adminDraft.id;
  const confirmed = await showConfirmDialog(t("deleteRoutineConfirm", { name: state.adminDraft.name || state.adminDraft.id }));
  if (!confirmed) return;
  try {
    await deleteRoutineFromFirestore(deletedId);
    setAdminMessage(t("routineDeleted"), "success");
    state.adminDraft = null;
    state.adminRoutineScreen = "list";
    const nextRoutineId = getAdminRoutineIds()[0] || (state.isAdmin ?"dario" : "");
    if (nextRoutineId && !routines[nextRoutineId]) {
      routines[nextRoutineId] = createEmptyRoutine(nextRoutineId);
    }
    if (nextRoutineId) {
      setAdminDraftFromRoutine(nextRoutineId);
    } else {
      state.adminEditorMode = "";
      state.adminRoutineBasicsOpen = false;
      state.adminRoutineId = "";
    }
    if (state.selectedRoutine === deletedId) {
      selectRoutine(routines[nextRoutineId] ?nextRoutineId : "pending");
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
  const exercise = getActiveRoutine()?.exerciseLibrary?.[exerciseKey];
  if (!exercise) return;
  const prescription = phasePrescription(exercise, weekNumber);
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
    localStorage.setItem(PENDING_ACCOUNT_ROLE_KEY, accountRole?.value === "trainer" ?"trainer" : "student");
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
  const getTarget = (event) => (event.target?.nodeType === Node.TEXT_NODE ?event.target.parentElement : event.target);
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

function isRutfitStandalone() {
  return window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator.standalone === true ||
    document.referrer.startsWith("android-app://");
}

function isMobileBrowser() {
  const ua = navigator.userAgent || "";
  const hasTouch = navigator.maxTouchPoints > 0 || "ontouchstart" in window;
  const mobileSize = window.matchMedia?.("(max-width: 820px)")?.matches;
  const mobileUa = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  const webView = /; wv\)|\bwv\b|Version\/[\d.]+.*Chrome\/[\d.]+.*Mobile Safari/i.test(ua) || Boolean(window.ReactNativeWebView);
  return !webView && hasTouch && (mobileSize || mobileUa);
}

function isIosSafariLike() {
  const ua = navigator.userAgent || "";
  return /iPhone|iPad|iPod/i.test(ua) && !/CriOS|FxiOS|EdgiOS/i.test(ua);
}

function updateInstallWall() {
  if (!installWall) return;
  const shouldBlock = isMobileBrowser() && !isRutfitStandalone();
  installWall.classList.toggle("is-hidden", !shouldBlock);
  document.body.classList.toggle("install-wall-active", shouldBlock);

  if (!shouldBlock) return;

  if (installHelp) {
    installHelp.classList.toggle("is-visible", isIosSafariLike() || !deferredInstallPrompt);
    installHelp.innerHTML = isIosSafariLike()
      ? `<strong>En iPhone:</strong> tocá Compartir y después “Agregar a pantalla de inicio”.`
      : installCompletedInBrowser
        ? `<strong>RutFit ya está instalada:</strong> cerrá esta pestaña y abrí la app desde el ícono de tu pantalla de inicio.`
        : `<strong>Si no abre el instalador:</strong> tocá el menú del navegador y elegí “Instalar app” o “Agregar a pantalla de inicio”.`;
  }

  if (installAppButton) {
    installAppButton.textContent = deferredInstallPrompt
      ? "Instalar"
      : installCompletedInBrowser
        ? "Abrir desde el ícono instalado"
        : "Ver cómo instalar";
  }
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallWall();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installCompletedInBrowser = true;
  updateInstallWall();
});

installAppButton?.addEventListener("click", async () => {
  if (isRutfitStandalone()) {
    updateInstallWall();
    return;
  }

  if (!deferredInstallPrompt) {
    installHelp?.classList.add("is-visible");
    return;
  }

  installAppButton.disabled = true;
  try {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    updateInstallWall();
  } finally {
    installAppButton.disabled = false;
  }
});

window.addEventListener("resize", updateInstallWall);
window.addEventListener("DOMContentLoaded", updateInstallWall);

window.addEventListener("load", () => {
  updateInstallWall();
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
    localStorage.setItem(AUTH_PERSISTENCE_KEY, rememberSession.checked ?"local" : "session");
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
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      handleAuthenticatedUser(user);
    } else {
      showAuthScreen();
    }
  });
}
