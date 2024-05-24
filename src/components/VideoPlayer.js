import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, captions }) => {
  const playerRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const caption = captions.find(
          (caption) => Math.floor(caption.timestamp) === Math.floor(currentTime)
        );
        setCurrentCaption(caption ? caption.text : '');
      }
    }, 500);
    return () => clearInterval(interval);
  }, [captions]);

  return (
    <div>
      <ReactPlayer ref={playerRef} url={videoUrl} controls />
      <div className="caption">
        {currentCaption}
      </div>
    </div>
  );
};

export default VideoPlayer;
