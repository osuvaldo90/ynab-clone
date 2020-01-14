import { RelationMappings } from 'objection'

import Account from './account'
import BaseModel from './base-model'

class AccountTransaction extends BaseModel {
  static tableName = 'account_transactions'

  id?: string
  accountId?: string
  inflow?: number
  outflow?: number

  static relationMappings: RelationMappings = {
    account: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Account,
      join: {
        from: 'accounts.id',
        to: 'account_transactions.account_id',
      },
    },
  }
}

export default AccountTransaction
