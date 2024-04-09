import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../utils/splitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../App.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

function SplitTextPractice() {
  const container = useRef();
  useGSAP(
    () => {
      const split = new SplitText(".split", { type: "chars" });
      gsap.from(split.chars, {
        y: 200,
        stagger: 0.04,
        ease: "back.out",
        duration: 0.4,
        scrollTrigger: {
          trigger: ".split",
          start: "top 80%",
          markers: true,
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="container"
      style={{
        position: "absolute",
        top: "1000px",
        display: "inline-block",
        marginLeft: "200px",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <h1
          className="split"
          style={{
            color: "#ffffff",
            fontSize: "100px",
            textAlign: "center",
            marginLeft: "100px",
          }}
        >
          I am going away okay see you
        </h1>
      </div>
      <div style={{ height: "300vh" }}></div>
    </div>
  );
}

export default SplitTextPractice;
