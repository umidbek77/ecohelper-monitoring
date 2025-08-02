
    // Global variables
    let map;
    let charts = {};
    let isHeatmapActive = false;

    // Navigation
    function showSection(sectionId) {
      // Hide all sections
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Remove active class from nav links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      
      // Show selected section
      document.getElementById(sectionId).classList.add('active');
      
      // Add active class to clicked nav link
      event.target.classList.add('active');
      
      // Initialize charts for the active section
      setTimeout(() => {
        initChartsForSection(sectionId);
      }, 100);
    }

    // Initialize charts for specific section
    function initChartsForSection(sectionId) {
      switch(sectionId) {
        case 'dashboard':
          initWeeklyActivityChart();
          initIssueTypesChart();
          break;
        case 'analytics':
          initRegionChart();
          initMonthlyTrendChart();
          initBrigadeEfficiencyChart();
          break;
        case 'monitoring':
          initRealTimeMap();
          break;
        case 'environmental':
          initEnvironmentalTrendChart();
          break;
        case 'leaderboard':
          initWeeklyRankingChart();
          break;
        case 'zones':
          initZonesComparisonChart();
          break;
        case 'reports':
          initReportTypesChart();
          break;
      }
    }

    // Chart initialization functions
    function initWeeklyActivityChart() {
      if (charts.weeklyActivity) {
        charts.weeklyActivity.destroy();
      }
      
      const ctx = document.getElementById('weeklyActivityChart').getContext('2d');
      charts.weeklyActivity = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
          datasets: [{
            label: 'Xabarlar',
            data: [45, 52, 38, 65, 78, 42, 28],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#667eea',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6
          }, {
            label: 'Hal qilingan',
            data: [42, 48, 35, 58, 68, 38, 25],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#10b981',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true,
                padding: 20,
                font: {
                  weight: '600'
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              },
              ticks: {
                font: {
                  weight: '500'
                }
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  weight: '500'
                }
              }
            }
          },
          elements: {
            point: {
              hoverRadius: 8
            }
          }
        }
      });
    }

    function initIssueTypesChart() {
      if (charts.issueTypes) {
        charts.issueTypes.destroy();
      }
      
      const ctx = document.getElementById('issueTypesChart').getContext('2d');
      charts.issueTypes = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Chiqindi', 'Havodagi ifloslanish', 'Shovqin', 'Suv ifloslanishi', 'Boshqalar'],
          datasets: [{
            data: [45, 25, 15, 10, 5],
            backgroundColor: [
              '#667eea',
              '#10b981',
              '#f59e0b',
              '#06b6d4',
              '#ef4444'
            ],
            borderWidth: 0,
            hoverBorderWidth: 3,
            hoverBorderColor: '#fff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                  weight: '500'
                }
              }
            }
          },
          cutout: '65%'
        }
      });
    }

    function initRegionChart() {
      if (charts.region) {
        charts.region.destroy();
      }
      
      const ctx = document.getElementById('regionChart').getContext('2d');
charts.region = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Chilonzor', 'Yunusobod', 'Mirobod', 'Yakkasaroy', 'Sergeli'],
        datasets: [{
            label: 'Xabarlar soni',
            data: [245, 189, 167, 143, 98],
            backgroundColor: [
                'rgba(102, 126, 234, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(245, 158, 11, 0.8)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(239, 68, 68, 0.8)'
            ],
            borderColor: [
                'rgba(102, 126, 234, 1)',
                'rgba(16, 185, 129, 1)',
                'rgba(245, 158, 11, 1)',
                'rgba(6, 182, 212, 1)',
                'rgba(239, 68, 68, 1)'
            ],
            borderWidth: 1,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1e293b',
                titleFont: {
                    weight: 'bold',
                    size: 14
                },
                bodyFont: {
                    size: 12
                },
                padding: 12,
                cornerRadius: 12,
                displayColors: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0,0,0,0.05)'
                },
                ticks: {
                    font: {
                        weight: '500'
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        weight: '500'
                    }
                }
            }
        }
    }
});}

