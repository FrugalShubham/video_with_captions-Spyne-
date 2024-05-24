import React, { useState } from 'react';

const VideoInput = ({ setVideoUrl }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideoUrl(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter video URL" 
        value={url}
        onChange={(e) => setUrl(e.target.value)} 
      />
      <button type="submit">Load Video</button>
    </form>
  );
};

export default VideoInput;
