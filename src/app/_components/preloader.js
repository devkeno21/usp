"use client";
import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "./animations/index";
import { preLoaderAnimMob } from "./mobile/index";
import logo from "./car-1.png";
import { useMediaQuery } from "@mantine/hooks";
import Head from "next/head";
import { Partytown } from '@builder.io/partytown/react';

export default function Preloader() {
  const matches = useMediaQuery("(max-width: 40em)", true, {
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    matches ? preLoaderAnimMob() : preLoaderAnim();
  }, [matches]);

  return (
    <>
      <Head>
        <Partytown debug={true} forward={['dataLayer.push']} />
      </Head>
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
            backgroundColor: "black",
            // backgroundImage:
            //   matches == true
            //     ? `url(${MobileBg.src})` : matches == false ?
            //      `url(${Trans.src})` : null,
            backgroundSize: matches ? "cover" : "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: "50",
          }}
        ></div>
      </div>
    </div>
    </>
  );
}

{
  /* <div
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
      </div> */
}
