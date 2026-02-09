# Sistema de Gestión de Tareas (To-Do List) 📝

Aplicación web SPA (Single Page Application) para la gestión eficiente de tareas diarias. Proyecto integrador para la asignatura de Ingeniería de Software.

## 🚀 Funcionalidades
- [x] **Agregar Tareas:** Permite ingresar descripciones dinámicas.
- [x] **Estado:** Marcar tareas como completadas (efecto visual).
- [x] **Eliminación:** Borrar tareas de la lista.
- [x] **Validación:** Impide crear tareas vacías.

## 🛠️ Tecnologías
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6).
* **Control de versiones:** Git & GitHub.
* **IDE:** Visual Studio Code.

## 📐 Arquitectura del Sistema

### 1. Diagrama de Arquitectura (MVC Simplificado)
```mermaid
graph TD
    A[index.html] -->|Importa| B(styles.css)
    A -->|Importa| C(script.js)
    C -->|Manipula DOM| A
    User((Usuario)) -->|Interactúa| A


graph TD
    A[Inicio] --> B{¿El campo está vacío?}
    B -- Sí --> C[Mostrar Alerta 'Escribe una tarea']
    C --> D[Fin]
    B -- No --> E[Crear elemento LI]
    E --> F[Agregar botón eliminar]
    F --> G[Agregar a la lista UL]
    G --> H[Limpiar Input]
<<<<<<< HEAD:lectura.md
    H --> I[Fin]
=======
    H --> I[Fin]
    ---

### 2. Los Comandos (Commits) para la Terminal
Una vez guardes el archivo (`Ctrl + S`), abre la terminal de VS Code y ejecuta estos 3 comandos en orden:

1.  **Prepara el archivo:**
    ```bash
    git add .
    ```
2.  **Guarda el cambio (Este será tu commit final):**
    ```bash
    git commit -m "docs: agrega documentacion final del proyecto"
    ```
3.  **Súbelo a GitHub:**
    ```bash
    git push
    ```
>>>>>>> 2e4d98e4facf13fcda73b0fc8d230ff86ec8eb67:README.md
