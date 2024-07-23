import gsap from "gsap";
// Declare a general timeline to use in all the animation functions.

const tl= gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 2,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(
      ".preloader-top",
      {
        duration: 0.8,
        // width: "0vw",
        // height: "0dvw",
        clipPath: "circle(0% at 50% 50%)",
        ease: "Power3.easeOut",
      },
    )
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        width: "0vw",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(
      ".preloader-bottom",
      {
        duration: 1.8,
        width: "100dvw",
        height: "100vh",
        overflow: "hidden",
        clipPath: "circle(100% at 50% 50%)",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(
      ".logo",
      {
        duration: 1.5,
        width:  "54rem", 
        height: "24rem", 
        ease: "Power3.fadeOut",
      },
      "-=3"
    )
    .to(
      ".logo",
      {
        duration: 0.2,
        opacity: 0,
        clipPath: "circle(0% at 50% 50%)",
        ease: "Power3.fadeOut",
      },
      "-=1.7"
    )
    .to(
      ".preloader-bottom",
      {
        duration: 0.2,
        opacity: 0.5,
        clipPath: "circle(0% at 50% 50%)",
        ease: "Power3.easeOut",
      },
      "+=1"
    )
};