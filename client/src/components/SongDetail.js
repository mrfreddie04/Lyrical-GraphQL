import React from 'react';
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSong from "../queries/fetchSong";

class SongDetail extends React.Component {

  render() {
    const {song} = this.props.data;
    //console.log(this.props.data);
    if(!song) 
      return (
        <div>Loading...</div> 
      );

    const {title, id, lyrics} = song;
      
    return (
      <div>
        <Link to="/">Back</Link>        
        <h3>{title}</h3>
        <LyricList lyrics={lyrics}/>
        <LyricCreate songId={id}/>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => { return {variables: {id: props.match.params.id}}}
})(SongDetail);