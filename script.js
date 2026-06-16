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
  selectedRoutine: localStorage.getItem("mma-selected-routine") || "",
  currentExerciseKey: null,
  timerSeconds: 0,
  timerInterval: null
};

let progressKey = "";
let collapsedWeeksKey = "";
let progress = {};
let collapsedWeeks = {};

const routineSelect = document.querySelector("#routineSelect");
const appHeader = document.querySelector("#appHeader");
const appMain = document.querySelector("#appMain");
const changeRoutine = document.querySelector("#changeRoutine");
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
  progressKey = routineId === "dario" ? "mma-grappling-12w-progress" : `mma-${routineId}-progress`;
  collapsedWeeksKey = routineId === "dario" ? "mma-grappling-12w-collapsed-weeks" : `mma-${routineId}-collapsed-weeks`;
  progress = JSON.parse(localStorage.getItem(progressKey) || "{}");
  collapsedWeeks = JSON.parse(localStorage.getItem(collapsedWeeksKey) || "{}");
}

function showRoutineSelector() {
  state.selectedRoutine = "";
  localStorage.removeItem("mma-selected-routine");
  closeExercise();
  routineSelect.classList.remove("is-hidden");
  appHeader.classList.add("is-hidden");
  appMain.classList.add("is-hidden");
}

function selectRoutine(routineId) {
  if (!routines[routineId]) return;
  state.selectedRoutine = routineId;
  state.search = "";
  state.filter = "todos";
  searchInput.value = "";
  filterTabs.querySelectorAll("button").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "todos"));
  localStorage.setItem("mma-selected-routine", routineId);
  loadRoutineStorage(routineId);
  renderApp();
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
    title: "Rutina PreparaciÃ³n FÃ­sica MMA",
    kicker: "12 semanas",
    exerciseLibrary,
    plan: darioPlan
  },
  bia: {
    id: "bia",
    name: "Bia",
    title: "Rutina Bia",
    kicker: "PrÃ³ximamente",
    exerciseLibrary: {},
    plan: []
  }
};

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
              <h2>Semana ${week.number}: ${week.phase.name}</h2>
              ${isCollapsed ? "" : `<p>${week.phase.modifier}</p>`}
            </div>
            <span class="week-actions">
              ${weekDone ? `<span class="week-done-label">Hecha</span>` : ""}
              <span class="week-badge">${week.phase.badge}</span>
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
  document.body.style.overflow = "hidden";
}

function closeExercise() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
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

document.querySelectorAll("[data-routine-select]").forEach((button) => {
  button.addEventListener("click", () => selectRoutine(button.dataset.routineSelect));
});

changeRoutine.addEventListener("click", showRoutineSelector);

if (state.selectedRoutine && routines[state.selectedRoutine]) {
  loadRoutineStorage(state.selectedRoutine);
  renderApp();
} else {
  showRoutineSelector();
}
