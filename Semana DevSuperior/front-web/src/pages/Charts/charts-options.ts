export const pieOptions = {
  chart: {
    background: "transparent",
    foreColor: "red",
  },
  colors: ["#FF304F", "#00D4FF", "#17b978", "#ffd6a5"],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: true,
    offsetX: "80px",
    offsetY: "80px",
    style: {
      colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ffd6a5"],
      fontSize: "18px",
      fontFamily: "Play, sans-serif",
      fontWeight: 700,
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.7,
      expandOnClick: false,
      dataLabels: {
        offset: 60,
      },
    },
  },
};

export const barOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["var(--color-secundary)"],
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      startingShape: "rounded",
      barHeight: "60px",
    },
  },
  dataLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      labels: {
        maxWidth: 360,
        style: {
          colors: "#00D4FF",
          fontSize: "18px",
          fontFamily: "Play, sans-serif",
          fontWeight: 700,
        },
      },
    },
  ],
};