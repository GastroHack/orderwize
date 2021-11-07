/** @format */

import React from "react";
import useWindowDimensions from "../utils/useWindowDimensions";
import OrderLogo from "../assets/orderWizeWideLogo.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: "tomato",
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
              gap: "5%",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "10%",
                backgroundColor: "tomato",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10%",
                cursor: "pointer",
              }}
              onClick={() => navigate("/hotel-restaurant", { replace: true })}
            >
              <h3> Open buffet prediction </h3>
            </div>
            <div
              style={{
                width: "70%",
                height: "10%",
                backgroundColor: "tomato",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
              onClick={() => navigate("/charts", { replace: true })}
            >
              <h3> Charts </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
