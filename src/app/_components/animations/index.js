import gsap from "gsap";
// Declare a general timeline to use in all the animation functions.

const tl= gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 2,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(
      ".preloader-top",
      {
        duration: 1,
        // width: "0vw",
        // height: "0dvw",
        opacity: 0,
        ease: "Power3.easeOut",
      },
    )
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(
      ".preloader-bottom",
      {
        duration: 1.5,
        // width: "0dvw",
        // height: "0vh",
        clipPath: "circle(50% at 50% 50%)",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(
      ".logo",
      {
        duration: 1.5,
        width: "50rem",
        height: "24rem",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(
      ".preloader-bottom",
      {
        duration: 2,
        // width: "0dvw",
        // height: "0vh",
        opacity: 0,
        ease: "Power3.easeOut",
      },
    )
};