function initMonthlyTrendChart() {
    if (charts.monthlyTrend) {
        charts.monthlyTrend.destroy();
    }
    
    const ctx = document.getElementById('monthlyTrendChart').getContext('2d');
    charts.monthlyTrend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
            datasets: [{
                label: 'Xabarlar',
                data: [125, 143, 178, 156, 198, 234, 287, 265, 243, 278, 312, 298],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }, {
                label: 'Hal qilingan',
                data: [118, 135, 165, 148, 185, 218, 265, 250, 230, 260, 295, 285],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    },
                    ticks: {
                        font: {
                            weight: '500'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
}

function initBrigadeEfficiencyChart() {
    if (charts.brigadeEfficiency) {
        charts.brigadeEfficiency.destroy();
    }
    
    const ctx = document.getElementById('brigadeEfficiencyChart').getContext('2d');
    charts.brigadeEfficiency = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Tezlik', 'Sifat', 'Xabarlarga javob', 'Aholi qoniqishi', 'Tozalik darajasi'],
            datasets: [
                {
                    label: '1-Brigada',
                    data: [95, 98, 97, 96, 99],
                    backgroundColor: 'rgba(102, 126, 234, 0.2)',
                    borderColor: '#667eea',
                    borderWidth: 2,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 6
                },
                {
                    label: '2-Brigada',
                    data: [88, 92, 90, 89, 93],
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderColor: '#10b981',
                    borderWidth: 2,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0,0,0,0.1)'
                    },
                    suggestedMin: 50,
                    suggestedMax: 100,
                    ticks: {
                        font: {
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
}

function initRealTimeMap() {
    if (map) {
        map.remove();
    }
    
    // Initialize map centered on Tashkent
    map = L.map('realTimeMap').setView([41.2995, 69.2401], 12);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add sample markers for different districts
    const districts = [
        {name: "Chilonzor", coords: [41.2894, 69.2036], reports: 45, status: "green"},
        {name: "Yunusobod", coords: [41.3417, 69.2847], reports: 32, status: "green"},
        {name: "Mirobod", coords: [41.3106, 69.2806], reports: 28, status: "yellow"},
        {name: "Yakkasaroy", coords: [41.2825, 69.2664], reports: 38, status: "yellow"},
        {name: "Sergeli", coords: [41.2075, 69.2325], reports: 52, status: "red"}
    ];
    
    districts.forEach(district => {
        let iconColor;
        if (district.status === "green") iconColor = "#10b981";
        else if (district.status === "yellow") iconColor = "#f59e0b";
        else iconColor = "#ef4444";
        
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: ${iconColor}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.2);">${district.reports}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        const marker = L.marker(district.coords, {icon: icon}).addTo(map);
        marker.bindPopup(`<b>${district.name}</b><br>Xabarlar soni: ${district.reports}<br>Status: ${district.status === "green" ? "Yaxshi" : district.status === "yellow" ? "O'rtacha" : "Yomon"}`);
    });
}

function toggleHeatmap() {
    isHeatmapActive = !isHeatmapActive;
    const btn = document.querySelector('[onclick="toggleHeatmap()"]');
    
    if (isHeatmapActive) {
        btn.innerHTML = '<i class="bi bi-map"></i> Oddiy xarita';
        // Here you would add heatmap layer (requires heatmap.js or similar)
        alert("Issiqlik xaritasi aktiv qilindi (demo rejimda)");
    } else {
        btn.innerHTML = '<i class="bi bi-thermometer-half"></i> Issiqlik xaritasi';
        // Remove heatmap layer
        alert("Oddiy xarita rejimiga o'tildi");
    }
}

function updateMapData() {
    alert("Xarita ma'lumotlari yangilandi (demo rejimda)");
    // In a real app, you would fetch new data and update markers
}

// Initialize all charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    initChartsForSection('dashboard');
});

function initEnvironmentalTrendChart() {
    if (charts.environmentalTrend) {
        charts.environmentalTrend.destroy();
    }
    
    const ctx = document.getElementById('environmentalTrendChart').getContext('2d');
    charts.environmentalTrend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
            datasets: [
                {
                    label: 'CO2 (ppm)',
                    data: [320, 325, 330, 335, 340, 345, 342, 338, 335, 332, 330, 328],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    yAxisID: 'y'
                },
                {
                    label: 'Suv sarfi (kL)',
                    data: [1200, 1250, 1300, 1350, 1400, 1450, 1500, 1450, 1400, 1350, 1300, 1250],
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'CO2 (ppm)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Suv sarfi (kL)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function initWeeklyRankingChart() {
    if (charts.weeklyRanking) {
        charts.weeklyRanking.destroy();
    }
    
    const ctx = document.getElementById('weeklyRankingChart').getContext('2d');
    charts.weeklyRanking = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1-hafta', '2-hafta', '3-hafta', '4-hafta'],
            datasets: [
                {
                    label: '1-Brigada',
                    data: [95, 92, 96, 98],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderRadius: 8
                },
                {
                    label: '2-Brigada',
                    data: [88, 85, 90, 92],
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderRadius: 8
                },
                {
                    label: '3-Brigada',
                    data: [82, 80, 85, 88],
                    backgroundColor: 'rgba(245, 158, 11, 0.8)',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100,
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function initZonesComparisonChart() {
    if (charts.zonesComparison) {
        charts.zonesComparison.destroy();
    }
    
    const ctx = document.getElementById('zonesComparisonChart').getContext('2d');
    charts.zonesComparison = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Chilonzor', 'Yunusobod', 'Mirobod', 'Yakkasaroy', 'Sergeli'],
            datasets: [
                {
                    label: 'Xabarlar',
                    data: [245, 189, 167, 143, 98],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderRadius: 8
                },
                {
                    label: 'Hal qilingan',
                    data: [240, 182, 158, 130, 70],
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderRadius: 8
                },
                {
                    label: 'Qoniqish darajasi',
                    data: [98, 94, 91, 85, 72],
                    backgroundColor: 'rgba(245, 158, 11, 0.8)',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function initReportTypesChart() {
    if (charts.reportTypes) {
        charts.reportTypes.destroy();
    }
    
    const ctx = document.getElementById('reportTypesChart').getContext('2d');
    charts.reportTypes = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Kunlik', 'Haftalik', 'Oylik', 'Yillik', 'Maxsus'],
            datasets: [{
                data: [35, 25, 20, 10, 10],
                backgroundColor: [
                    '#667eea',
                    '#10b981',
                    '#f59e0b',
                    '#06b6d4',
                    '#ef4444'
                ],
                borderWidth: 0,
                hoverBorderWidth: 3,
                hoverBorderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
}

function refreshChart(chartId) {
    switch(chartId) {
        case 'weeklyActivity':
            initWeeklyActivityChart();
            break;
        // Add other charts as needed
    }
    alert('Diagramma yangilandi!');
}

function generateReport(type) {
    let reportName = '';
    switch(type) {
        case 'daily':
            reportName = 'Kunlik hisobot';
            break;
        case 'weekly':
            reportName = 'Haftalik hisobot';
            break;
        case 'monthly':
            reportName = 'Oylik hisobot';
            break;
    }
    
    // Show loading state
    const btn = event.target;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Yaratilmoqda...';
    btn.disabled = true;
    
    // Simulate report generation
    setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
        alert(`${reportName} muvaffaqiyatli yaratildi va yuklab olindi!`);
    }, 2000);
}

// Add custom marker styles
const style = document.createElement('style');
style.innerHTML = `
    .custom-marker {
        background: transparent;
        border: none;
    }
    .custom-marker div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
document.head.appendChild(style);

// Initialize all charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    initChartsForSection('dashboard');
});

// Real vaqt statistik ma'lumotlarini yangilash
function updateRealTimeStats() {
    // Bu funksiya real vaqtda statistik ma'lumotlarni yangilash uchun ishlatiladi
    // API orqali ma'lumotlarni olish va yangilash
    fetch('/api/real-time-stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalReports').textContent = data.totalReports.toLocaleString();
            document.getElementById('resolvedIssues').textContent = data.resolvedIssues.toLocaleString();
            document.getElementById('activeUsers').textContent = data.activeUsers.toLocaleString();
            document.getElementById('responseTime').textContent = data.responseTime.toFixed(1);
            
            // Statistik ko'rsatkichlardagi o'zgarishlarni yangilash
            document.querySelectorAll('.stat-change.positive').forEach(el => {
                el.innerHTML = `<i class="bi bi-arrow-up"></i> +${(Math.random() * 15 + 5).toFixed(1)}% bu oy`;
            });
            document.querySelectorAll('.stat-change.negative').forEach(el => {
                el.innerHTML = `<i class="bi bi-arrow-down"></i> -${(Math.random() * 10 + 5).toFixed(1)}% bu oy`;
            });
        })
        .catch(error => {
            console.error('Real vaqt ma\'lumotlarini olishda xato:', error);
        });
}

// Hududlardagi muammolarni real vaqtda yangilash
function updateDistrictIssues() {
    const districts = ['Chilonzor', 'Yunusobod', 'Mirobod', 'Yakkasaroy', 'Sergeli'];
    const randomData = districts.map(() => Math.floor(Math.random() * 100) + 50);
    
    if (charts.region) {
        charts.region.data.datasets[0].data = randomData;
        charts.region.update();
    }
}

// PDF hisobot yaratish funksiyasi (simulyatsiya)
function generatePDFReport(reportType) {
    return new Promise((resolve) => {
        // Simulyatsiya - haqiqiy loyihada bu PDF generatsiya kutubxonasi bo'ladi
        setTimeout(() => {
            const reports = {
                daily: { name: "Kunlik hisobot", size: "1.2 MB" },
                weekly: { name: "Haftalik hisobot", size: "3.5 MB" },
                monthly: { name: "Oylik hisobot", size: "5.8 MB" }
            };
            resolve(reports[reportType]);
        }, 1500);
    });
}

// Faylni yuklab olish funksiyasi
function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Xaritada markerlarni yangilash
function updateMapMarkers() {
    if (!map) return;
    
    // Eski markerlarni o'chirish
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    
    // Yangi markerlarni qo'shish
    const districts = [
        {name: "Chilonzor", coords: [41.2894, 69.2036], reports: Math.floor(Math.random() * 50) + 20, status: "green"},
        {name: "Yunusobod", coords: [41.3417, 69.2847], reports: Math.floor(Math.random() * 40) + 15, status: "green"},
        {name: "Mirobod", coords: [41.3106, 69.2806], reports: Math.floor(Math.random() * 60) + 10, status: "yellow"},
        {name: "Yakkasaroy", coords: [41.2825, 69.2664], reports: Math.floor(Math.random() * 70) + 20, status: "yellow"},
        {name: "Sergeli", coords: [41.2075, 69.2325], reports: Math.floor(Math.random() * 80) + 30, status: "red"}
    ];
    
    districts.forEach(district => {
        let iconColor;
        if (district.status === "green") iconColor = "#10b981";
        else if (district.status === "yellow") iconColor = "#f59e0b";
        else iconColor = "#ef4444";
        
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: ${iconColor}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.2);">${district.reports}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        const marker = L.marker(district.coords, {icon: icon}).addTo(map);
        marker.bindPopup(`<b>${district.name}</b><br>Xabarlar soni: ${district.reports}<br>Status: ${district.status === "green" ? "Yaxshi" : district.status === "yellow" ? "O'rtacha" : "Yomon"}`);
    });
}

// Real vaqt yangilash intervalid
let realTimeInterval;

// Real vaqt rejimini boshlash/to'xtatish
function toggleRealTimeUpdates() {
    const toggleBtn = document.getElementById('realTimeToggle');
    
    if (realTimeInterval) {
        clearInterval(realTimeInterval);
        realTimeInterval = null;
        toggleBtn.innerHTML = '<i class="bi bi-play-circle"></i> Real vaqt rejimini yoqish';
        toggleBtn.classList.remove('btn-danger');
        toggleBtn.classList.add('btn-success');
    } else {
        realTimeInterval = setInterval(() => {
            updateRealTimeStats();
            updateDistrictIssues();
            updateMapMarkers();
        }, 5000); // Har 5 sekundda yangilash
        
        toggleBtn.innerHTML = '<i class="bi bi-pause-circle"></i> Real vaqt rejimini o\'chirish';
        toggleBtn.classList.remove('btn-success');
        toggleBtn.classList.add('btn-danger');
    }
}

// Sahifada barcha interaktiv elementlarni ishga tushirish
function initializeInteractiveElements() {
    // Hisobot yaratish tugmalari
    document.querySelectorAll('[onclick^="generateReport"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const reportType = this.getAttribute('onclick').replace('generateReport(\'', '').replace('\')', '');
            generateReport(reportType);
        });
    });
    
    // Xaritani yangilash tugmasi
    document.querySelector('[onclick="updateMapData()"]').addEventListener('click', updateMapMarkers);
    
    // Real vaqt rejimi tugmasi
    const realTimeToggleBtn = document.createElement('button');
    realTimeToggleBtn.id = 'realTimeToggle';
    realTimeToggleBtn.className = 'btn btn-success btn-sm';
    realTimeToggleBtn.innerHTML = '<i class="bi bi-play-circle"></i> Real vaqt rejimini yoqish';
    realTimeToggleBtn.onclick = toggleRealTimeUpdates;
    
    const monitoringHeader = document.querySelector('#monitoring .chart-header');
    if (monitoringHeader) {
        monitoringHeader.appendChild(realTimeToggleBtn);
    }
}

// DOM yuklanganidan so'ng barcha funksiyalarni ishga tushirish
document.addEventListener('DOMContentLoaded', function() {
    initChartsForSection('dashboard');
    initializeInteractiveElements();
    
    // Dastlabki statistik ma'lumotlarni yangilash
    updateRealTimeStats();
    
    // Mobile menyuni boshqarish
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'btn btn-primary d-lg-none mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="bi bi-list"></i> Menyu';
    mobileMenuToggle.onclick = function() {
        document.querySelector('.sidebar').classList.toggle('mobile-visible');
    };
    
    document.querySelector('.content').prepend(mobileMenuToggle);
    
    // Mobil versiya uchun CSS qo'shish
    const mobileStyle = document.createElement('style');
    mobileStyle.innerHTML = `
        @media (max-width: 992px) {
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
                z-index: 1050;
            }
            .sidebar.mobile-visible {
                transform: translateX(0);
            }
            .mobile-menu-toggle {
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1051;
            }
            .content {
                margin-left: 0 !important;
            }
        }
    `;
    document.head.appendChild(mobileStyle);
});

// Brauzer oynasi o'lchami o'zgarganda sidebar va contentni moslashtirish
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    if (window.innerWidth > 992) {
        sidebar.style.transform = 'none';
        content.style.marginLeft = 'var(--sidebar-width)';
    } else {
        content.style.marginLeft = '0';
    }
});

// Saytni ishlatish bo'yicha qo'llanma (tutorial)
function showTutorial() {
    const tutorialSteps = [
        {
            element: '#dashboard',
            content: 'Bu bosh sahifa hisoblanadi. Bu yerda asosiy statistik ma\'lumotlar va diagrammalar ko\'rsatiladi.',
            position: 'right'
        },
        {
            element: '#analytics',
            content: 'Analitika bo\'limida hududlar va vaqt oralig\'i bo\'yicha tahlillarni ko\'rishingiz mumkin.',
            position: 'right'
        },
        {
            element: '#monitoring',
            content: 'Real vaqt monitoringida hududlardagi muammolarni xaritada ko\'rishingiz mumkin.',
            position: 'left'
        },
        {
            element: '#reports',
            content: 'Hisobotlar bo\'limida turli formatdagi hisobotlarni yaratishingiz va yuklab olishingiz mumkin.',
            position: 'left'
        }
    ];
    
    // Tutorial kutubxonasini ishga tushirish (agar mavjud bo'lsa)
    if (typeof introJs !== 'undefined') {
        introJs().setOptions({
            steps: tutorialSteps,
            nextLabel: 'Keyingi',
            prevLabel: 'Oldingi',
            doneLabel: 'Tayyor',
            skipLabel: 'O\'tkazib yuborish'
        }).start();
    } else {
        // Agar intro.js kutubxonasi yo'q bo'lsa, oddiy alert orqali ko'rsatish
        alert('ECOHELPER tizimiga xush kelibsiz!\n\nTizim orqali ekologik muammolar monitoringi va statistikasini ko\'rishingiz mumkin.');
    }
}

// Dastur ishga tushganda tutorialni ko'rsatish
setTimeout(showTutorial, 1000);


    // Real vaqt statistik ma'lumotlarini yangilash
    function updateRealTimeStats() {
      // Simulyatsiya - haqiqiy loyihada API so'rov bo'ladi
      setTimeout(() => {
        document.getElementById('totalReports').textContent = (Math.random() * 500 + 1000).toFixed(0);
        document.getElementById('resolvedIssues').textContent = (Math.random() * 400 + 800).toFixed(0);
        document.getElementById('activeUsers').textContent = (Math.random() * 1000 + 2000).toFixed(0);
        document.getElementById('responseTime').textContent = (Math.random() * 1.5 + 1.5).toFixed(1);
      }, 800);
    }

    // Faylni yuklab olish funksiyasi
    function downloadReport() {
      const btn = event.target;
      const originalText = btn.innerHTML;
      
      btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Yuklanmoqda...';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Hisobot muvaffaqiyatli yuklab olindi!');
      }, 1500);
    }

    // Xaritani tozalash
    function clearMap() {
      if (map) {
        map.eachLayer(layer => {
          if (layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });
      }
    }

    // Brauzer yopilishida intervallarni tozalash
    window.addEventListener('beforeunload', function() {
      if (realTimeInterval) {
        clearInterval(realTimeInterval);
      }
    });

    // Saytga kirishda avvalgi tanlangan bo'limni saqlash
    document.addEventListener('DOMContentLoaded', function() {
      const lastActiveSection = localStorage.getItem('lastActiveSection') || 'dashboard';
      showSection(lastActiveSection);
      
      // Har bir bo'limga o'tganda saqlash
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
          const sectionId = this.getAttribute('onclick').replace("showSection('", "").replace("')", "");
          localStorage.setItem('lastActiveSection', sectionId);
        });
      });
    });

    // Dark/Light mode toggle
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    // Dark mode ni tekshirish
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }

    // Tizim versiyasi va yangilanishlar
    const systemVersion = "1.0.0";
    console.log(`ECOHELPER Monitoring Tizimi v${systemVersion}`);

    

    // Offline holatni aniqlash
    window.addEventListener('offline', function() {
      alert('Internet aloqasi uzildi! Tizim faqat offline rejimda ishlaydi.');
    });

    window.addEventListener('online', function() {
      alert('Internet aloqasi tiklandi! Tizim normal rejimda ishlayapti.');
      if (realTimeInterval) {
        updateRealTimeStats();
      }
    });

    // PWA uchun service worker ro'yxatdan o'tkazish
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
          console.log('ServiceWorker registratsiya muvaffaqiyatli: ', registration.scope);
        }, function(err) {
          console.log('ServiceWorker registratsiya muvaffaqiyatsiz: ', err);
        });
      });
    }

    // Sayt yangilanishlarini tekshirish
    function checkForUpdates() {
      fetch('/version.json')
        .then(response => response.json())
        .then(data => {
          if (data.version !== systemVersion) {
            if (confirm('Yangi yangilanish mavjud! Hozir yangilashni xohlaysizmi?')) {
              window.location.reload(true);
            }
          }
        })
        .catch(error => console.log('Versiyani tekshirishda xato:', error));
    }

    // Har 1 soatda yangilanishlarni tekshirish
    setInterval(checkForUpdates, 3600000);