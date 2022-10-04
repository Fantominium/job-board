import { gql } from "apollo-server";
export const typeDefs = gql`
type Query {
    job(id: ID!): Job
    jobs:[Job!]
    company(id: ID!): Company
}
type Mutation {
    createJob(input: CreateJobInput!): Job
}

type Company {
    id: ID!
    name: String!
    description: String
    jobs: [Job!]

}
type Job {
    id: ID!
    title: String!
    company: Company!
    description: String
}

input CreateJobInput {
    title: String!,
    companyId: ID!,
    description: String
}


`

