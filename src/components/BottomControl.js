import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Actions from "./Actions";
import "./BottomControl.css";

export default function BottomControl(props) {
  // const [parentRef, setParentRef] = useState(props.myRef);
  // console.log("in bottom control");
  // console.log(props.myRef);
  // useEffect(() => {}, [props.myRef.current]);

  return (
    <div className="bottom-ctrl">
      <div className="actions">
        <ProgressBar myRef={props.myRef} />
        <Actions myRef={props.myRef} />
      </div>
    </div>
  );
}
