import GraphQLUUID = require('graphql-type-uuid')
import { GraphQLModule } from '@graphql-modules/core'
import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar UUID
`

const resolvers = {
  UUID: GraphQLUUID,
}

export default new GraphQLModule({ resolvers, typeDefs })
