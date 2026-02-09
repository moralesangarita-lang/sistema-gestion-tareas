# Sistema de Gestion de Tareas

Aplicacion web para gestionar tareas diarias.

## Funcionalidades
- [x] Agregar Tareas
- [x] Eliminar Tareas

## Arquitectura

### Diagrama 1
```mermaid
graph TD
    A["index.html"] --> B["styles.css"]
    A --> C["script.js"]
    User["Usuario"] --> A
    graph TD
    A["Inicio"] --> B{"Campo vacio?"}
    B -- Si --> C["Alerta"]
    B -- No --> D["Crear Tarea"]
    D --> E["Fin"]