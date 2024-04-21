

import React, { useEffect } from 'react';
import useSound from 'use-sound';
import music from '../assets/sunnyday.mp3';

const Music = ({ isPlaying }) => {
  const [play, { pause }] = useSound(music, { loop: true, volume: 0.004});

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }

    return () => pause(); // Pause the music when component unmounts
  }, [isPlaying, play, pause]);

  return null; // MusicPlayer doesn't render anything directly
};

export default Music;
