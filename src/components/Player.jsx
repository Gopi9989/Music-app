import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  onNextSong,
  onPreviousSong,
}) => {
  return (
    <div className="player container p-4 shadow position-fixed">
      <AudioPlayer
        className="audio-player"
        autoPlay={isPlaying}
        src={currentSong}
        onPlay={(e) => setIsPlaying(true)}
        onPause={(e) => setIsPlaying(false)}
        onClickNext={onNextSong} // Add forward functionality
        onClickPrevious={onPreviousSong} // Add backward functionality
        showSkipControls={true} // Enable skip controls
        showJumpControls={true} // Disable jump controls
      />
    </div>
  );
};

export default Player;