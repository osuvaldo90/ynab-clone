import { ApolloServer } from 'apollo-server'
import { Model } from 'objection'

import knex from './db/knex'
import graphql from './graphql'

Model.knex(knex)

export default new ApolloServer({ schema: graphql.schema })
