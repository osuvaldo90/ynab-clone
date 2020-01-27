import { gql } from 'apollo-server'

export default gql`
  type Budget {
    id: UUID
    name: String

    doStuff(n: Int!): String
  }

  type GetBudgetPayload {
    budget: Budget
  }

  type Query {
    getBudget(id: UUID!): GetBudgetPayload
  }

  input CreateBudgetInput {
    name: String!
  }

  type Mutation {
    createBudget(input: CreateBudgetInput): GetBudgetPayload
  }
`
