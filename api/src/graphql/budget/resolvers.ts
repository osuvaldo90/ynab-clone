import { BudgetResolvers, QueryResolvers, Budget, Resolvers } from '@app/graphql/types'

const getBudget = (id: string): Budget => {
  return { id }
}

const Query: QueryResolvers = {
  getBudget: (root, { id }) => ({ budget: getBudget(id) }),
}

const Budget: BudgetResolvers = {
  doStuff: (root, { n }) => `${n}`,
}

const resolvers: Resolvers = { Query, Budget }

export default resolvers
