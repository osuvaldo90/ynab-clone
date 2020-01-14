import { RelationMappings } from 'objection'

import BaseModel from './base-model'
import Budget from './budget'

class Account extends BaseModel {
  id?: string
  budgetId?: string
  name?: string
  accounts?: Account[]
  budget?: Budget

  static tableName = 'accounts'

  static relationMappings: RelationMappings = {
    budget: {
      relation: Account.BelongsToOneRelation,
      modelClass: Budget,
      join: {
        from: 'accounts.budget_id',
        to: 'budgets.id',
      },
    },
  }
}

export default Account
