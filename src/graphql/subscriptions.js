/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSolution = /* GraphQL */ `
  subscription OnCreateSolution($filter: ModelSubscriptionSolutionFilterInput) {
    onCreateSolution(filter: $filter) {
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
export const onUpdateSolution = /* GraphQL */ `
  subscription OnUpdateSolution($filter: ModelSubscriptionSolutionFilterInput) {
    onUpdateSolution(filter: $filter) {
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
export const onDeleteSolution = /* GraphQL */ `
  subscription OnDeleteSolution($filter: ModelSubscriptionSolutionFilterInput) {
    onDeleteSolution(filter: $filter) {
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
