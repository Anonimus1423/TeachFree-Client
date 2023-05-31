import { useState } from "react";
import { ReactComponent as PlayButtonIcon } from "../../../images/icons/Video Play.svg";
import ReactPlayer from "react-player";

function VideoButton() {
  const [play, setPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (play) {
    return (
      <>
        <div
          className="video-black-background"
          onClick={() => setPlay((state) => !state)}
        ></div>
        <div
          className={
            !isPlaying ? "video active cover-page-video fixed-video" : "cover-page-video video fixed-video"
          }
        >
          <div className="background"></div>
          <ReactPlayer
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            width={"100%"}
            height={"auto"}
            url={
              "https://golanguageschool.org/wp-content/uploads/2022/10/SIA-Armenia-2022-Finalist_-Teach-Free.mp4"
            }
            controls={true}
          />
        </div>
      </>
    );
  }
  return (
    <button className="play-button" onClick={() => setPlay((state) => !state)}>
      <PlayButtonIcon />
      <h4 className="subtitle">Teach Free նախագծի մասին</h4>
    </button>
  );
}

export default VideoButton;
