import React, { useRef } from "react";
import AfterlifeLogo from "./AfterlifeLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function AfterlifeLogoAnimation() {
  const container = useRef();
  const tl = gsap.timeline();

  useGSAP(
    () => {
      // leaf blowing effect
      tl.to("#leaf", { rotate: "40deg", ease: "back.inOut" })
        .to("#leaf", {
          rotate: "0deg",
          ease: "back.out",
        })
        .to(
          ".al-logo-container svg #A",
          {
            strokeDasharray: 150,
            fill: "#285857",
            ease: "back.out",
            duration: 5,
          },
          "-=0.5"
        )
        .to(
          ".al-logo-container svg #A-leaf",
          {
            transform: " scale(1) translate(0px, 0px)",
            ease: "back.in",
          },
          "-=3.5"
        )
        .to(
          ".al-logo-container svg .letters",
          {
            autoAlpha: 1,
            stagger: 0.06,
            y: 0,
            ease: "back.inOut",
            duration: 0.2,
          },
          "-=3"
        )
        .to(".al-logo-container svg #I-o", { y: 10, ease: "bounce.out" }, "-=2")
        .to(
          ".al-logo-container svg #I-o",
          { y: 0, ease: "linear", duration: 0.1 },
          "-=1.6"
        )
        .to(
          ".al-logo-container svg",
          { transform: "scale(0.5)", duration: 4, ease: "back.inOut" },
          "-=5.5"
        )
        // exit
        .to(".al-logo-container svg #A-leaf", {
          autoAlpha: 0,
          y: 10,
          ease: "back.inOut",
          duration: 0.2,
        })
        .to(
          ".al-logo-container svg .letters",
          {
            autoAlpha: 0,
            stagger: 0.06,
            y: 10,
            ease: "back.inOut",
            duration: 0.2,
          },
          "-=0.2"
        );
    },
    { scope: container }
  );

  return (
    <div className="al-logo-container" ref={container}>
      <AfterlifeLogo />
    </div>
  );
}

export default AfterlifeLogoAnimation;
