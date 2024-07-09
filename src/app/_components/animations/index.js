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
        duration: 1.5,
        // width: "0vw",
        // height: "0vh",
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        // ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(
      ".preloader-top",
      {
        duration: 1.5,
        width: "0vw",
        // height: "0dvw",
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%);",
        // ease: "Power3.easeOut",
      },
      "-=2"
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
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    // .to(".preloader", {
    //   duration: 1.5,
    //   css: { display: "none" },
    // })
    // .to(".preloader-top", {
    //   duration: 0,
    //   css: { display: "none" },
    // })
    // .to(".preloader-bottom", {
    //   duration: 0,
    //   css: { display: "none" },
    // })
    // ;
};

// export const mobileLanding = () => {
//   window.innerWidth < 763 &&
//     tl.from(".landing__main2", {
//       duration: 1,
//       delay: 0,
//       opacity: 0,
//       y: 80,
//       ease: "expo.easeOut",
//     });
// };