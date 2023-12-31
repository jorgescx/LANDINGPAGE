// script.js
function cargarContenido(seccion) {
    var contenidoDiv = document.getElementById('contenido');
    var titleContainer = document.getElementById('titleContainer')

    //cambia el contenido según la sección seleccionada
    if (seccion === 'Portales') {
        titleContainer.innerHTML = `<h2 class="title">Portales:</h2>` /*TITULO DE LA SECCIÓN*/
        contenidoDiv.innerHTML = `

            <div id="GridCard">
                <a id="PortalUAQ" class="card" href="http://portal.uaq.mx/portal/index.jsp" target="_blank">
                    <div class="card_background" style="background-image: url(#)"></div>
                    <div class="card_content">
                        <h3 class="cardTittle">Portal UAQ</h3>
                        <ul class="descripcion">
                        <li>Calificaciones</li>
                        <li>Kardex y Constancias</li>
                        <li>Registro de Materias</li>
                        <li>Reinscripciones</li>
                        </ul>
                        
                    </div>
                </a>
                <a id="PortalFIF" class="card" href="https://virtualfif.uaq.mx/portal/" target="_blank">
                    <div class="card_background" style="background-image: url(#)"></div>
                    <div class="card_content">
                        <h3 class="cardTittle">Virtual FIF</h3>
                        <p class="descripcion">Plataforma para los cursos virtuales de la Facultad de Informatica</p>
                    </div>
                </a>
                <a id="VirtualUAQ" class="card" href="https://uaqedvirtual.uaq.mx/campusvirtual/virtualuaq/login/index.php" target="_blank">
                    <div class="card_background" style="background-image: url(#)"></div>
                    <div class="card_content">
                        <h3 class="cardTittle">Virtual UAQ</h3>
                        <p class="descripcion">Registrate o inicia sesión en el Virtual UAQ</p>
                    </div>
                </a>
                <a id="PortalInf" class="card" href="https://www.uaq.mx/informatica/educon.html" target="_blank">
                    <div class="card_background" style="background-image: url(#)"></div>
                    <div class="card_content">
                        <h3 class="cardTittle">Portal de Informatica</h3>
                        <p class="descripcion">Talleres y Diplomados disponibles</p>
                    </div>
                </a>
                
</div>
`;
    } else if (seccion === 'Servicios') {
        titleContainer.innerHTML = `<h2 class="title">Servicios:</h2>` /*TITULO DE LA SECCIÓN*/
        contenidoDiv.innerHTML = `
        <div id="GridCard">
            <a id="Correo" class="card" href="https://comunidad.uaq.mx:8011/email/" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Correo Institucional</h3>
                    <p class="descripcion">Solicitud de cuenta de correo Institucional alumnos</p>
                </div>
            </a>
            <a id="Rutas" class="card" href="http://administrativa.uaq.mx/index.php/rutas" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Rutas Universitarias</h3>
                    <p class="descripcion">Consulta las rutas del transporte universitario</p>
                </div>
            </a>
            <a id="Descarga" class="card" href="https://www.uaq.mx/informatica/descargas.html" target="_blank">
            <div class="card_background" style="background-image: url(#)"></div>
            <div class="card_content">
                <h3 class="cardTittle">Descargas</h3>
                <p class="descripcion">Descarga los planes de estudio, lineamintos de titulación, entre otros</p>
            </div>
            </a>

        </div>`;
    } else if (seccion === 'Estudiantes') {
        titleContainer.innerHTML = `<h2 class="title">Estudiantes:</h2>` /*TITULO DE LA SECCIÓN*/
        contenidoDiv.innerHTML = `
        <div id="GridCard">
            <a id="Becas" class="card" href="https://becas.uaq.mx/" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Becas UAQ</h3>
                    <p class="descripcion">Consulta las becas disponibles</p>
                </div>
            </a>
            <a id="Cursos" class="card" href="https://www.uaq.mx/informatica/educon.html" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Cursos</h3>
                    <p class="descripcion">Consulta los cursos disponibles</p>
                </div>
            </a>
            <a id="Examenes" class="card" href="#" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Gestión de Examenes</h3>
                    <p class="descripcion">Solicita examenes voluntarios</p>
                </div>
            </a>
            <a id="Office" class="card" href="https://www.uaq.mx/diti/index.php/servicios/office365" target="_blank">
            <div class="card_background" style="background-image: url(#)"></div>
            <div class="card_content">
                <h3 class="cardTittle">Paqueteria de office</h3>
                <p class="descripcion">Solicita la paquetería de office</p>
            </div>
        </a>
         <a id="Credencial" class="card" href="https://dsa.uaq.mx/index.php/servicios/tramites-generales/reposicion-de-credenciales" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Reposición de credencial</h3>
                    <p class="descripcion">Solicita una reposición de tu credencial de estudiante</p>
                </div>
            </a>
        </div>`;
    }else if(seccion === 'Gestion'){
        titleContainer.innerHTML = `<h2 class="title">Adnimistración de credenciales:</h2>` /*TITULO DE LA SECCIÓN*/
        contenidoDiv.innerHTML =`
        <div id="GridCard">
            
        </div>`;
    }else if(seccion === 'Credenciales'){
        titleContainer.innerHTML = `<h2 class="title">Reposición de credenciales:</h2>` /*TITULO DE LA SECCIÓN*/
        contenidoDiv.innerHTML =`
        <div id="GridCard">
           
        </div>`
    }else if(seccion === 'Redes'){
        titleContainer.innerHTML = `<h2 class="title">Redes sociales:</h2>` /*TITULO DE LA SECCIÓN*/
        contenidoDiv.innerHTML =`
            <div id="GridCard">
            <a id="Facebook" class="card" href="https://www.facebook.com/fifuaq/?locale=es_LA" target="_blank">
                <div class="card_content">
                    <h3 class="cardTittle">Facebook</h3>
                    <p class="descripcion">Facebook UAQ Facultad de Informatica</p>
                </div>
            </a>
            <a id="Instagram" class="card" href="https://www.instagram.com/InformaticaUAQ/" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Instagram</h3>
                    <p class="descripcion">Instagram UAQ Facultad de Informatica</p>
                </div>
            </a>
            <a id="Youtube" class="card" href="https://www.youtube.com/@fifuaq" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">Youtube</h3>
                    <p class="descripcion">Canal de Youtube UAQ Facultad de Informatica</p>
                </div>
            </a>
            <a id="X" class="card" href="https://twitter.com/InformaticaUAQ" target="_blank">
                <div class="card_background" style="background-image: url(#)"></div>
                <div class="card_content">
                    <h3 class="cardTittle">X</h3>
                    <p class="descripcion">X UAQ Facultad de Informatica</p>
                </div>
            </a>
            
            </div>`
    }else if(seccion === 'Eventos'){
        titleContainer.innerHTML = `<h2 class="title">Eventos:</h2>` /*TITULO DE LA SECCIÓN*/
        contenidoDiv.innerHTML =`
        `
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const mobileNav = document.getElementById('BarraNavegacion');

    menuIcon.addEventListener('click', function() {
        mobileNav.classList.toggle('active'); // Agregar o remover la clase 'active'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const BarraNavegacion = document.getElementById('BarraNavegacion');


    // Evento de clic en el documento para ocultar la navegación
    document.addEventListener('click', function(e) {
        if (!BarraNavegacion.contains(e.target) && !menu.contains(e.target)) {
            BarraNavegacion.classList.remove('active');
        }
    });
});

// Evento de clic en un elemento de la barra de navegación
BarraNavegacion.addEventListener('click', function() {
    BarraNavegacion.classList.remove('active');
});



//precarga de la seccion portales
//Esta función debe de estar siempre al final
window.onload = function() {
    cargarContenido('Portales');
};
