import { gql } from '@apollo/client';

const CARDS = gql`
  query cards($pipe_id: ID!) {
    cards(pipe_id: $pipe_id) {
      edges {
        cursor
        node {
          current_phase {
            color
            name
          }
          id
          title
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export default CARDS;
