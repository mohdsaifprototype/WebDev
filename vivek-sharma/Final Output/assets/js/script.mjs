/* Responsiveness start */
/* Setting Varibales for tablet view */
let pieValueFontSize = 10;
if (window.innerWidth < 768) {
pieValueFontSize = 20;
}



/* Setting Variables for mobile view */
if (window.innerWidth < 480) {
pieValueFontSize = 14;
}
/* Responsiveness end */

/* For gauge */

function drawGaugeNumbers(ctx, numbers, radius, xCenter, yCenter) {
  ctx.font = "14px Arial";
  ctx.fillStyle = "#8e8e8e";
  ctx.textAlign = "center";
  
  numbers.forEach(function (label) {
    let angle = (Math.PI / 2) + (Math.PI * label.position);
    let xPos = xCenter + radius * Math.cos(angle);
    let yPos = yCenter - radius * Math.sin(angle);
    ctx.fillText(label.text, xPos, yPos);
  });
}
// Gauge 1 Configuration
var opts1 = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // Pointer length
    strokeWidth: 0.035, // Pointer thickness
    color: '#8e8e8e' // Pointer color
  },
  limitMax: false,
  limitMin: false,
  colorStart: '#FF4D4D', // Red color
  colorStop: '#FF4D4D', 
  strokeColor: '#E0E0E0', 
  generateGradient: true,
  highDpiSupport: true 
};

var target1 = document.getElementById('gauge1'); // Canvas element
var gauge1 = new Gauge(target1).setOptions(opts1); // Create gauge
gauge1.maxValue = 100; // Set max gauge value
gauge1.setMinValue(0);  // Minimum value
gauge1.animationSpeed = 32; // Speed of animation
gauge1.set(87.43); // Set value

// Custom Progress Numbers for Gauge 1
var ctx1 = target1.getContext('2d');
drawGaugeNumbers(ctx1, [
  { position: 0.35, text: "60" }, 
  { position: 0.60, text: "80" }, 
  { position: 0.85, text: "100" }
], 90, 200, 140); // Adjust the position and radius as necessary

// Gauge 2 Configuration
var opts2 = {
  angle: 0,
  lineWidth: 0.44,
  radiusScale: 1,
  pointer: {
    length: 0.6,
    strokeWidth: 0.035,
    color: '#8e8e8e'
  },
  limitMax: false,
  limitMin: false,
  colorStart: '#FF4D4D',
  colorStop: '#FF4D4D',
  strokeColor: '#E0E0E0',
  generateGradient: true,
  highDpiSupport: true
};

var target2 = document.getElementById('gauge2');
var gauge2 = new Gauge(target2).setOptions(opts2);
gauge2.maxValue = 30; 
gauge2.setMinValue(0);
gauge2.animationSpeed = 32;
gauge2.set(2.7);

// Custom Progress Numbers for Gauge 2
var ctx2 = target2.getContext('2d');
drawGaugeNumbers(ctx2, [
  { position: 0.2, text: "0" }, 
  { position: 0.45, text: "10" }, 
  { position: 0.70, text: "20" }, 
  { position: 0.95, text: "30" }
], 90, 200, 140); // Adjust the position and radius as necessary

/* Section3 */
// Bar Chart
const barCtx = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Lorem ips", "Lorem ips", "Lorem ips", "Lorem ips", "Lorem ips"],
    datasets: [
      {
        label: "Lorem",
        data: [80, 90, 85, 88, 92],
        backgroundColor: "#cda410",
      },
      {
        label: "Lorem",
        data: [78, 88, 83, 85, 89],
        backgroundColor: "#ce114b",
      },
      {
        label: "Lorem",
        data: [78, 88, 83, 85, 89],
        backgroundColor: "#bfbfbf",
      },
      {
        label: "Lorem",
        data: [75, 85, 80, 82, 87],
        backgroundColor: "#156082",
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
        },
        position: "bottom",
      },
      title: {
        display: true,
        text: "Chart title",
      },
    },

    scales: {
      x: {
        ticks: {
          stepSize: 20,
        },
        beginAtZero: false, // Customizable start value
        suggestedMin: 0, // Example: start at 50 instead of 0
        suggestedMax: 100, // Example: max at 100
      },
    },
  },
});

