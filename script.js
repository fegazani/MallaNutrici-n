// Datos de la malla (cursos, requisitos y a qué abren)
const cursos = [
  { id: "curso1", nombre: "Fundamentos de los Alimentos y Nutrición", semestre: "1º", requiere: [], abre: ["curso15"] },
  { id: "curso2", nombre: "Alimentos", semestre: "1º", requiere: [], abre: ["curso13"] },
  { id: "curso3", nombre: "Biología Celular", semestre: "1º", requiere: [], abre: ["curso7", "curso8"] },
  { id: "curso4", nombre: "Química General y Orgánica", semestre: "1º", requiere: [], abre: ["curso6", "curso9"] },
  { id: "curso5", nombre: "Matemáticas Elemental", semestre: "1º", requiere: [], abre: ["curso6", "curso15"] },
  { id: "curso6", nombre: "Química de los Alimentos", semestre: "2º", requiere: ["curso4", "curso5"], abre: ["curso12"] },
  { id: "curso7", nombre: "Microbiología", semestre: "2º", requiere: ["curso3"], abre: ["curso13"] },
  { id: "curso8", nombre: "Bioquímica Nutricional", semestre: "2º", requiere: ["curso4"], abre: ["curso16"] },
  { id: "curso9", nombre: "Morfología", semestre: "2º", requiere: ["curso3"], abre: ["curso16"] },
  { id: "curso10", nombre: "Inglés I", semestre: "2º", requiere: [], abre: ["curso11"] },
  { id: "curso11", nombre: "Inglés II", semestre: "3º", requiere: ["curso10"], abre: ["curso24"] },
  { id: "curso12", nombre: "Técnicas Dietéticas", semestre: "3º", requiere: ["curso6"], abre: ["curso20"] },
  { id: "curso13", nombre: "Fisiopatología General y de Sistemas I", semestre: "3º", requiere: ["curso8", "curso9"], abre: ["curso14", "curso17"] },
  { id: "curso14", nombre: "Nutrición Humana", semestre: "3º", requiere: ["curso13"], abre: ["curso17", "curso18"] },
  { id: "curso15", nombre: "Higiene y Control de los Alimentos", semestre: "3º", requiere: ["curso7", "curso2"], abre: ["curso20"] },
  { id: "curso16", nombre: "Psicología y Educación en Salud", semestre: "3º", requiere: [], abre: ["curso19", "curso21"] },
  { id: "curso17", nombre: "Salud Pública I", semestre: "3º", requiere: ["curso1", "curso5"], abre: ["curso22"] },
  { id: "curso18", nombre: "Inglés III", semestre: "4º", requiere: ["curso11"], abre: ["curso23"] },
  { id: "curso19", nombre: "Bromatología y Tecnología de los Alimentos", semestre: "4º", requiere: ["curso12", "curso15"], abre: ["curso26"] },
  { id: "curso20", nombre: "Fisiopatología General y de Sistemas II", semestre: "4º", requiere: ["curso13"], abre: ["curso27", "curso28"] },
  { id: "curso21", nombre: "Salud Pública II", semestre: "4º", requiere: ["curso17", "curso16"], abre: ["curso29", "curso30"] },
  { id: "curso22", nombre: "Inglés IV", semestre: "5º", requiere: ["curso18"], abre: ["curso33"] },
  { id: "curso23", nombre: "Razonamiento científico y Tecnología de información", semestre: "4º", requiere: ["curso6"], abre: ["curso31"] }, // Aquí ajusta para que tenga sentido
  { id: "curso24", nombre: "Educación en Alimentación y Nutrición", semestre: "5º", requiere: ["curso16"], abre: ["curso32"] },
  { id: "curso25", nombre: "Evaluación Nutricional en el Ciclo de Vital", semestre: "5º", requiere: ["curso20", "curso14"], abre: ["curso34", "curso35", "curso32"] },
  { id: "curso26", nombre: "Nutrición y Alimentación en el Ciclo de Vital", semestre: "5º", requiere: ["curso20", "curso14"], abre: ["curso34", "curso36"] },
  { id: "curso27", nombre: "Metodología de la Investigación", semestre: "5º", requiere: ["curso21", "curso14"], abre: ["curso37"] },
  { id: "curso28", nombre: "Administración y Gestión en Salud", semestre: "5º", requiere: ["curso21", "curso14"], abre: ["curso38"] },
  { id: "curso29", nombre: "Inglés IV", semestre: "5º", requiere: ["curso22"], abre: ["curso36"] },
  { id: "curso30", nombre: "Dietoterapia del Adulto y Adulto Mayor", semestre: "6º", requiere: ["curso25", "curso26"], abre: ["curso39"] },
  { id: "curso31", nombre: "Proyectos de Intervención Alimentario Nutricional", semestre: "6º", requiere: ["curso25", "curso27"], abre: ["curso40"] },
  { id: "curso32", nombre: "Farmacología en Nutrición", semestre: "6º", requiere: ["curso26", "curso29"], abre: ["curso39"] },
  { id: "curso33", nombre: "Alimentación Institucional I", semestre: "6º", requiere: ["curso19", "curso26"], abre: ["curso41"] },
  { id: "curso34", nombre: "Gestión y Calidad I", semestre: "6º", requiere: ["curso28"], abre: ["curso42"] },
  { id: "curso35", nombre: "Integrado de Nutrición y Alimentación I", semestre: "6º", requiere: ["curso24", "curso25"], abre: ["curso39", "curso43"] },
  { id: "curso36", nombre: "Dietoterapia Materno e Infantil", semestre: "7º", requiere: ["curso30", "curso35", "curso32"], abre: ["curso44", "curso46"] },
  { id: "curso37", nombre: "Nutrición, Actividad Física y Deporte", semestre: "7º", requiere: ["curso36"], abre: ["curso47", "curso48", "curso49"] },
  { id: "curso38", nombre: "Nutrición Comunitaria I", semestre: "7º", requiere: ["curso31", "curso35"], abre: ["curso50", "curso51", "curso52"] },
  { id: "curso39", nombre: "Alimentación Institucional II", semestre: "7º", requiere: ["curso33"], abre: ["curso53", "curso51"] },
  { id: "curso40", nombre: "Nutrición Comunitaria II", semestre: "7º", requiere: ["curso38"], abre: ["curso47", "curso48", "curso49"] },
  { id: "curso41", nombre: "Gestión y Calidad II", semestre: "7º", requiere: ["curso34"], abre: ["curso53"] },
  { id: "curso42", nombre: "Pensamiento Crítico", semestre: "7º", requiere: ["curso23"], abre: ["curso54"] },
  { id: "curso43", nombre: "Bioética", semestre: "8º", requiere: ["curso38"], abre: ["curso47", "curso48", "curso49"] },
  { id: "curso44", nombre: "Innovación Alimentaria", semestre: "8º", requiere: ["curso39", "curso41"], abre: ["curso47", "curso48", "curso49"] },
  { id: "curso45", nombre: "Integrado de Nutrición y Alimentación II", semestre: "8º", requiere: ["curso36", "curso38", "curso39"], abre: ["curso47", "curso48", "curso49"] },
  { id: "curso46", nombre: "Responsabilidad Social", semestre: "8º", requiere: ["curso42"], abre: ["curso47", "curso48", "curso49"] },
  { id: "curso47", nombre: "Internado 1: Clínico Adulto e Infantil", semestre: "9º", requiere: ["curso43", "curso44", "curso45", "curso46"], abre: [] },
  { id: "curso48", nombre: "Internado 2: Alimentación Institucional e Innovación", semestre: "9º", requiere: ["curso43", "curso44", "curso45", "curso46"], abre: [] },
  { id: "curso49", nombre: "Internado 3: Nutrición Comunitaria", semestre: "10º", requiere: ["curso43", "curso44", "curso45", "curso46"], abre: [] }
];

