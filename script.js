// 1. Seleccionar los elementos del HTML
const inputTarea = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

// 2. Función para agregar una tarea
function agregarTarea() {
    const tareaTexto = inputTarea.value;

    if (tareaTexto === '') {
        alert("Por favor escribe una tarea");
        return;
    }

    // Crear el elemento de la lista (li)
    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = tareaTexto;

    // Agregar evento para marcar como completada al hacer clic
    nuevaTareaLi.addEventListener('click', function() {
        nuevaTareaLi.classList.toggle('completada');
    });

    // Agregar botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '❌';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.style.backgroundColor = '#dc3545';
    
    botonEliminar.onclick = function() {
        listaTareas.removeChild(nuevaTareaLi);
    };

    nuevaTareaLi.appendChild(botonEliminar);

    // Agregar a la lista visible
    listaTareas.appendChild(nuevaTareaLi);

    // Limpiar el input
    inputTarea.value = '';
}

// 3. Escuchar el clic del botón
btnAgregar.addEventListener('click', agregarTarea);

// Opcional: Permitir agregar con la tecla Enter
inputTarea.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});