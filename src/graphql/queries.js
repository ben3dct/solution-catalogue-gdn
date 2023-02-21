/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSolution = /* GraphQL */ `
  query GetSolution($id: ID!) {
    getSolution(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const listSolutions = /* GraphQL */ `
  query ListSolutions(
    $filter: ModelSolutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSolutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
