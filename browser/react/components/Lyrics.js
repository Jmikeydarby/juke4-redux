import React from 'react';

const Lyrics = (props) => {
  const artistChange = e => {
    props.setArtist(e.target.value);
  }
  const songChange = e => {
    props.setSong(e.target.value);
  }

  return (
    <form onSubmit={props.submit}>
      <input className="artistquery"
        type="text"
        value={props.artistQuery}
        onChange={artistChange}
        placeholder="Enter Artist Name"/>
      <input className="songquery"
        type="text"
        value={props.songQuery}
        onChange={songChange}
        placeholder="Enter Song Name"
        />
      <pre>{props.text || 'Search above!'}</pre>
      <button
        type="submit"
        className="btn btn-success">Search for Lyrics</button>
    </form>
  )
}

export default Lyrics;
