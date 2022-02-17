import { gql } from '@apollo/client';

const CARDS = gql`
  query cards($pipe_id: ID!, $first: Int, $after: String) {
    cards(pipe_id: $pipe_id, first: $first, after: $after) {
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
