/* graficos.js */
document.addEventListener('DOMContentLoaded', () => {
  // Gráfico de Barras: Emprendimiento Femenino
  new Chart(document.getElementById('emprendimientoFemenino'), {
      type: 'bar',
      data: {
          labels: ['América', 'Europa', 'Asia', 'África'],
          datasets: [{
              label: 'Emprendimiento Femenino',
              data: [45, 35, 25, 15],
              backgroundColor: 'rgba(255, 99, 132, 0.6)'
          }]
      },
      options: { responsive: true, title: { display: true, text: 'Emprendimiento Femenino Mundial' } }
  });

  // Gráfico de Torta: Tipos de Emprendimiento
  new Chart(document.getElementById('tiposEmprendimiento'), {
      type: 'pie',
      data: {
          labels: ['Tecnología', 'Servicios', 'Comercio', 'Social'],
          datasets: [{
              data: [30, 25, 20, 25],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
          }]
      },
      options: { responsive: true, title: { display: true, text: 'Emprendimientos en Colombia' } }
  });

  
    // Resto de gráficos similares...
});