import React from "react";
import BottomControl from "./BottomControl";
import "./Container.css";
import { useRef } from "react";
import useVideoPlayer from "./../hooks/useVideoPlayer";

export default function Container() {
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullScreen,
  } = useVideoPlayer(videoElement);

  return (
    <div className="container">
      <div className="video-wrapper" onClick={togglePlay}>
        {/* {console.log(videoElement)} */}
        {/* <UpperControl updateMyRef={(ref) => (videoElement.current = ref)} /> */}
        <div className="upper-control">
          <video width="100%" height="100%" autoPlay ref={videoElement} />
        </div>
        {/* {console.log("in container")}
        {console.log(videoElement)} */}
        <BottomControl myRef={useVideoPlayer(videoElement)} />
      </div>
    </div>
  );
}
