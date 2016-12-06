import { SET_LYRICS } from '../constants';
import axios from 'axios';

export const setLyrics = (text) => {
  return {
    type: SET_LYRICS,
    lyrics: text
  }
}

export const fetchLyrics = (artist, song) => {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(response => dispatch(setLyrics(response.data.lyric)))
      .catch(err => {
        if (err.response.status === 404) {
          const lyricAction = setLyrics("Lyric Not Found");
          dispatch(lyricAction);
        } else {
          throw new Error(err);
        }

      });
  };
};
