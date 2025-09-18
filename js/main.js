// Creamos las constantes globales para los elemetos principales 
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');
const toDoList = document.getElementById('cont-to-do-list');
const completedList = document.getElementById('cont-completed-list');

// Creamos la funcion que nos permite crear una nueva tarea
// Esta función crea la estructura HTML y la deja en un limbo aun no la inserta en la pagina para luego ser agregada dentro de appenChild
function createToDoItem(textoItem) {
    // creamos el nodo o elemento padre o contenedor
    const item = document.createElement('div');
    // Toda etiqueta que vamos a crear es apartir de la maqueta html pre-existente
    item.classList.add('item-to-do');
    // creamos el nodo hijo del input y le agregamos el type checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    // Creamos el siguiente nodo hijo parrafo a este parrafo le asigno el valor del argumento de la función es decir lo que escribe el usuario en el campo
    const p = document.createElement('p');
    p.textContent = textoItem;
    // Creamos el ultimo nodo hijo, el boton eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = ('<i class="bi bi-x-square"></i>');
    // Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea 
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    // utilizamos el return para retornar o dar repuesta del elemnto creado ya que lo utilizaremos mas adelente
    return item;
}
// detectamos sobre el btn a agregar  el click o el evento de escucha o listen 
// para que apartir de este evento se agregue la tarea dentro del contenedor cont-to-do-list
addBtn.addEventListener('click', () => {
    const textoItem = input.value.trim();
    if (textoItem == "") {
        alert("No se puede crear una tarea vacia");
    } else {
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value = "";
        eventsToIthem(newItem);
    }
});
// La siguiente función nos permitira agregar el funcionamiento principal sobre las tareases decir marcar la tarea como completada o en dado caso eliminarla
function eventsToIthem(item) {
    // Utilizamos querySelector para capturar el input y el button que esta dentro del item
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');
    // Completar la tarea 
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            completedList.appendChild(item);
        } else {
            toDoList.appendChild(item);
        }
    });
    deleteBtn.addEventListener('click', () => {
        item.remove();
    });
}
const btnStyle = document.getElementById('change-style');
btnStyle.addEventListener('click', () => {
    const linkCss = document.getElementById('enlace-estilos');

    if (linkCss.getAttribute('href') === 'css/style.css') {
        linkCss.setAttribute('href', 'css/style-dia.css');
        btnStyle.textContent = 'Modo dia';
    } else {
        linkCss.setAttribute('href', 'css/style.css');
        btnStyle.textContent = 'Modo noche';
    }
});
// Detectar la tecla "Enter" en el input
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {  // 1. Validamos que sea Enter
        event.preventDefault();   // 2. Evitamos que se recargue la página por el formulario
        addBtn.click();           // 3. Simulamos un click en el botón "+"
    }
});
