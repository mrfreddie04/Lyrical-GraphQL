import React from 'react';
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";

import history from "../history";
import fetchSongs from "../queries/fetchSongs";
import createSong from "../queries/createSong";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: ""};
  }

  onSubmit = (e) => {
    e.preventDefault();

    //submit mutation query to GQL
    this.props.mutate({
        variables: { title: this.state.title },
        refetchQueries: [ {query:fetchSongs} ]
    }).then(()=>{
      history.push("/");
    });  
  }

  render() {
    return (
      <div>
        <Link to="/" >Back</Link>        
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input 
            value={this.state.title}
            onChange={(e)=>this.setState({title: e.target.value})}
          />
        </form>
      </div>
    )
  }
}

export default graphql(createSong)(SongCreate);