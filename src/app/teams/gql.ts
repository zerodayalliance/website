import { gql } from "graphql-request";

export const GetTeams = gql`
  query TenuresCollection {
    tenuresCollection(limit: 10) {
      total
      skip
      limit
      items {
        _id
        id
        name
        slug
        teamsCollection(limit: 10) {
          total
          skip
          limit
          items {
            ... on Teams202425 {
              _id
              id
              name
              membersCollection(limit: 15) {
                total
                skip
                limit
                items {
                  _id
                  uid
                  name
                  role
                  bio
                  linkedin
                  github
                  twitter
                  instagram
                  facebook
                  email
                  website
                  pfp {
                    title
                    description
                    contentType
                    size
                    url
                    width
                    height
                  }
                }
              }
            }
            ... on Teams202526 {
              _id
              id
              name
              membersCollection(limit: 15) {
                total
                skip
                limit
                items {
                  _id
                  uid
                  name
                  role
                  bio
                  linkedin
                  github
                  twitter
                  instagram
                  facebook
                  email
                  website
                  pfp {
                    title
                    description
                    contentType
                    size
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
