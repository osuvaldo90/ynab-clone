import { GraphQLModule } from '@graphql-modules/core'

import scalars from '@app/graphql/scalars'

import resolvers from './resolvers'
import typeDefs from './type-defs'

export default new GraphQLModule({
  imports: [scalars],
  typeDefs,
  resolvers,
})
