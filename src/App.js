import React, { useRef } from "react";
import "./styles.css";
import useClickOutside from "./hooks/useClickOutside";

export default function App() {
  const divRef = useRef();

  const onClickOutsideHandler = () => {
    console.log("Hit!");
  };

  useClickOutside(divRef, onClickOutsideHandler);

  return (
    <div className="App">
      <div className="box" ref={divRef} />
    </div>
  );
}
