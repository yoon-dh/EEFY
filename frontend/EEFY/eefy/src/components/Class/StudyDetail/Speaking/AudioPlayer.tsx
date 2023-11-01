import React from 'react';

function AudioPlayer() {
  const dummyData = {
    url: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3',
  };

  return (
    <div>
      <audio controls className='w-96'>
        <source src={dummyData.url} type='audio/mp4' />
      </audio>
    </div>
  );
}

export default AudioPlayer;
