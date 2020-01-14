import { RelationMappings } from 'objection'

import Account from './account'
import BaseModel from './base-model'

class Budget extends BaseModel {
  id?: string
  name?: string
  accounts?: Account[]

  static tableName = 'budgets'

  static relationMappings: RelationMappings = {
    accounts: {
      relation: Budget.HasManyRelation,
      modelClass: Account,
      join: {
        from: 'budgets.id',
        to: 'accounts.budget_id',
      },
    },
  }
}

export default Budget
