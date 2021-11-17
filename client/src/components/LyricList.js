import "./LyricList.css";
import React from 'react';
import { graphql } from "react-apollo";

import likeLyric from "../queries/likeLyric";

class LyricList extends React.Component {

  onLike = (id, likes) => {
    this.props.mutate({ 
      variables: {id: id},
      optimisticResponse: {
        __typename: "Mutation", 
        likeLyric: {
          __typename: "LyricType", 
          id: id, 
          likes: likes + 1 
        }  
      }
    })
  }
  
  renderLyrics() {
    return this.props.lyrics.map( ({id, content, likes}) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i 
              className="material-icons"
              onClick={()=>this.onLike(id, likes)}
            >thumb_up</i>
            <span className="likes-count">{likes}</span>
          </div>  
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);