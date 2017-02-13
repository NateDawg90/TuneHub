export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const PAUSE = 'PAUSE';
export const PLAY = 'PLAY';



export const addTrackToQueue = (track, artist) => ({
  type: ADD_TO_QUEUE,
  track,
  artist
});

export const pauseTrack = () => ({
  type: PAUSE
});

export const playTrack = () => ({
  type: PLAY
});
