import { gql } from '@apollo/client';

const ORGANIZATION = gql`
  query organization($id: ID!) {
    organization(id: $id) {
      name
      pipes {
        cards_count
        color
        description
        icon
        id
        name
      }
    }
  }
`;

export default ORGANIZATION;
