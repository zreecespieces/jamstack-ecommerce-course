import { gql } from "@apollo/client"

export const GET_DETAILS = gql`
  query getDetails($id: ID!) {
    product(id: $id) {
      id
      rating
      variants {
        qty
      }
    }
  }
`
export const GET_REVIEWS = gql`
  query getReviews($id: ID!) {
    product(id: $id) {
      id
      reviews {
        id
        text
        rating
        updatedAt
        user {
          username
        }
      }
    }
  }
`
