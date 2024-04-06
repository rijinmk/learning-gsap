import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function GettingStarted() {
  const container = useRef();
  const tl = gsap.timeline({ paused: true, delay: 2, yoyo: true });

  useGSAP(
    () => {
      // gsap.to(".box", {
      //   x: 100,
      //   rotate: "180deg",
      //   scale: 0.2,
      //   delay: 0.5,
      //   stagger: 0.07,
      //   duration: 1,
      // });

      tl.to(".box.b1", { rotation: -270, duration: 4, ease: "elastic" })
        .to(".box.b2", { rotation: -360, duration: 4, ease: "elastic" })
        .to(".box.b3", { rotation: -180, duration: 4, ease: "elastic" });

      tl.play();
      // tl.seek(0.2);
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
      <div className="box b11"></div>
      <div className="box b12"></div>
      <div className="box b13"></div>
      <div className="box b14"></div>
      <div className="box b15"></div>
      <div className="box b16"></div>
      <div className="box b17"></div>
      <div className="box b18"></div>
      <div className="box b19"></div>
      <div className="box b20"></div>
    </div>
  );
}

export default GettingStarted;