// Estado para llevar control de aprobados y desbloqueados
const estadoCursos = {};

// Inicializar estado: solo cursos sin requisitos están desbloqueados
function inicializarEstado() {
  cursos.forEach(curso => {
    if (curso.requiere.length === 0) {
      estadoCursos[curso.id] = "unlocked";
    } else {
      estadoCursos[curso.id] = "blocked";
    }
  });
}

// Actualiza la interfaz visual de cada ramo según estado
function actualizarVisual() {
  cursos.forEach(curso => {
    const elem = document.getElementById(curso.id);
    elem.classList.remove("blocked", "unlocked", "approved");
    elem.classList.add(estadoCursos[curso.id]);
  });
}

// Función para aprobar un ramo si está desbloqueado
function aprobarRamo(id) {
  if (estadoCursos[id] !== "unlocked") return;
  estadoCursos[id] = "approved";

  // Desbloquear los cursos que requieren este ramo y verificar si ya se cumplen todos los requisitos
  cursos.forEach(curso => {
    if (curso.requiere.includes(id)) {
      const todosRequisitosAprobados = curso.requiere.every(reqId => estadoCursos[reqId] === "approved");
      if (todosRequisitosAprobados && estadoCursos[curso.id] !== "approved") {
        estadoCursos[curso.id] = "unlocked";
      }
    }
  });

  actualizarVisual();
}

// Crear los elementos en HTML y agregar listeners
function crearMalla() {
  const container = document.querySelector(".malla-container");
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = curso.id;
    div.title = `Semestre: ${curso.semestre}\nRequiere: ${curso.requiere.length ? curso.requiere.map(r => cursos.find(c => c.id === r).nombre).join(", ") : "Ninguno"}`;
    div.innerHTML = `
      <h4>${curso.nombre}</h4>
      <small>Semestre: ${curso.semestre}</small>
      <div class="checkmark">✓</div>
    `;
    div.addEventListener("click", () => aprobarRamo(curso.id));
    container.appendChild(div);
  });
}

// Al cargar la página
window.onload = () => {
  inicializarEstado();
  crearMalla();
  actualizarVisual();
};
