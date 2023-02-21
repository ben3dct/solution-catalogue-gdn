/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSolution = /* GraphQL */ `
  query GetSolution($id: ID!) {
    getSolution(id: $id) {
      id
      title
      other_resources {
        title
        link
        category
      }
      gh_repo
      category {
        governance
        devops
        containers
        serverless
        migration
        networking
        security
        storage
        messaging_streaming
        iot
        mlops
      }
      services
      IaC_Tools
      language {
        cpp
        net
        go
        java
        js
        kotlin
        php
        py
        ruby
        swift
      }
      features {
        name
        description
        generalization
        status
        assignee
      }
      owners
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
        gh_repo
        services
        IaC_Tools
        owners
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
