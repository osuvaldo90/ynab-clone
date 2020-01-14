import Account from '@app/db/models/account'
import AccountTransaction from '@app/db/models/account-transaction'

interface CreateAccountInput {
  budgetId: string
  name: string
  startingBalance: number
}

const getFlow = (startingBalance: number): { outflow?: number; inflow?: number } =>
  startingBalance < 0 ? { outflow: startingBalance } : { inflow: startingBalance }

async function createAccount({
  budgetId,
  name,
  startingBalance,
}: CreateAccountInput): Promise<Account> {
  return Account.transaction(async transaction => {
    const account = await Account.query(transaction).insert({ budgetId, name })

    await AccountTransaction.query(transaction).insert({
      accountId: account.id,
      ...getFlow(startingBalance),
    })

    return account
  })
}

export default createAccount
