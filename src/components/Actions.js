import React, { useState, useEffect } from "react";
import "./Actions.css";

function Actions(props) {
  const [parentRef, setParentRef] = useState(props.myRef);
  // console.log("in actions.js");
  // console.log(props.myRef);
  // useEffect(() => {}, [props.myRef.current]);
  return (
    <>
      <div className="action-left">
        <div className="play-btn-div">
          <button className="play-btn" id="play-btn">
            <svg
              height="48px"
              fill="#FFFFFF"
              version="1.1"
              viewBox="0 0 36 36"
              width="46px"
            >
              <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
            </svg>
          </button>
        </div>
        <div className="next-btn-div">
          <button className="next-btn" id="next-btn">
            <svg
              height="48px"
              fill="#FFFFFF"
              version="1.1"
              viewBox="0 0 36 36"
              width="46px"
            >
              <path
                d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"
                id="ytp-id-13"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mute-btn-div">
          <button className="mute-btn" id="mute-btn">
            <svg
              height="48px"
              fill="#FFFFFF"
              version="1.1"
              viewBox="0 0 36 36"
              width="46px"
            >
              <path
                d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"
                id="ytp-id-17"
              ></path>
            </svg>
          </button>
        </div>
        <div className="audio-range-div">
          <input
            className="audio-range"
            type="range"
            min="0"
            max="100"
            value="0"
          />
        </div>
      </div>
      <div className="action-right">
        <button className="settings-btn">
          <svg height="48px" version="1.1" viewBox="0 0 36 36" width="46px">
            <path
              d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <button id="fullscreen-btn">
          <svg
            height="48px"
            fill="#FFFFFF"
            version="1.1"
            viewBox="0 0 36 36"
            width="46px"
          >
            <g className="ytp-fullscreen-button-corner-0">
              <path
                d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"
                id="ytp-id-7"
              ></path>
            </g>
            <g className="ytp-fullscreen-button-corner-1">
              <use className="ytp-svg-shadow"></use>
              <path
                className="ytp-svg-fill"
                d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"
                id="ytp-id-8"
              ></path>
            </g>
            <g className="ytp-fullscreen-button-corner-2">
              <use className="ytp-svg-shadow"></use>
              <path
                className="ytp-svg-fill"
                d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"
                id="ytp-id-9"
              ></path>
            </g>
            <g className="ytp-fullscreen-button-corner-3">
              <use className="ytp-svg-shadow"></use>
              <path
                className="ytp-svg-fill"
                d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"
                id="ytp-id-10"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Actions;
