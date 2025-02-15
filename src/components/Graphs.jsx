import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Graphs() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        setCurrentDate(date);
    }, []);

    const optionsGrafico1 = {
        chart: { type: "column", width: 580, height: 230 },
        title: { text: "" },
        xAxis: {
            categories: [
                "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
                "Jul", "Ago", "Set", "Out", "Nov", "Dez"
            ],
        },
        yAxis: { title: { text: "Quantidade de Contratos" } },
        series: [
            { name: "Contratos", data: [10, 20, 30, 40, 50, 20, 26, 60, 14, 50, 8, 16] }
        ],
        credits: { enabled: false },
    };

    const optionsGrafico2 = {
        chart: { type: "pie", backgroundColor: "transparent", width: 580, height: 230 },
        title: { text: "" },
        plotOptions: {
            pie: {
                innerSize: "50%",
                startAngle: -90,
                endAngle: 90,
                dataLabels: { enabled: true, format: "{point.name}: {point.percentage:.1f}%" },
            },
        },
        series: [{ name: "Contratos", data: [["Aceitos", 70], ["Recusados", 30]] }],
        credits: { enabled: false },
    };

    const optionsGrafico3 = {
        chart: { type: "line", width: 1180, height: 240 },
        title: { text: "" },
        xAxis: {
            categories: [
                "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
                "Jul", "Ago", "Set", "Out", "Nov", "Dez"
            ],
        },
        yAxis: { title: { text: "Reais" } },
        series: [
            { name: "Total Recebido", data: [10, 15, 25, 30, 45, 60, 10, 20, 30, 40, 20, 30] },
        ],
        credits: { enabled: false },
    };

    return (
        <div className="flex-1 bg-white">
            <h1 className="text-lg ml-10">
                Bem vindo, <strong>Fulano!</strong>
            </h1>
            <p className="mt-4 text-gray-700 text-sm ml-10">{currentDate}</p>
            <hr className="border-gray-300 mt-4" />
            
            <div className="grid grid-cols-4 gap-12 mt-6 ml-3">
                <div className="border border-gray-700 p-6 rounded-lg text-center">
                    <p className="text-gray-500 text-sm">CONTRATOS TOTAIS</p>
                    <p className="text-3xl font-bold">24</p>
                </div>
                <div className="border border-gray-700 p-6 rounded-lg text-center">
                    <p className="text-gray-500 text-sm">CONTRATOS ACEITOS</p>
                    <p className="text-3xl font-bold">17</p>
                </div>
                <div className="border border-gray-700 p-6 rounded-lg text-center">
                    <p className="text-gray-500 text-sm">CONTRATOS RECUSADOS</p>
                    <p className="text-3xl font-bold">7</p>
                </div>
                <div className="border border-gray-700 p-6 rounded-lg text-center mr-2">
                    <p className="text-gray-500 text-sm">TOTAL RECEBIDO</p>
                    <p className="text-3xl font-bold">12.000</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <HighchartsReact highcharts={Highcharts} options={optionsGrafico1}  />
                <HighchartsReact highcharts={Highcharts} options={optionsGrafico2} />
            </div>
            <div className="mt-6">
                <HighchartsReact highcharts={Highcharts} options={optionsGrafico3} />
            </div>
        </div>
    );
}

export default Graphs;
