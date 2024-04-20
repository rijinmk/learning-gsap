import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ScrollTriggerPractice1() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".st-box .title-container h1 span", {
        transform: "translate(0px, 0px)",
        stagger: 0.1,
        margin: "10",
        fontSize: "100px",
        ease: "back.out",
        scrollTrigger: {
          trigger: ".title-container",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      gsap.to(".st-box .st-image-container .image-box", {
        scrollTrigger: {
          trigger: ".st-box .st-image-container",
          markers: true,
          start: "top 50%",
          end: "bottom 50%",
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const maxSkew = 20;
            const skew = gsap.utils.clamp(-maxSkew, maxSkew, velocity / 100);
            gsap.to(".st-box .st-image-container .image-box", {
              skewY: -skew,
              duration: 0.1,
              ease: "back.put",
            });
          },
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="st-box">
        <p>Section 1</p>
      </div>{" "}
      <div className="st-box">
        <p>Section 2</p>
      </div>
      <div className="st-box">
        <div className="title-container">
          <h1>
            <span>
              {"RIJIN".split("").map((e) => (
                <span>{e} </span>
              ))}
            </span>
          </h1>
        </div>
      </div>
      <div className="st-box big">
        <div className="st-image-container">
          <div
            className="image-box"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1713551456730-ba311f8c940c?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
            }}
          ></div>
          <div
            className="image-box"
            style={{
              backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1673152979577-64b00806a6d1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
            }}
          ></div>
          <div
            className="image-box"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1713296416394-7889c4955862?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
            }}
          ></div>
          <div
            className="image-box"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1712149851157-06131345e410?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
            }}
          ></div>
          <div
            className="image-box"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1713160848425-09f7186c2177?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
            }}
          ></div>
          <div
            className="image-box"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1699431697483-6d5a57032878?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
            }}
          ></div>
        </div>
      </div>
      <div className="st-box">
        <p>Section 5</p>
      </div>
    </div>
  );
}

export default ScrollTriggerPractice1;
