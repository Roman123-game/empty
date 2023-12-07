import React, { useLayoutEffect, useRef, useState } from "react";
import "./App.css"
function App() {
  const elementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setElementWidth(width);
      }
    }

    handleResize(); // initial call to get width and height of the element
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  return (
    <div className="container">
      <div className="card" ref={elementRef}>
        <h3>Get Width and Height</h3>
        <p>
          Width: <strong>{elementWidth}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;