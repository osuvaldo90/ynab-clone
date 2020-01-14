import Budget from '@app/db/models/budget'

interface CreateBudgetInput {
  name: string
}

function createBudget(input: CreateBudgetInput): Promise<Budget> {
  return Budget.query().insert(input)
}

export default createBudget
