/** @format */

import React from "react";
import { useState } from "react";
import "./charts.css";
import useWindowDimensions from "../utils/useWindowDimensions";
import OrderLogo from "../assets/orderWizeWideLogo.png";
import { Pie, Bar } from "react-chartjs-2";

export default function ChartsPage() {
  const { height, width } = useWindowDimensions();
  const [date, setDate] = useState(new Date());

  const malefemale = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Male/Female",
        data: [25, 75],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 3,
      },
    ],
  };

  const travel = {
    labels: ["Leisure", "Business"],
    datasets: [
      {
        label: "Type of Travel",
        data: [60, 40],
        backgroundColor: ["rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const age = {
    labels: ["20's", "30's", "40's", "50's", "60's", "70's"],
    datasets: [
      {
        label: "Age of Clients",
        data: [15, 38, 55, 33, 8, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const nation = {
    labels: [
      "Italy",
      "France",
      "Germany",
      "Czech Rebublic",
      "Austria",
      "Hungary",
    ],
    datasets: [
      {
        label: "Nationality",
        data: [15, 48, 5, 3, 28, 32],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#393A3D",
          height,
          width,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: -3,
        }}
      >
        <div
          id="Container"
          style={{
            zIndex: 2,
            minWidth: width * 0.7,
            minHeight: height * 0.9,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            id="Head"
            style={{
              minHeight: height * 0.1,
              minWidth: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <div
              id="logoContainer"
              style={{
                minHeight: height * 0.07,
                width: height * 0.3,
                marginRight: width * 0.01,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt="logo"
                src={OrderLogo}
                style={{ minHeight: "100%", minWidth: "100%" }}
              />
            </div>
          </div>
          <div
            id="body"
            style={{
              backgroundColor: "white",
              height: height * 0.7,
              width: width * 0.8,
              boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div className="container">
              <div className="wrapper">
                <Pie data={malefemale} className="chart pie" />
              </div>
              <div className="wrapper">
                <Pie data={travel} className="chart pie" />
              </div>
              <div className="wrapper">
                <Bar data={age} className="chart bar" options={options} />
              </div>
              <div className="wrapper">
                <Bar data={nation} className="chart bar" option={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
