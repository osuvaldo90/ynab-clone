import { GraphQLModule } from '@graphql-modules/core'

import budgetModule from './budget'

export default new GraphQLModule({
  imports: [budgetModule],
})
