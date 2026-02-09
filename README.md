# Sistema de Gestion de Tareas

Aplicacion web SPA para la gestion de tareas.

## Funcionalidades
- [x] Agregar Tareas
- [x] Estado Completado
- [x] Eliminar Tareas

## Arquitectura

### 1. Diagrama de Arquitectura
```mermaid
graph TD
    A["index.html"] -->|Importa| B("styles.css")
    A -->|Importa| C("script.js")
    C -->|Manipula DOM| A
    User(("Usuario")) -->|Interactua| A 

    graph TD
    A["Inicio"] --> B{"Campo vacio?"}
    B -- Si --> C["Mostrar Alerta"]
    C --> D["Fin"]
    B -- No --> E["Crear Tarea"]
    E --> F["Boton Eliminar"]
    F --> G["Agregar a Lista"]
    G --> H["Limpiar Input"]
    H --> I["Fin"]