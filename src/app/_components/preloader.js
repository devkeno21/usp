"use client";
import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "./animations/index";
import logo from "./car-1.png";
import Trans from "./deskBg.png";
import TransMob from "./mobileBg.png";

export default function Preloader() {
  useEffect(() => {
    if (window !== undefined) preLoaderAnim();
  }, [window]);
  return (
    <div className="preloader" style={{ backgroundColor: "#9A8E84" }}>
      <div
        className="preloader-top"
        style={{
          width: "100dvw",
          height: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-fit h-fit" style={{ zIndex: "100" }}>
          <img
            src={logo.src}
            alt="Logo"
            className="logo"
            style={{ width: "0rem", height: "0rem" }}
          />
        </div>
        <div
          className="preloader-bottom"
          style={{
            width: "100dvw",
            height: "100dvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            clipPath: "circle(0% at 50% 50%)",
            backgroundImage:
              window.innerWidth < 768
                ? `url(${TransMob.src})`
                : `url(${Trans.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "50",
          }}
        ></div>
      </div>
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
    </div>
  );
}
