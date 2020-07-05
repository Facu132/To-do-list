(function(){
    // Variables
    var lista = document.getElementById("lista"),
        escribirTarea = document.getElementById("escribirTarea"),
        nuevaTarea = document.getElementById("agregarElemento"); 

    // Funciones
    var comprobarInput = function(){
        escribirTarea.className = "";
        escribirTarea.setAttribute("placeholder" , "Agrega tu nueva tarea")
    };
    var agregarTarea = function(){
        var tarea = escribirTarea.value,
        nuevaTareaEscrita = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

        if(tarea == "") {
            escribirTarea.setAttribute("placeholder", "agregue una tarea valida");
            escribirTarea.className = "error";
            return false;
        }
        
// Agrego contenido, le agrego enlace, lo pongo dentro de "li"
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTareaEscrita.appendChild(enlace);
        lista.appendChild(nuevaTareaEscrita);

// Borrar lo que escribí una vez que se agrego a la lista

        escribirTarea.value = "";
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
    }
    };

    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    // Eventos

    escribirTarea.addEventListener("click",comprobarInput);
    nuevaTarea.addEventListener("click",  agregarTarea);

    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    
        
    }

}());