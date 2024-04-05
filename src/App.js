import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".box", { x: 100 });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="container">
      <div className="box"></div>
    </div>
  );
}

export default App;
