import React, { useRef } from "react";
import CaspyLogo from "./CaspyLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { logoAnimationTwo } from "./animations";
import { selectors } from "./consts";

function LogoAnimationTwo() {
  const container = useRef();
  useGSAP(
    () => {
      logoAnimationTwo(selectors);
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
