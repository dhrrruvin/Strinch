import React, { useEffect, useRef } from "react";
import "./UpperControl.css";

export default function UpperControl(props) {
  const videoElement = useRef(null);

  props.updateMyRef(videoElement.current);
  useEffect(() => {
    console.log("in upper control");
    props.updateMyRef(videoElement.current);
    console.log(videoElement.current);
  }, [videoElement, props]);

  return (
    <div className="upper-control">
      <video width="100%" height="100%" autoPlay ref={videoElement} />
    </div>
  );
}
