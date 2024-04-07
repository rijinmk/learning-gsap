import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function TimelinePractice() {
  const container = useRef();
  const tl = gsap.timeline({ paused: true });

  useGSAP(
    () => {
      tl.to(".box.b1", { x: 100, ease: "elastic" })
        .to(
          ".box.b2",
          { x: 200, y: 200, duration: 1, ease: "elastic" },
          "-=0.5"
        )
        .to(
          ".box.b3",
          {
            rotate: 200,
            x: 200,
            y: 400,
            duration: 1,
            ease: "elastic",
          },
          "-=1"
        )
        .to(
          ".box.b4",
          {
            rotate: 400,
            x: 500,
            y: 300,
            scale: 2.3,
            duration: 1,
            ease: "elastic",
          },
          "-=2"
        );
      setTimeout(() => {
        tl.reverse();
      }, 5000);
      tl.play();
    },
    { scope: container }
  );

  return (
    <div ref={container} className="container">
      <div className="box b1"></div>
      <div className="box b2"></div>
      <div className="box b3"></div>
      <div className="box b4"></div>
      <div className="box b5"></div>
      <div className="box b6"></div>
      <div className="box b7"></div>
      <div className="box b8"></div>
      <div className="box b9"></div>
      <div className="box b10"></div>
    </div>
  );
}

export default TimelinePractice;
