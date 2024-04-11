// JavaScript para cargar proyectos y habilidades dinámicamente

// Datos de ejemplo
const proyectos = [
    { nombre: "Proyecto 1", descripcion: "Descripción del Proyecto 1" },
    { nombre: "Proyecto 2", descripcion: "Descripción del Proyecto 2" },
    { nombre: "Proyecto 3", descripcion: "Descripción del Proyecto 3" }
];

const habilidades = ["Python", "R", "SQL", "Machine Learning", "Data Visualization"];

// Función para cargar proyectos
function cargarProyectos() {
    const proyectosSection = document.getElementById("proyectos");
    proyectos.forEach(proyecto => {
        const proyectoElement = document.createElement("div");
        proyectoElement.innerHTML = `<h3>${proyecto.nombre}</h3><p>${proyecto.descripcion}</p>`;
        proyectosSection.appendChild(proyectoElement);
    });
}

// Función para cargar habilidades
function cargarHabilidades() {
    const habilidadesSection = document.getElementById("habilidades");
    const habilidadesList = document.createElement("ul");
    habilidades.forEach(habilidad => {
        const habilidadItem = document.createElement("li");
        habilidadItem.textContent = habilidad;
        habilidadesList.appendChild(habilidadItem);
    });
    habilidadesSection.appendChild(habilidadesList);
}

// Cargar proyectos y habilidades al cargar la página
window.onload = function() {
    cargarProyectos();
    cargarHabilidades();
};

document.getElementById('linkedinBtn').addEventListener('click', abrirLinkedIn);
document.getElementById('whatsappBtn').addEventListener('click', abrirWhatsApp);
document.getElementById('githubBtn').addEventListener('click', abrirGitHub);
document.getElementById('emailBtn').addEventListener('click', abrirCorreo);

// Función para abrir LinkedIn
function abrirLinkedIn() {
    // Reemplaza 'TU_LINKEDIN' con tu perfil de LinkedIn
    window.open('https://www.linkedin.com/in/cristian-toro-46799a276', '_blank');
}

// Función para abrir WhatsApp
function abrirWhatsApp() {
    // Reemplaza 'TU_NUMERO' con tu número de WhatsApp (debe incluir código de país)
    window.open('https://wa.me/3146432257', '_blank');
}

// Función para abrir GitHub
function abrirGitHub() {
    // Reemplaza 'TU_GITHUB' con tu perfil de GitHub
    window.open('https://github.com/Cristianfax-23', '_blank');
}

// Función para abrir Correo electrónico
function abrirCorreo() {
    // Reemplaza 'TU_CORREO' con tu dirección de correo electrónico
    window.open('mailto:cristiantoronavarro.fax@gmail.com', '_blank');
}

// Asignar eventos a los botones
