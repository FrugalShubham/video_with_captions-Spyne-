import React, { useState } from 'react';

const CaptionInput = ({ addCaption }) => {
  const [timestamp, setTimestamp] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCaption(timestamp, text);
    setTimestamp('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Timestamp (in seconds)" 
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Caption text" 
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Add Caption</button>
    </form>
  );
};

export default CaptionInput;
