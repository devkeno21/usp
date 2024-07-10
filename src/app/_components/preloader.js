"use client"
import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "./animations/index";
import logo from "./blue-usp-logo.png";

export default function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader" style={{backgroundColor: "#9A8E84"}}>
      {/* <div
        className="preloader-top"
        style={{
          width: "100dvw",
          height: "100dvh",
          border: "10px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath: "circle(50.0% at 50% 50%)",
        }}
      >
        <div className="w-fit h-fit" style={{zIndex: "2"}}>
          <img
            src={logo.src}
            alt="Logo"
            style={{ width: "28rem", height: "12rem" }}
          />
        </div>
      </div> */}
      {/* <div
        className="preloader-bottom"
        style={{
          width: "50dvw",
          height: "50dvh",
          border: "10px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath: "polygon(96% 99%, 100% 100%, 100% 95%, 4% 0, 0 0, 0 4%)",
        }}
      >
        <div className="w-fit h-fit" style={{zIndex: "2"}}>
          <img
            src={logo.src}
            alt="Logo"
            style={{ width: "20rem", height: "24rem" }}
          />
        </div>
      </div> */}
      <div
        className="preloader-bottom"
        style={{
          width: "100dvw",
          height: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath: "circle(0% at 50% 50%)",
        }}
      >
        <div className="w-fit h-fit preloader-logo" style={{zIndex: "2"}}>
          <img
            src={logo.src}
            alt="Logo"
            className="preloader-image"
            // style={{ width: "28rem", height: "12rem" }}
          />
        </div>
        
      </div>
    </div>
  );
}
