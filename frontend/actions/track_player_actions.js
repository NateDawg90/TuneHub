export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';


export const addTrackToQueue = (track, artist) => ({
  type: ADD_TO_QUEUE,
  track,
  artist
});
