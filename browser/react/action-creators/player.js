import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from "../constants";
import AUDIO from '../audio';

export const startPlaying = () => {
  return {
    type: START_PLAYING,
  };
};

export const play = function() {
  return function(dispatch, getState) {
    AUDIO.play();
    dispatch(startPlaying());
  };
};

export const setCurrentSong = (currentSong) => {
  return {
    type: SET_CURRENT_SONG,
    currentSong: currentSong
  };
};

export const setList = (list) => {
  return {
    type: SET_LIST,
    currentSongList: list
  };
};

export const load = function(currentSong, list) {
  return function(dispatch, getState) {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    dispatch(setCurrentSong(currentSong));
    dispatch(setList(list));
  };
};

export const stopPlaying = () => {
  return {
    type: STOP_PLAYING,
  };
};

export const stopPlay = function() {
  return function(dispatch, getState) {
    AUDIO.pause();
    dispatch(stopPlaying());
  };
};
