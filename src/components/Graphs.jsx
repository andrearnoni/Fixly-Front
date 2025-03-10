import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Graphs({ isDarkMode }) {
  const [currentDate, setCurrentDate] = useState("");
  const [chartDimensions, setChartDimensions] = useState({
    width: 0,
    height: 0,
    bottomChartWidth: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector(".graphs-container");
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      if (container && container.clientHeight) {
        const containerWidth = container.clientWidth;
        const width = isMobileView
          ? containerWidth - 40
          : (containerWidth - 80) / 2;
        const height = isMobileView ? 250 : (container.clientHeight - 200) / 2;
        const bottomWidth = containerWidth - (isMobileView ? 40 : 80);

        setChartDimensions({
          width,
          height,
          bottomChartWidth: bottomWidth,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const date = new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(date);
  }, []);

  const sharedChartConfig = {
    xAxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      labels: {
        style: {
          fontSize: isMobile ? "10px" : "11px",
          color: isDarkMode ? "#ffffff" : "#000000",
        },
        autoRotation: [-45],
        step: 1,
      },
      tickLength: 5,
    },
    credits: { enabled: false },
    title: { text: "" },
  };

  const optionsGrafico1 = {
    chart: {
      type: "column",
      width: chartDimensions.width,
      height: chartDimensions.height,
      marginRight: 20,
      spacingRight: 20,
      backgroundColor: isDarkMode ? "#2d3748" : "#ffffff",
    },
    ...sharedChartConfig,
    yAxis: {
      title: {
        text: "Quantidade de Contratos",
        style: { color: isDarkMode ? "#ffffff" : "#000000" },
      },
      labels: {
        style: { fontSize: "11px", color: isDarkMode ? "#ffffff" : "#000000" },
      },
    },
    series: [
      {
        name: "Contratos",
        data: [10, 20, 30, 40, 50, 20, 26, 60, 14, 50, 8, 16],
      },
    ],
  };

  const optionsGrafico2 = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      width: chartDimensions.width,
      height: chartDimensions.height,
    },
    title: { text: "" },
    plotOptions: {
      pie: {
        innerSize: "50%",
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.percentage:.1f}%",
          style: { color: isDarkMode ? "#ffffff" : "#000000" },
        },
      },
    },
    series: [
      {
        name: "Contratos",
        data: [
          ["Aceitos", 70],
          ["Recusados", 30],
        ],
      },
    ],
    credits: { enabled: false },
  };

  const optionsGrafico3 = {
    chart: {
      type: "line",
      width: chartDimensions.bottomChartWidth,
      height: chartDimensions.height,
      marginRight: 30,
      spacingRight: 30,
      backgroundColor: isDarkMode ? "#2d3748" : "#ffffff",
    },
    ...sharedChartConfig,
    yAxis: {
      title: {
        text: "Reais",
        style: { color: isDarkMode ? "#ffffff" : "#000000" },
      },
      labels: {
        style: { fontSize: "11px", color: isDarkMode ? "#ffffff" : "#000000" },
      },
    },
    series: [
      {
        name: "Total Recebido",
        data: [10, 15, 25, 30, 45, 60, 10, 20, 30, 40, 20, 30],
      },
    ],
  };

  return (
    <div
      className={`flex-1 h-screen overflow-y-auto md:overflow-hidden p-5 graphs-container ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="space-y-3 mb-5 mt-12 md:mt-0">
        <h1 className="text-xl">
          Bem vindo, <strong>Fulano!</strong>
        </h1>
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {currentDate}
        </p>
        <hr
          className={`${isDarkMode ? "border-gray-600" : "border-gray-300"}`}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-5">
        <div
          className={`border ${
            isDarkMode ? "border-gray-600" : "border-gray-700"
          } p-3 md:p-5 rounded-lg text-center`}
        >
          <p
            className={`text-xs md:text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            CONTRATOS TOTAIS
          </p>
          <p className="text-xl md:text-3xl font-bold">
            {isDarkMode ? <span className="text-white">24</span> : "24"}
          </p>
        </div>
        <div
          className={`border ${
            isDarkMode ? "border-gray-600" : "border-gray-700"
          } p-3 md:p-5 rounded-lg text-center`}
        >
          <p
            className={`text-xs md:text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            CONTRATOS ACEITOS
          </p>
          <p className="text-xl md:text-3xl font-bold">
            {isDarkMode ? <span className="text-white">17</span> : "17"}
          </p>
        </div>
        <div
          className={`border ${
            isDarkMode ? "border-gray-600" : "border-gray-700"
          } p-3 md:p-5 rounded-lg text-center`}
        >
          <p
            className={`text-xs md:text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            CONTRATOS RECUSADOS
          </p>
          <p className="text-xl md:text-3xl font-bold">
            {isDarkMode ? <span className="text-white">7</span> : "7"}
          </p>
        </div>
        <div
          className={`border ${
            isDarkMode ? "border-gray-600" : "border-gray-700"
          } p-3 md:p-5 rounded-lg text-center`}
        >
          <p
            className={`text-xs md:text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            TOTAL RECEBIDO
          </p>
          <p className="text-xl md:text-3xl font-bold">
            {isDarkMode ? <span className="text-white">12.000</span> : "12.000"}
          </p>
        </div>
      </div>

      <div
        className={`${isMobile ? "space-y-5" : "grid grid-cols-2 gap-5"} mb-5`}
      >
        <HighchartsReact highcharts={Highcharts} options={optionsGrafico1} />
        <HighchartsReact highcharts={Highcharts} options={optionsGrafico2} />
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={optionsGrafico3} />
      </div>
    </div>
  );
}

export default Graphs;
