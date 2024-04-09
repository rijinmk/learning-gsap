import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../utils/splitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../App.css";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function ScrollSmootherPractice() {
  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      onUpdate: (self) => {
        console.log("velocity", self.getVelocity());
      },
    });
  });

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </>
  );
}

export default ScrollSmootherPractice;
