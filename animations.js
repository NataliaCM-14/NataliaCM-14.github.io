document.addEventListener("DOMContentLoaded", function () {
    /**
     * Selecciona todos los elementos con la clase observable del documento.
     * @type {NodeListOf<HTMLElement>}
     */
    const sections = document.querySelectorAll(".observable");

    /**
     * Selecciona todos los botones de navegación dentro del contenedor con clase 'navbar'.
     * @type {NodeListOf<HTMLElement>}
     */
    const navLinks = document.querySelectorAll(".navbar .button");

    /**
     * Opciones de configuración para el IntersectionObserver.
     * - root: null (usa el viewport como contenedor).
     * - rootMargin: "0px" (sin margen adicional).
     * - threshold: 0.6 (se activa cuando el 60% de la sección es visible).
     * @type {IntersectionObserverInit}
     */
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6
    };

    /**
     * Observador que detecta cuándo una sección entra en el viewport.
     * Actualiza la barra de navegación para resaltar el botón correspondiente.
     *
     * @param {IntersectionObserverEntry[]} entries - Lista de entradas de intersección.
     */
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Elimina la clase 'active' de todos los enlaces de navegación
                navLinks.forEach(link => link.classList.remove("active"));

                // Selecciona el enlace correspondiente a la sección visible
                const activeLink = document.querySelector(`.navbar .button[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, observerOptions);

    /**
     * Se empieza a observar cada sección del documento.
     */
    sections.forEach(section => observer.observe(section));
});
