import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const name = ".name-container .name";
const imageContainer = ".image-container";
const line = ".name-container .line";
const nameContainer = ".name-container";

function Hero() {
  const container = useRef();
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to(nameContainer, {
        autoAlpha: 1,
        scale: 1,
        ease: "back.out",
        duration: 4,
      })
        .to(line, { width: "50%", ease: "back.out", duration: 2 }, "-=3")
        .to(
          imageContainer,
          { height: 2100, ease: "power3.out", duration: 8 },
          "-=4"
        );
    },
    { scope: container }
  );

  return (
    <>
      <div ref={container} className="hero-container">
        <div className="name-container">
          <span className="name">R</span>
          <span className="line"></span>
          <span className="name">M</span>
        </div>
        <div className="image-container"></div>
      </div>
    </>
  );
}

export default Hero;
