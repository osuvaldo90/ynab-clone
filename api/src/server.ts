import { ApolloServer, gql } from 'apollo-server'
import { Model } from 'objection'

import knex from './db/knex'

Model.knex(knex)

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: { hello: (): string => 'Hello world!' },
}

const server = new ApolloServer({ typeDefs, resolvers })

export default server
