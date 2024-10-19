<!-- Script para animar los gráficos -->
<script>
    // Función para animar un gráfico desde 0% a un valor final
    function animateChart(chart, finalValue) {
        let currentValue = 0;
        const step = finalValue / 100;
        const interval = setInterval(() => {
            if (currentValue >= finalValue) {
                clearInterval(interval);
            } else {
                currentValue += step;
                chart.data.datasets[0].data = [currentValue, 100 - currentValue];
                chart.update();
            }
        }, 20); // Ajuste la velocidad de la animación cambiando el tiempo de intervalo
    }

    // Configuración de "Nuevos Clientes"
    const newClientsCtx = document.getElementById('newClientsChart').getContext('2d');
    const newClientsChart = new Chart(newClientsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Clientes Nuevos', 'Clientes Existentes'],
            datasets: [{
                data: [0, 100], // Inicialmente 0% para animación
                backgroundColor: ['#4caf50', '#f1f1f1'], // Colores
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
        }
    });

    // Configuración de "Uso de WhatsApp"
    const whatsappCtx = document.getElementById('whatsappUsageChart').getContext('2d');
    const whatsappChart = new Chart(whatsappCtx, {
        type: 'doughnut',
        data: {
            labels: ['Usan WhatsApp', 'No usan WhatsApp'],
            datasets: [{
                data: [0, 100], // Inicialmente 0% para animación
                backgroundColor: ['#25d366', '#f1f1f1'], // Colores
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
        }
    });

    // Configuración de "Uso de Celular"
    const mobileCtx = document.getElementById('mobileUsageChart').getContext('2d');
    const mobileChart = new Chart(mobileCtx, {
        type: 'doughnut',
        data: {
            labels: ['Usuarios con Celular', 'Usuarios sin Celular'],
            datasets: [{
                data: [0, 100], // Inicialmente 0% para animación
                backgroundColor: ['#4285f4', '#f1f1f1'], // Colores
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
        }
    });

    // Iniciar animaciones para cada gráfico
    window.onload = () => {
        animateChart(newClientsChart, 75); // Animar a 75%
        animateChart(whatsappChart, 100); // Animar a 100%
        animateChart(mobileChart, 99); // Animar a 99%
    };
</script>