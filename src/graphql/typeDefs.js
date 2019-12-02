import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        helloWorld: String!
        getUsers: [User!]!
    }

    type Mutation {
        postUser(name: String!, email: String, password: String!): User!
    }

    type User {
        id: ID!
        name: String!
        email: String
        password: String!
    }
`
