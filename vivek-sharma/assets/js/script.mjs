/* For gauge */

var opt1 = {
  displayNumber: true,
  numberFontSize: 24,
  numberFontColor: "##6c6e6f",
  ticks: {
    width: 2,
    length: 10,
    color: "#6c6e6f",
    step: 10,
  },
  angle: 0, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: "#6c6e6f", // Fill color
  },
  limitMax: false, // If false, max value increases automatically if value > maxValue
  limitMin: false, // If true, the min value of the gauge will be fixed
  colorStart: "#DE2832", // Colors
  colorStop: "#DE2832", // just experiment with them
  strokeColor: "#E0E0E0", // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true, // High resolution support
};

var target1 = document.getElementById("gaugeChart1"); // your canvas element
var gauge1 = new Gauge(target1).setOptions(opt1); // create sexy gauge!
gauge1.maxValue = 100; // set max gauge value
gauge1.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 20; // set animation speed (32 is default value)
gauge1.set(87.43); // set actual value

var opt2 = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: "#6c6e6f", // Fill color
  },
  limitMax: false, // If false, max value increases automatically if value > maxValue
  limitMin: false, // If true, the min value of the gauge will be fixed
  colorStart: "#CF164C", // Colors
  colorStop: "#CF164C", // just experiment with them
  strokeColor: "#E0E0E0", // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true, // High resolution support
};

var target2 = document.getElementById("gaugeChart2"); // your canvas element
var gauge2 = new Gauge(target2).setOptions(opt2); // create sexy gauge!

gauge2.maxValue = 30; // set max gauge value
gauge2.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge2.animationSpeed = 20; // set animation speed (32 is default value)
gauge2.set(2.7); // set actual value

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
            },
          },
        },
        textAlign: "center",
        padding: 16,
        align: "start",
        anchor: "end", // Move the labels to the end of the segment, closer to the boundary
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
        suggestedMax: 10.5, // Custom max value for y-axis
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
