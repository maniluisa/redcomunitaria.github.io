/* test.js */
document.getElementById('testEmprendimiento').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const preguntas = document.querySelectorAll('input[type="radio"]:checked');
  const puntaje = Array.from(preguntas).reduce((total, pregunta) => total + parseInt(pregunta.value), 0);
  
  const resultadoDiv = document.getElementById('resultadoTest');
  
  if (puntaje <= 2) {
      resultadoDiv.innerHTML = `
          <div class="alert alert-warning">
              Potencial Emprendedor Básico. ¡Sigue aprendiendo!
          </div>
      `;
  } else if (puntaje <= 4) {
      resultadoDiv.innerHTML = `
          <div class="alert alert-info">
              Potencial Emprendedor Intermedio. ¡Estás en el camino correcto!
          </div>
      `;
  } else {
      resultadoDiv.innerHTML = `
          <div class="alert alert-success">
              Alto Potencial Emprendedor. ¡Desarrolla tu idea!
          </div>
      `;
  }
});