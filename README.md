# Sistema de Gestion de Tareas (To-Do List) 📝

Aplicacion web SPA para la gestion eficiente de tareas diarias.

## 🚀 Funcionalidades
- [x] **Agregar Tareas:** Permite ingresar descripciones.
- [x] **Estado:** Marcar tareas como completadas.
- [x] **Eliminacion:** Borrar tareas de la lista.

## 🛠️ Tecnologías
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6).
* **Control:** Git & GitHub.
* **IDE:** Visual Studio Code.

## 📐 Arquitectura del Sistema

### 1. Diagrama de Arquitectura
```text
[ index.html ]  <------>  [ script.js ]
      |                        ^
      | Importa                | Interactua
      v                        |
[ styles.css ]            (( USUARIO ))

( INICIO )
     |
     v
< ¿Campo Vacio? > ---- SI ----> [ Mostrar Alerta ]
     |
     NO
     |
     v
[ Crear Tarea ] --> [ Agregar a Lista ] --> ( FIN )