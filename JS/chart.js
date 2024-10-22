document.addEventListener('DOMContentLoaded', function () {
    // Datos para los gráficos
    const newClientsData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Nuevos Clientes',
            data: [30, 50, 70, 20, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    };

    const whatsappUsageData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Uso de WhatsApp',
            data: [20, 40, 60, 80, 100],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
        }]
    };

    const qrUsageData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Uso de Código QR',
            data: [50, 70, 90, 30, 60],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
        }]
    };

    // Opciones para los gráficos
    const options = {
        responsive: true,
        animation: {
            tension: {
                duration: 1000,
                easing: 'easeInOutQuad',
                from: 1,
                to: 0,
                loop: true
            },
            x: {
                duration: 1000
            },
            y: {
                duration: 1000
            }
        }
    };

    // Crear gráficos
    const newClientsChart = new Chart(document.getElementById('newClientsChart'), {
        type: 'line',
        data: newClientsData,
        options: options
    });

    const whatsappUsageChart = new Chart(document.getElementById('whatsappUsageChart'), {
        type: 'line',
        data: whatsappUsageData,
        options: options
    });

    const qrUsageChart = new Chart(document.getElementById('qrUsageChart'), {
        type: 'line',
        data: qrUsageData,
        options: options
    });
});
