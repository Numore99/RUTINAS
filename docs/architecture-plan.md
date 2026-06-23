# RutFit - Plan de modularizacion gradual

Este plan divide la app sin romper el flujo actual. `script.js` sigue siendo el punto de entrada hasta que cada bloque este probado.

## Reglas

- Migrar una pantalla por vez.
- No mezclar refactor con cambios visuales grandes.
- Despues de cada paso ejecutar `node --check script.js`.
- Probar login, navegacion inferior y guardado antes de seguir.
- Firebase compat se mantiene hasta terminar la separacion de vistas.

## Estructura objetivo

```txt
src/
  core/
    state.js
    firebase.js
    i18n.js
    utils.js
  data/
    default-routines.js
    exercises.js
  render/
    navigation.js
    student-home.js
    student-routine.js
    student-progress.js
    student-account.js
    trainer-home.js
    trainer-students.js
    trainer-routines.js
    admin.js
    modals.js
  actions/
    auth-actions.js
    profile-actions.js
    routine-actions.js
    trainer-actions.js
    progress-actions.js
  styles/
    base.css
    layout.css
    student.css
    trainer.css
    routines.css
    account.css
    modals.css
```

## Orden recomendado

1. Mover `renderStudentHomeV2()` a `src/render/student-home.js`.
2. Mover navegacion inferior e historial a `src/render/navigation.js`.
3. Mover pantallas de cuenta/perfil a `src/render/student-account.js`.
4. Mover pantallas de rutina alumno a `src/render/student-routine.js`.
5. Mover progreso, historial y medidas a `src/render/student-progress.js`.
6. Mover inicio entrenador/admin a `src/render/trainer-home.js`.
7. Mover alumnos, solicitudes y asignaciones a `src/render/trainer-students.js`.
8. Mover CRUD de rutinas a `src/render/trainer-routines.js`.
9. Mover acciones Firebase a `src/actions/*`.
10. Convertir a `<script type="module">` cuando las pantallas principales ya esten separadas.

## Primer bloque a migrar

`renderStudentHomeV2()` es el bloque mas seguro para empezar porque:

- No escribe Firestore.
- Solo renderiza datos existentes.
- Tiene eventos simples: progreso, notificaciones y abrir rutina/dia.

