import React from 'react';
import { graphql } from "react-apollo";

import createLyric from "../queries/createLyric";
//import fetchSong from "../queries/fetchSong";

class LyricCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {content: ""};
  }

  onSubmit = (e) => {
    e.preventDefault();

    //submit mutation query to GQL
    this.props.mutate({
        variables: { 
          content: this.state.content, 
          songId: this.props.songId 
        }
    }).then(()=>{
      this.setState({content: ""});
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a Lyric:</label>
        <input 
          value={this.state.content}
          onChange={(e)=>this.setState({content: e.target.value})}
        />
      </form>        
    )
  }
}

export default graphql(createLyric)(LyricCreate);