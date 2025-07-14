// Datos de la malla (cursos, requisitos y a qué abren)
const cursos = {
  "Fundamentos de los Alimentos y Nutrición": {
    prereq: [],
    abre: ["Salud Pública I"]
  },
  "Alimentos": {
    prereq: [],
    abre: ["Higiene y Control de los Alimentos"]
  },
  "Biología Celular": {
    prereq: [],
    abre: ["Microbiología", "Morfología"]
  },
  "Química General y Orgánica": {
    prereq: [],
    abre: ["Química de los Alimentos", "Bioquímica Nutricional"]
  },
  "Matemáticas Elemental": {
    prereq: [],
    abre: ["Química de los Alimentos", "Salud Pública I"]
  },
  "Habilidades Comunicativas": {
    prereq: [],
    abre: ["Razonamiento científico y Tecnología de información"]
  },
  "Química de los Alimentos": {
    prereq: ["Química General y Orgánica", "Matemáticas Elemental"],
    abre: ["Técnicas Dietéticas"]
  },
  "Microbiología": {
    prereq: ["Biología Celular"],
    abre: ["Higiene y Control de los Alimentos"]
  },
  "Bioquímica Nutricional": {
    prereq: ["Química General y Orgánica"],
    abre: ["Fisiopatología General y de Sistemas I"]
  },
  "Morfología": {
    prereq: ["Biología Celular"],
    abre: ["Fisiopatología General y de Sistemas I"]
  },
  "Inglés I": {
    prereq: [],
    abre: ["Inglés II"]
  },
  "Técnicas Dietéticas": {
    prereq: ["Química de los Alimentos"],
    abre: ["Bromatología y Tecnología de los Alimentos"]
  },
  "Fisiopatología General y de Sistemas I": {
    prereq: ["Bioquímica Nutricional", "Morfología"],
    abre: ["Fisiopatología General y de Sistemas II", "Nutrición Humana"]
  },
  "Higiene y Control de los Alimentos": {
    prereq: ["Microbiología", "Alimentos"],
    abre: ["Bromatología y Tecnología de los Alimentos"]
  },
  "Psicología y Educación en Salud": {
    prereq: [],
    abre: ["Educación en Alimentación y Nutrición", "Salud Pública II"]
  },
  "Salud Pública I": {
    prereq: ["Fundamentos de los Alimentos y Nutrición", "Matemáticas Elemental"],
    abre: ["Salud Pública II"]
  },
  "Inglés II": {
    prereq: ["Inglés I"],
    abre: ["Inglés III"]
  },
  "Bromatología y Tecnología de los Alimentos": {
    prereq: ["Técnicas Dietéticas", "Higiene y Control de los Alimentos"],
    abre: ["Alimentación Institucional I"]
  },
  "Fisiopatología General y de Sistemas II": {
    prereq: ["Fisiopatología General y de Sistemas I"],
    abre: ["Evaluación Nutricional en el Ciclo de Vital", "Nutrición y Alimentación en el Ciclo de Vital"]
  },
  "Nutrición Humana": {
    prereq: ["Fisiopatología General y de Sistemas I"],
    abre: ["Evaluación Nutricional en el Ciclo de Vital", "Nutrición y Alimentación en el Ciclo de Vital"]
  },
  "Salud Pública II": {
    prereq: ["Salud Pública I", "Psicología y Educación en Salud"],
    abre: ["Metodología de la Investigación", "Administración y Gestión en Salud"]
  },
  "Inglés III": {
    prereq: ["Inglés II"],
    abre: ["Inglés IV"]
  },
  "Razonamiento científico y Tecnología de información": {
    prereq: ["Habilidades Comunicativas"],
    abre: ["Pensamiento Crítico"]
  },
  "Educación en Alimentación y Nutrición": {
    prereq: ["Psicología y Educación en Salud"],
    abre: ["Integrado de Nutrición y Alimentación I"]
  },
  "Evaluación Nutricional en el Ciclo de Vital": {
    prereq: ["Fisiopatología General y de Sistemas II", "Nutrición Humana"],
    abre: ["Dietoterapia del Adulto y Adulto Mayor", "Proyectos de Intervención Alimentario Nutricional", "Integrado de Nutrición y Alimentación I"]
  },
  "Nutrición y Alimentación en el Ciclo de Vital": {
    prereq: ["Fisiopatología General y de Sistemas II", "Nutrición Humana"],
    abre: ["Dietoterapia del Adulto y Adulto Mayor", "Farmacología en Nutrición"]
  },
  "Metodología de la Investigación": {
    prereq: ["Salud Pública II", "Nutrición Humana"],
    abre: ["Proyectos de Intervención Alimentario Nutricional"]
  },
  "Administración y Gestión en Salud": {
    prereq: ["Salud Pública II", "Nutrición Humana"],
    abre: ["Gestión y Calidad I"]
  },
  "Inglés IV": {
    prereq: ["Inglés III"],
    abre: ["Farmacología en Nutrición"]
  },
  "Dietoterapia del Adulto y Adulto Mayor": {
    prereq: ["Evaluación Nutricional en el Ciclo de Vital", "Nutrición y Alimentación en el Ciclo de Vital"],
    abre: ["Dietoterapia Materno e Infantil"]
  },
  "Proyectos de Intervención Alimentario Nutricional": {
    prereq: ["Evaluación Nutricional en el Ciclo de Vital", "Metodología de la Investigación"],
    abre: ["Nutrición Comunitaria I"]
  },
  "Farmacología en Nutrición": {
    prereq: ["Nutrición y Alimentación en el Ciclo de Vital", "Inglés IV"],
    abre: ["Dietoterapia Materno e Infantil"]
  },
  "Alimentación Institucional I": {
    prereq: ["Bromatología y Tecnología de los Alimentos", "Nutrición y Alimentación en el Ciclo de Vital"],
    abre: ["Alimentación Institucional II"]
  },
  "Gestión y Calidad I": {
    prereq: ["Administración y Gestión en Salud"],
    abre: ["Gestión y Calidad II"]
  },
  "Integrado de Nutrición y Alimentación I": {
    prereq: ["Educación en Alimentación y Nutrición", "Evaluación Nutricional en el Ciclo de Vital"],
    abre: ["Dietoterapia Materno e Infantil", "Nutrición Comunitaria I"]
  },
  "Dietoterapia Materno e Infantil": {
    prereq: ["Dietoterapia del Adulto y Adulto Mayor", "Integrado de Nutrición y Alimentación I", "Farmacología en Nutrición"],
    abre: ["Integrado de Nutrición y Alimentación II", "Nutrición, Actividad Física y Deporte"]
  },
  "Nutrición Comunitaria I": {
    prereq: ["Proyectos de Intervención Alimentario Nutricional", "Integrado de Nutrición y Alimentación I"],
    abre: ["Nutrición Comunitaria II", "Integrado de Nutrición y Alimentación II", "Bioética"]
  },
  "Alimentación Institucional II": {
    prereq: ["Alimentación Institucional I"],
    abre: ["Innovación Alimentaria", "Integrado de Nutrición y Alimentación II"]
  },
  "Nutrición Comunitaria II": {
    prereq: ["Nutrición Comunitaria I"],
    abre: ["Internado 1: Clínico Adulto e Infantil", "Internado 2: Alimentación Institucional e Innovación", "Internado 3: Nutrición Comunitaria"]
  },
  "Gestión y Calidad II": {
    prereq: ["Gestión y Calidad I"],
    abre: ["Innovación Alimentaria"]
  },
  "Pensamiento Crítico": {
    prereq: ["Razonamiento científico y Tecnología de información"],
    abre: ["Responsabilidad Social"]
  },
  "Bioética": {
    prereq: ["Nutrición Comunitaria I"],
    abre: ["Internado 1: Clínico Adulto e Infantil", "Internado 2: Alimentación Institucional e Innovación", "Internado 3: Nutrición Comunitaria"]
  },
  "Innovación Alimentaria": {
    prereq: ["Alimentación Institucional II", "Gestión y Calidad II"],
    abre: ["Internado 1: Clínico Adulto e Infantil", "Internado 2: Alimentación Institucional e Innovación", "Internado 3: Nutrición Comunitaria"]
  },
  "Integrado de Nutrición y Alimentación II": {
    prereq: ["Dietoterapia Materno e Infantil", "Nutrición Comunitaria I", "Alimentación Institucional II"],
    abre: ["Internado 1: Clínico Adulto e Infantil", "Internado 2: Alimentación Institucional e Innovación", "Internado 3: Nutrición Comunitaria"]
  },
  "Responsabilidad Social": {
    prereq: ["Pensamiento Crítico"],
    abre: ["Internado 1: Clínico Adulto e Infantil", "Internado 2: Alimentación Institucional e Innovación", "Internado 3: Nutrición Comunitaria"]
  },
  "Nutrición, Actividad Física y Deporte": {
    prereq: ["Dietoterapia Materno e Infantil"],
    abre: ["Internado 1: Clínico Adulto e Infantil", "Internado 2: Alimentación Institucional e Innovación", "Internado 3: Nutrición Comunitaria"]
  },
  "Internado 1: Clínico Adulto e Infantil": {
    prereq: ["Integrado de Nutrición y Alimentación II", "Bioética", "Nutrición Comunitaria II", "Nutrición, Actividad Física y Deporte", "Innovación Alimentaria", "Responsabilidad Social"]
  },
  "Internado 2: Alimentación Institucional e Innovación": {
    prereq: ["Integrado de Nutrición y Alimentación II", "Bioética", "Nutrición Comunitaria II", "Nutrición, Actividad Física y Deporte", "Innovación Alimentaria", "Responsabilidad Social"]
  },
  "Internado 3: Nutrición Comunitaria": {
    prereq: ["Integrado de Nutrición y Alimentación II", "Bioética", "Nutrición Comunitaria II", "Nutrición, Actividad Física y Deporte", "Innovación Alimentaria", "Responsabilidad Social"]
  }
};

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
