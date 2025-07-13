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
  }
};

function toggleCourse(btn) {
  const course = btn.dataset.course;
  btn.classList.toggle("passed");
  btn.disabled = true;
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

