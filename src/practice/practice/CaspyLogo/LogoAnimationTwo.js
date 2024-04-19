import React, { useRef } from "react";
import CaspyLogo from "./CaspyLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const logoContainer = ".logo-container svg";
const eachLetter = ".logo-container svg > g > path";
const letterC = ".logo-container .animation-two svg #C";
const letterA = ".logo-container .animation-two svg #A";
const letterS = ".logo-container .animation-two svg #S";
const letterP = ".logo-container .animation-two svg #P";
const letterY = ".logo-container .animation-two svg #Y";

function LogoAnimationTwo() {
  const container = useRef();
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to(letterC, {
        transform: "translate(0px, 0px) rotate(0deg)",
        stagger: 0.4,
        ease: "back.out",
        duration: 0.5,
      })
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
    },
    { scope: container }
  );

  return (
    <div ref={container} className="logo-container">
      <div className="animation-two">
        <CaspyLogo />
      </div>
    </div>
  );
}

export default LogoAnimationTwo;
