import gql from "graphql-tag"; 

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
}`;

export default mutation;