const video = document.getElementById("my-video");
const wrapper = document.getElementById("video-wrapper");
const action = document.getElementById("actions");
const source = document.createElement("source");
const videoWrapper = document.getElementById("upper-ctrl");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const muteBtn = document.getElementById("mute-btn");
const progressBar = document.getElementById("seek-bar");
const fullscreen = document.getElementById("fullscreen-btn");

video.controls = false;
video.muted = false;
video.autoplay = false;
videoPlaying = false;

movies = ["bb.mp4", "bigbuck.mp4"];
movieNum = 0;

// wrapper.addEventListener("mousemove", (e) => {
//   action.style.opacity = 1;
//   action.style.transition = "opacity .25s cubic-bezier(0, 0, .2, 1)";
//   console.log(1);
// });

// wrapper.addEventListener("mouseleave", (e) => {
//   action.style.opacity = 0;
//   action.style.display = "none";
//   action.style.
// });

source.setAttribute("src", "/video");
source.setAttribute("type", "video/mp4");

video.appendChild(source);

// play pause

videoWrapper.addEventListener("click", (e) => {
  // videoPlaying ? video.pause() : video.play();
  // videoPlaying = !videoPlaying;
  changePlayPause();
});

const path = playBtn.children[0].children[0];

const changePlayPause = () => {
  if (videoPlaying) {
    video.pause();
    path.setAttribute(
      "d",
      "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
    );
  } else {
    video.play();
    path.setAttribute(
      "d",
      "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
    );
  }
  videoPlaying = !videoPlaying;
};

playBtn.addEventListener("click", function () {
  // videoPlaying ? video.pause() : video.play();
  // videoPlaying = !videoPlaying;
  changePlayPause();
});

// <path
//   d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
// ></path>

window.addEventListener("keypress", function (e) {
  if (e.key == " ") {
    // videoPlaying ? video.pause() : video.play();
    // videoPlaying = !videoPlaying;
    changePlayPause();
  }
});

// next movie

nextBtn.addEventListener("click", (e) => {
  source.setAttribute("src", "/assets/" + movies[movieNum++]);
  console.log(source.src);
  if (movieNum > movies.length) {
    movieNum = 0;
  }
});

// volume changes

muteBtn.addEventListener("click", function () {
  video.muted ? (video.muted = false) : (video.muted = true);
});

window.addEventListener("keypress", function (e) {
  if (e.key == "m") {
    video.muted ? (video.muted = false) : (video.muted = true);
  }
});

// progress changes

video.addEventListener("timeupdate", () => {
  progressBar.value = video.currentTime;
});

video.addEventListener("loadedmetadata", () => {
  progressBar.setAttribute("max", video.duration);
});

progressBar.addEventListener("change", (e) => {
  video.pause();
  const manualChange = Number(e.target.value);
  video.currentTime = manualChange;
});

// fullscreen changes

const handleFullScreen = () => {
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
    setFullScreenData(false);
  } else {
    wrapper.requestFullscreen();
    setFullScreenData(true);
  }
};

window.addEventListener("keypress", (e) => {
  if (e.key == "f") handleFullScreen();
});

fullscreen.addEventListener("click", (e) => {
  handleFullScreen();
});

function setFullscreenData(state) {
  wrapper.setAttribute("data-fullscreen", !!state);
}
