import gsap from "gsap";

export const logoAnimationTwo = (selectors) => {
  const tl = gsap.timeline();
  const {
    logoContainer,
    eachLetter,
    letterC,
    letterA,
    letterS,
    letterP,
    letterY,
  } = selectors;
  tl.to(
    letterC,
    {
      transform: "translate(0px, 0px) rotate(0deg)",
      stagger: 0.4,
      ease: "back.out",
      duration: 0.5,
    },
    "+=0.2"
  )
    .to(
      letterC,
      { strokeDasharray: 250, duration: 2.5, ease: "back.out" },
      "-=0.5"
    )
    .to(letterC, { fill: "#000" }, "-=2.5")
    .to(
      letterA,
      {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)",
      },
      "-=2.5"
    )
    .to(
      letterS,
      { transform: "translate(0px, 0px) rotate(0deg)", ease: "back.in" },
      "-=2"
    )
    .to(
      letterP,
      { transform: "translate(0px, 0px) rotate(0deg)", ease: "back.out" },
      "-=1.5"
    )
    .to(
      letterY,
      { transform: "translate(0px, 0px) rotate(0deg)", ease: "expo.out" },
      "-=1"
    )
    .to(letterA, { fill: "#000" }, "-=1")
    .to(letterP, { fill: "#000" }, "-=0.5")
    .to(
      logoContainer,
      {
        transform: "rotate(0) scale(0.7)",
        ease: "back.inOut",
        duration: 2,
      },
      "-=2.5"
    )
    // Exit
    .to(
      eachLetter,
      {
        y: -50,
        ease: "circ.out",
        stagger: 0.1,
        duration: 0.2,
      },
      "-=0.2"
    )
    .to(
      eachLetter,
      {
        y: 400,
        ease: "back.inOut",
        stagger: 0.1,
        duration: 1,
      },
      "-=0.1"
    );
  return tl;
};
