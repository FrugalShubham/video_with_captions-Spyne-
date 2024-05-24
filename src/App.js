
import './App.css';
import React, { useState } from 'react';
import VideoInput from './components/VideoInput';
import CaptionInput from './components/CaptionInput';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  const addCaption = (timestamp, text) => {
    setCaptions([...captions, { timestamp, text }]);
  };

  return (
    <div className="App">
      <h1>Video Captioner</h1>
      <VideoInput setVideoUrl={setVideoUrl} />
      <CaptionInput addCaption={addCaption} />
      <VideoPlayer videoUrl={videoUrl} captions={captions} />
    </div>
  );
}

export default App;

