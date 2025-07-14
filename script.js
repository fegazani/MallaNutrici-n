// script.js

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
  "Inglés II": {
    prereq: ["Inglés I"],
    abre: ["Inglés III"]
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
  "Dietoterapia del Adulto y Adulto Mayor": {
    prereq: ["Evaluación Nutricional en el Ciclo de Vital"],
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
  "Nutrición, Actividad Física y Deporte": {
    prereq: ["Dietoterapia Materno e Infantil"]
  },
  "Nutrición Comunitaria I": {
    prereq: ["Proyectos de Intervención Alimentario Nutricional"],
    abre: ["Nutrición Comunitaria II", "Integrado de Nutrición y Alimentación II", "Bioética"]
  },
  "Alimentación Institucional II": {
    prereq: ["Alimentación Institucional I"],
    abre: ["Innovación Alimentaria", "Integrado de Nutrición y Alimentación II"]
  },
  "Nutrición Comunitaria II": {
    prereq: ["Nutrición Comunitaria I"],
    abre: ["Internado 3: Nutrición Comunitaria"]
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
    prereq: ["Nutrición Comunitaria I"]
  },
  "Innovación Alimentaria": {
    prereq: ["Alimentación Institucional II", "Gestión y Calidad II"],
    abre: ["Internado 2: Alimentación Institucional e Innovación"]
  },
  "Integrado de Nutrición y Alimentación II": {
    prereq: ["Dietoterapia Materno e Infantil", "Nutrición Comunitaria I", "Alimentación Institucional II"],
    abre: ["Internado 1: Clínico Adulto e Infantil", "Internado 2: Alimentación Institucional e Innovación", "Internado 3: Nutrición Comunitaria"]
  },
  "Responsabilidad Social": {
    prereq: ["Pensamiento Crítico"]
  },
  "Inglés IV": {
    prereq: ["Inglés III"]
  },
  "Internado 1: Clínico Adulto e Infantil": {
    prereq: ["Integrado de Nutrición y Alimentación II"]
  },
  "Internado 2: Alimentación Institucional e Innovación": {
    prereq: ["Integrado de Nutrición y Alimentación II", "Innovación Alimentaria"]
  },
  "Internado 3: Nutrición Comunitaria": {
    prereq: ["Nutrición Comunitaria II", "Integrado de Nutrición y Alimentación II"]
  }
};

window.onload = () => {
  const aprobadoGuardado = JSON.parse(localStorage.getItem("cursosAprobados")) || [];

  document.querySelectorAll(".course-btn").forEach(btn => {
    const course = btn.dataset.course;
    if (!cursos[course] || cursos[course].prereq.length === 0) {
      btn.disabled = false;
      btn.style.backgroundColor = "#ffffff"; // blanco para cursos sin prereq
    } else {
      btn.disabled = true;
      btn.style.backgroundColor = ""; // reset
    }
    if (aprobadoGuardado.includes(course)) {
      btn.classList.add("passed");
      btn.disabled = true;
      btn.style.backgroundColor = ""; // dejar estilo passed (morado)
    }
  });

  aprobadoGuardado.forEach(course => desbloquearCursos(course));
  marcarDisponibles();
};

function toggleCourse(btn) {
  const course = btn.dataset.course;
  if (btn.classList.contains("passed")) return;

  btn.classList.add("passed");
  btn.disabled = true;
  btn.style.backgroundColor = ""; // morado passed

  const aprobadoGuardado = JSON.parse(localStorage.getItem("cursosAprobados")) || [];
  if (!aprobadoGuardado.includes(course)) {
    aprobadoGuardado.push(course);
    localStorage.setItem("cursosAprobados", JSON.stringify(aprobadoGuardado));
  }

  desbloquearCursos(course);
  marcarDisponibles();
}

function desbloquearCursos(course) {
  const opened = cursos[course]?.abre || [];
  opened.forEach(next => {
    const nextBtn = document.querySelector(`button[data-course='${next}']`);
    if (nextBtn) {
      const prereqMet = cursos[next].prereq.every(p =>
        document.querySelector(`button[data-course='${p}']`)?.classList.contains("passed")
      );
      if (prereqMet) {
        nextBtn.disabled = false;
      }
    }
  });
}

function marcarDisponibles() {
  document.querySelectorAll(".course-btn").forEach(btn => {
    if (!btn.classList.contains("passed") && !btn.disabled) {
      btn.style.backgroundColor = "#ffffff"; // blanco para disponibles
    }
  });
}
