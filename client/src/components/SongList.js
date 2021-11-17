import "./SongList.css";
import React from 'react';
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import fetchSongs from "../queries/fetchSongs"
import deleteSong from "../queries/deleteSong"

class SongList extends React.Component {

  onDelete = (id) => {
    //console.log(this.props);
    //submit mutation query to GQL
    this.props.mutate({
        variables: { id:id }
        //,refetchQueries: [ {query:fetchSongs} ]
    }).then(() => {
      this.props.data.refetch();
    });
  }

  renderSongs() {
    if(this.props.data.loading) 
      return (
        <div>Loading...</div> 
      );

    return this.props.data.songs.map( ({id,title}) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i 
            className="material-icons"
            onClick={(e)=>{
              e.stopPropagation();
              this.onDelete(id);
            }}
          >
            delete
          </i>
        </li>
      )
    });
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="/songs/new" className="button-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(deleteSong)(
  graphql(fetchSongs)(SongList)
);