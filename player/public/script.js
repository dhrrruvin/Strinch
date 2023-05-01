const playPauseBtn = document.querySelector(".play-btn");
const fullScreenBtn = document.querySelector(".fullscreen-btn");
// const settingBtn = document.querySelector(".settings-btn");
const muteBtn = document.querySelector(".volume-btn");
const volumeSlider = document.querySelector(".volume-slider");
const currentTime = document.querySelector(".current-time");
const totalTime = document.querySelector(".total-time");
const video = document.querySelector("video");
const container = document.querySelector(".container");
const playbackAction = document.querySelector(".playback-window");
const qualityAction = document.querySelector(".quality-window");
const previewImg = document.querySelector(".preview-img");
const thumbnailImg = document.querySelector(".thumbnail-img");
const timelineContainer = document.querySelector(".timeline-container");
const upperContainer = document.querySelector(".upper-container");

video.preload = "metadata";

document.addEventListener("keydown", (e) => {
  const tagName = document.activeElement.tagName.toLowerCase();

  if (tagName === "input") return;

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return;
    case "k":
      togglePlay();
      break;

    case "m":
      toggleMute();
      break;

    case "arrowleft":
      skip(-5);
      break;

    case "arrowright":
      skip(5);
      break;

    case "f":
      toggleFullScreen();
      break;

    default:
      break;
  }
});

// Timeline

let isScrubbing = false;

const toggleScrubbing = (e) => {
  const rect = timelineContainer.getBoundingClientRect();
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
  isScrubbing = (e.buttons & 1) === 1;
  container.classList.toggle("scrubbing", isScrubbing);
  if (isScrubbing) {
    wasPaused = video.paused;
    video.pause();
  } else {
    video.currentTime = percent * video.duration;
    if (!wasPaused) {
      video.play();
    }
  }
  handleTimelineUpdate(e);
};

const handleTimelineUpdate = (e) => {
  const rect = timelineContainer.getBoundingClientRect();
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
  const previewImgNumber = Math.max(
    1,
    Math.floor((percent * video.duration) / 10)
  );
  const previewImgSrc = `./assets/preview/preview${previewImgNumber}.jpg`;
  previewImg.src = previewImgSrc;

  timelineContainer.style.setProperty("--preview-position", percent);

  if (isScrubbing) {
    e.preventDefault();
    // thumbnailImg.src = previewImgSrc;
    timelineContainer.style.setProperty("--progress-position", percent);
  }
};

timelineContainer.addEventListener("mousemove", handleTimelineUpdate);

document.addEventListener("mouseup", (e) => {
  if (isScrubbing) toggleScrubbing(e);
});

document.addEventListener("mousemove", (e) => {
  if (isScrubbing) handleTimelineUpdate(e);
});

timelineContainer.addEventListener("mousedown", toggleScrubbing);

// play/pause

const togglePlay = () => {
  video.paused ? video.play() : video.pause();
};

upperContainer.addEventListener("click", togglePlay);

video.addEventListener("play", () => {
  container.classList.remove("paused");
});

video.addEventListener("pause", () => {
  container.classList.add("paused");
});

video.addEventListener("keydown", (e) => {
  if (e.key == " ") togglePlay();
});

playPauseBtn.addEventListener("click", togglePlay);

// Volume Buttons

const toggleMute = () => {
  video.muted = !video.muted;
};

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume;

  let volumeLevel;

  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0;
    volumeLevel = "mute";
  } else if (video.volume >= 0.5) {
    volumeLevel = "high";
  } else {
    volumeLevel = "low";
  }

  container.dataset.volumeLevel = volumeLevel;
});

muteBtn.addEventListener("click", toggleMute);

volumeSlider.addEventListener("input", (e) => {
  video.volume = e.target.value;
  video.muted = e.target.value === 0;
});

// Duration

const skip = (duration) => {
  video.currentTime += duration;
};

video.addEventListener("timeupdate", () => {
  currentTime.textContent = formatDuration(video.currentTime);
  const percent = video.currentTime / video.duration;
  timelineContainer.style.setProperty("--progress-position", percent);
});

video.addEventListener("loadedmetadata", () => {
  totalTime.textContent = formatDuration(video.duration);
});

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

const formatDuration = (time) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60) % 60;
  const hrs = Math.floor(time / 3600);
  if (hrs === 0) {
    return `${min}:${leadingZeroFormatter.format(sec)}`;
  } else {
    return `${hrs}:${leadingZeroFormatter.format(
      min
    )}:${leadingZeroFormatter.format(sec)}`;
  }
};

// Quality

let quality = "1080p";

const qualityBtns = document.getElementsByClassName("quality-class");

qualityBtns[0].style.backgroundColor = "red";
qualityBtns[0].style.borderRadius = "15px";

for (let i = 0; i < qualityBtns.length; i++) {
  qualityBtns[i].addEventListener("click", (e) => {
    quality = e.target.textContent;

    for (let j = 0; j < qualityBtns.length; j++) {
      qualityBtns[j].style.backgroundColor = "#111111";
    }

    qualityBtns[i].style.backgroundColor = "red";
    qualityBtns[i].style.borderRadius = "15px";
  });
}

qualityAction.addEventListener("click", () => {
  if (container.classList.contains("quality")) {
    container.classList.remove("quality");
  } else {
    container.classList.add("quality");
    container.classList.remove("caption");
    container.classList.remove("playback");
  }
});

// Playback

let playbackSpeed = 1;

const a = document.getElementsByTagName("label");

a[3].style.backgroundColor = "red";
a[3].style.borderRadius = "15px";

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", (e) => {
    let playbackSpeed = e.target.textContent;
    if (playbackSpeed === "Normal") {
      playbackSpeed = 1;
    }
    video.playbackRate = parseFloat(playbackSpeed);
    for (let j = 0; j < a.length; j++) {
      if (i != j) {
        a[j].style.backgroundColor = "#111111";
      }
    }
    a[i].style.backgroundColor = "red";
    a[i].style.borderRadius = "15px";
  });
}

playbackAction.addEventListener("click", () => {
  if (container.classList.contains("playback")) {
    container.classList.remove("playback");
  } else {
    container.classList.add("playback");
    container.classList.remove("quality");
    container.classList.remove("caption");
  }
});

// Full Screen

document.addEventListener("fullscreenchange", () => {
  container.classList.toggle("fullscreen", document.fullscreenElement);
});

const toggleFullScreen = () => {
  if (document.fullscreenElement == null) {
    container.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
  container.classList.toggle("fullscreen");
};

fullScreenBtn.addEventListener("click", toggleFullScreen);