// Pie Chart (with percentage labels)
const pieCtx = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
    datasets: [
      {
        data: [26, 27, 29, 25, 27, 20],
        backgroundColor: [
          "#27ae60",
          "#2980b9",
          "#e67e22",
          "#2ecc71",
          "#8e44ad",
          "#3498db",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12, // Adjust the width of the legend labels
        },
      },
      title: {
        display: true,
        text: "Lorem ipsum dolor",
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = ((value / sum) * 100).toFixed(2) + "%";
          return `(${percentage})\n${value} `;
        },
        color: "#fff",
        labels: {
          title: {
            font: {
              weight: "bold",
              size: pieValueFontSize,
            },
          },
        },
        textAlign: "center",
        padding: 16,
        // align: "start",
        // anchor: "end", // Move the labels to the end of the segment, closer to the boundary
      },
    },
  },
  plugins: [ChartDataLabels],
});

// Line Chart
const lineCtx = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["T1", "T2", "T3", "T4"],
    datasets: [
      {
        label: "Lorem ips",
        data: [9.2, 9.5, 9.1, 9.0],
        borderColor: "#2ecc71",
        fill: false,
        pointStyle: "triangle",
        pointRadius: 10,
        pointBorderWidth: 0,
        pointBackgroundColor: "#2ecc71",
      },
      {
        label: "Lorem ips",
        data: [9.5, 9.7, 9.5, 9.4],
        borderColor: "#e74c3c",
        fill: false,
        pointStyle: "crossRot",
        pointRadius: 10,
        pointBorderWidth: 2,
        pointBackgroundColor: "#e74c3c",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 3 / 1, // Make the chart a little smaller
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
        },
        position: "bottom",
      },
      title: {
        display: true,
        text: "Chart title",
      },
    },
    scales: {
      y: {
        beginAtZero: false, // Customizable start value for y-axis
        suggestedMin: 8.5, // Custom example start value for y-axis
        suggestedMax: 10, // Custom max value for y-axis
        ticks: {
          stepSize: 0.5,
          barHeight: 10,
        },
      },
    },
  },
});


/**
 * Create a progress chart with a circular SVG.
 * @param {number} currentValue The current progress value (0-100).
 * @param {string} color The color of the progress circle.
 * @returns {string} The SVG code for the progress chart.
 */
function makeProgressChart(currentValue, color) {
  return `
    <svg class="circular-chart" viewBox="0 0 36 36" style="max-width: 100%; max-height: 250px;">
  <path
    class="circle-bg"
    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
    style="fill: none; stroke: #dedcdb; stroke-width: 3.8;"
  />
  <path
    class="circle"
    stroke-dasharray="${currentValue}, 100"
    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
    style="fill: none; stroke-width: 3.8; stroke: ${color}; stroke-linecap: round; animation: progress 1s ease-out forwards;"
  />
  <text
    x="18"
    y="20.35"
    class="percentage"
    style="font-size: 0.5em; text-anchor: middle; fill: #555; font-family: 'Poppins', sans-serif; font-weight: 600;"
  >
    ${currentValue}%
  </text>
</svg>

  `;
}
let progressChartsValue = [84.5, 75.3, 92.5, 89.5, 89];
let progressChatsColor = [
  "#c7a218",
  "#913e1c",
  "#cf164c",
  "#eb5e28",
  "#c44620",
];

// Rendering svg for multiple charts
let multipleProgressCharts = document.querySelectorAll(".progress-charts");

for (let i = 0; i < progressChartsValue.length; i++) {
  multipleProgressCharts[i].innerHTML = makeProgressChart(
    progressChartsValue[i],
    progressChatsColor[i]
  );
}

/* Multiple ProgressCharts end */


/* Table Processing */
