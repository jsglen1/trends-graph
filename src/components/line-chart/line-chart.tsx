"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ApiTimelineDataResponse, TimelineDataPoint } from "@/interfaces/trend";

interface Props {
  graphData: TimelineDataPoint[] | undefined;
}

export default function LineChart({ graphData }: Props) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart<"line"> | null = null;

    if (chartRef.current && graphData != undefined && graphData != null) {
      console.log(graphData);

      // Obtener los últimos 12 elementos de graphData
      const last12Data = graphData.slice(-12);

      // Obtener las etiquetas y los valores
      const labels = last12Data.map((data) => data.formattedTime);
      const values = last12Data.map((data) => data.value[0]);

      console.log(labels);
      console.log(values);

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: "last 12 month Trends",
                data: values, // Tus datos aquí
                borderWidth: 1,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [graphData]);

  return <canvas ref={chartRef}></canvas>;
}
