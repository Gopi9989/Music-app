import { useState } from "react";
import Header from "./Header";
import Albums from "./Albums";
import Player from "./Player";
import { albums } from "../data/songesData";

const MusicApp = ({ onHandleDark, mode }) => {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0); // Track current album
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track current song in the album
  const [currentSong, setCurrentSong] = useState(albums[0].songs[0].src); // Current song source
  const [currentImg, setCurrentImg] = useState(albums[0].songs[0].image); // Current song image
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle next song
  const handleNextSong = () => {
    const currentAlbum = albums[currentAlbumIndex];
    const nextSongIndex = currentSongIndex + 1;

    if (nextSongIndex < currentAlbum.songs.length) {
      setCurrentSongIndex(nextSongIndex);
      setCurrentSong(currentAlbum.songs[nextSongIndex].src);
      setCurrentImg(currentAlbum.songs[nextSongIndex].image);
      setIsPlaying(true);
    } else {
      // Move to the next album if available
      const nextAlbumIndex = currentAlbumIndex + 1;
      if (nextAlbumIndex < albums.length) {
        setCurrentAlbumIndex(nextAlbumIndex);
        setCurrentSongIndex(0);
        setCurrentSong(albums[nextAlbumIndex].songs[0].src);
        setCurrentImg(albums[nextAlbumIndex].songs[0].image);
        setIsPlaying(true);
      } else {
        console.log("End of playlist");
      }
    }
  };

  // Function to handle previous song
  const handlePreviousSong = () => {
    const currentAlbum = albums[currentAlbumIndex];
    const prevSongIndex = currentSongIndex - 1;

    if (prevSongIndex >= 0) {
      setCurrentSongIndex(prevSongIndex);
      setCurrentSong(currentAlbum.songs[prevSongIndex].src);
      setCurrentImg(currentAlbum.songs[prevSongIndex].image);
      setIsPlaying(true);
    } else {
      // Move to the previous album if available
      const prevAlbumIndex = currentAlbumIndex - 1;
      if (prevAlbumIndex >= 0) {
        const prevAlbum = albums[prevAlbumIndex];
        setCurrentAlbumIndex(prevAlbumIndex);
        setCurrentSongIndex(prevAlbum.songs.length - 1);
        setCurrentSong(prevAlbum.songs[prevAlbum.songs.length - 1].src);
        setCurrentImg(prevAlbum.songs[prevAlbum.songs.length - 1].image);
        setIsPlaying(true);
      } else {
        console.log("Beginning of playlist");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <Header onHandleDark={onHandleDark} mode={mode} />
      <Albums
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        currentImg={currentImg}
        setCurrent Img={setCurrentImg}
        setCurrentAlbumIndex={setCurrentAlbumIndex}
        setCurrentSongIndex={setCurrentSongIndex}
      />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onNextSong={handleNextSong}
        onPreviousSong={handlePreviousSong}
      />
    </div>
  );
};

export default MusicApp;