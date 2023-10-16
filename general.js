


document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".social-icons a img");

    socialIcons.forEach((icon) => {
        icon.addEventListener("mouseover", () => {
            icon.style.filter = "grayscale(0%)"; // Cambia el color al pasar el cursor
        });

        icon.addEventListener("mouseout", () => {
            icon.style.filter = "grayscale(100%)"; // Vuelve al color original al quitar el cursor
        });
    });

    // Obtener elementos del menú
    const menuLinks = document.querySelectorAll(".menu a");

    // Escuchar el evento de clic en los enlaces del menú
    menuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            // Prevenir la acción predeterminada de los enlaces
            event.preventDefault();

            // Remover la clase "active" de todos los enlaces
            menuLinks.forEach((menuLink) => {
                menuLink.classList.remove("active");
            });

            // Agregar la clase "active" al enlace clicado
            link.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector(".boton");

    // Escuchar el evento de clic en el botón
    boton.addEventListener("click", function () {
        // Agrega aquí el código que deseas ejecutar cuando se hace clic en el botón.
        // Por ejemplo, puedes redirigir a otra página o mostrar un mensaje.
        alert("¡Has hecho clic en el botón!");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario form");

    formulario.addEventListener("submit", function (event) {
        // Agrega aquí la lógica de validación del formulario
        if (!validarFormulario()) {
            event.preventDefault(); // Evita que el formulario se envíe si no es válido
        }
    });

    function validarFormulario() {
        // Agrega aquí la lógica de validación y retorna true si es válido, false si no
        // Por ejemplo, verifica que los campos obligatorios estén completos
        return true; // Cambia esto según tus necesidades
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario form");
    const botonEnviar = document.querySelector(".formulario button");

    formulario.addEventListener("submit", function (event) {
        // Aquí puedes agregar la lógica de validación del formulario
        if (!validarFormulario()) {
            event.preventDefault(); // Evita que el formulario se envíe si no es válido
        }
    });

    function validarFormulario() {
        // Agrega aquí la lógica de validación y retorna true si es válido, false si no
        // Por ejemplo, verifica que los campos estén completos
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const asunto = document.getElementById("asunto").value;
        const mensaje = document.getElementById("mensaje").value;

        if (!nombre || !correo || !telefono || !asunto || !mensaje) {
            alert("Por favor, complete todos los campos.");
            return false;
        }

        // Aquí puedes agregar más reglas de validación según tus necesidades
        return true; // Retorna true si el formulario es válido
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp-button");
    const tooltip = whatsappButton.querySelector(".tooltip");

    whatsappButton.addEventListener("mouseenter", function () {
        tooltip.style.opacity = "1";
        tooltip.style.pointerEvents = "auto";
    });

    whatsappButton.addEventListener("mouseleave", function () {
        tooltip.style.opacity = "0";
        tooltip.style.pointerEvents = "none";
    });

    whatsappButton.addEventListener("click", function (event) {
        event.preventDefault();
        // Agrega aquí el código para abrir el enlace de WhatsApp
        // Por ejemplo:
        window.location.href = "https://api.whatsapp.com/send?phone=TUNUMERO";
    });
});



      
  
  





  