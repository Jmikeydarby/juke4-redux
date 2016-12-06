import React, { Component } from 'react';
import store from '../store';
import Lyrics from "../components/Lyrics";
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';


class LyricsContainer extends Component {
  constructor () {
    super();
    this.state = Object.assign({},
      store.getState(),
      {
        artistQuery: "",
        songQuery: ""
      }
    );
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  setArtist (text) {
    this.setState({
      artistQuery: text
    })
  }

  setSong (text) {
    this.setState({
      songQuery: text
    })

  }

  handleSubmit (evt) {
    evt.preventDefault();
    if (this.state.artistQuery && this.state.songQuery){
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  render () {
    return (
      <Lyrics
        text={this.state.lyrics.text}
        setArtist={this.setArtist}
        setSong={this.setSong}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        submit={this.handleSubmit}
        />
    )
  }

}

export default LyricsContainer;
