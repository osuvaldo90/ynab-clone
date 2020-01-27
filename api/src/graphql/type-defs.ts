import graphql from '@app/graphql'

// we expose the gql schema here for graphql-codegen to read so it can generate
// TypeScript types for GQL types and resolvers
export default graphql.typeDefs
