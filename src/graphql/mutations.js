/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSolution = /* GraphQL */ `
  mutation CreateSolution(
    $input: CreateSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    createSolution(input: $input, condition: $condition) {
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
export const updateSolution = /* GraphQL */ `
  mutation UpdateSolution(
    $input: UpdateSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    updateSolution(input: $input, condition: $condition) {
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
export const deleteSolution = /* GraphQL */ `
  mutation DeleteSolution(
    $input: DeleteSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    deleteSolution(input: $input, condition: $condition) {
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
