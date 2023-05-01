import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar(props) {
  const [parentRef, setParentRef] = useState(props.myRef);
  // console.log("in progressbar.js");
  // console.log(props.myRef);
  // useEffect(() => {}, [props.myRef.current]);

  return (
    <div className="progress-bar">
      <input type="range" className="seek-bar" min={0} value="0" />
    </div>
  );
}
