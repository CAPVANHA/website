const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Tổng quan về thu nhập",
            backgroundColor: "blue",
            borderColor: "blue",
            data: [0, 7000, 15000, 6000, 20000, 23000, 18000, 30000, 15000, 16000, 35000, 40000],
            tension: 0.4,
        },
        
    ],
};

const config = {
    type: "line",
    data: data,
};
const canvas = document.getElementById("chart-earning");
const chart = new Chart(canvas, config);

const dataFruit = {
    datasets: [
        {
            label: "Best seller",
            data: [10, 80, 50],
            backgroundColor: ["#f96464", "#64f96b", "#f3f500",],
            hoverOffset: 3,
        },
    ],
    labels: ["Táo", "Mận", "Cam"],
};
const configFruit = {
    type: "doughnut",
    data: dataFruit,
};
const canvasFruit = document.getElementById("chart-fruit");
const chartFruit = new Chart(canvasFruit, configFruit);
