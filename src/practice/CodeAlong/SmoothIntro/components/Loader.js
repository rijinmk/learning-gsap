import React, { useRef } from "react";
import { randomWords } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const wordsContainer = ".random-words-container";
const wordsUL = ".random-words-container > ul";
const wordsLI = ".random-words-container > ul > li";
const coverText = ".cover-text";
const loaderContainer = ".loader-container";
const loaderProgress = ".loader-container > span";

function Loader() {
  const container = useRef();
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.to(wordsUL, {
        top: "-537px",
        ease: "back.inOut",
        duration: 5,
      })
        .to(coverText, {
          backgroundColor: "rgba(0, 0, 0, 1)",
          ease: "back.inOut",
        })
        .to(wordsLI, {
          letterSpacing: "20px",
          ease: "back.inOut",
        })
        .to(
          loaderContainer,
          { width: "100%", duration: 5, ease: "back.inOut", text: "hi" },
          "-=6"
        )
        .to(loaderProgress, { opacity: 0 })
        .to(wordsLI, { opacity: 0 })
        .to(coverText, { opacity: 0 })
        .to(loaderContainer, { height: "100vh", ease: "back.inOut" });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="smooth-intro-container">
      <div className="random-words-container">
        <div className="cover-text top"></div>
        <ul>
          {randomWords.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
        <div className="cover-text bottom"></div>
      </div>
      <div className="loader-container">
        <span>0</span>
      </div>
    </div>
  );
}

export default Loader;
