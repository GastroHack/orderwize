import React from "react";
import { useState } from "react";
import useWindowDimensions from "../utils/useWindowDimensions";
import OrderLogo from "../assets/orderWizeWideLogo.png";
import beef from "../assets/icons/beef.png";
import cheese from "../assets/icons/cheese.png";
import chicken from "../assets/icons/chicken.png";
import potato from "../assets/icons/potato.png";
import rice from "../assets/icons/rice.png";
import salad from "../assets/icons/salad.png";
import soup from "../assets/icons/soup.png";
import spagetti from "../assets/icons/spagetti.png";

export default function HotelRestaurantPage() {
  const { height, width } = useWindowDimensions();
  const [date, setDate] = useState(new Date());
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
            <div
              style={{
                width: "100%",
                height: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h1>When? </h1>
                <input
                  type="date"
                  placeholder={date}
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "tomato",
                  width: "10%",
                  height: "50%",
                }}
              >
                <h3> </h3>
              </div>
            </div>

            <div
              style={{
                width: "90%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 style={{ textAlign: "center" }}> What and how much? </h1>
              <div
                style={{
                  width: "100%",
                  height: "30%",
                  backgroundColor: "tomato",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img alt="salad" src={salad} style={{ height: "90%" }}></img>
                  <b>Salad</b>
                  <p> The consumption is likely to decrease 15% </p>
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img alt="rice" src={rice} style={{ height: "90%" }}></img>
                  <b>Rice</b>
                  <p> The consumption is likely to decrease 9% </p>
                </div>

                <div
                  style={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img alt="soup" src={soup} style={{ height: "90%" }}></img>
                  <b>Soup</b>
                  <p> The consumption is likely to decrease 20% </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "30%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "tomato",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img alt="beef" src={beef} style={{ height: "90%" }}></img>
                  <b>Beef</b>
                  <p> The consumption is likely to decrease 10% </p>
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="spagetti"
                    src={spagetti}
                    style={{ height: "90%" }}
                  ></img>
                  <b>Spaghetti</b>
                  <p> The consumption is likely to increase 10% </p>
                </div>

                <div
                  style={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="potato"
                    src={potato}
                    style={{ height: "90%" }}
                  ></img>
                  <b>Potato</b>
                  <p> The consumption is likely to decrease 3% </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
