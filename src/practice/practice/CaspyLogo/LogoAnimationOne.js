import React, { useRef } from "react";
import CaspyLogo from "./CaspyLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const eachLetter = ".logo-container svg > g > path";
const letterC = ".logo-container svg > #C";
const letterA = ".logo-container svg > #A";
const letterS = ".logo-container svg > #S";
const letterP = ".logo-container svg > #P";
const letterY = ".logo-container svg > #Y";

function LogoAnimationOne() {
  const container = useRef();
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to(eachLetter, {
        transform: "translate(0px, 0px) rotate(0deg)",
        stagger: 0.4,
        ease: "back.out",
        duration: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="logo-container">
      <div>
        <CaspyLogo />
      </div>
    </div>
  );
}

export default LogoAnimationOne;
