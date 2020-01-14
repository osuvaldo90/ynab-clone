import Knex from 'knex'

export const up = async (knex: Knex.Client): Promise<undefined> => {
  await knex.raw(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE budgets (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name TEXT NOT NULL
    );

    CREATE TABLE accounts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      budget_id UUID REFERENCES budgets(id) NOT NULL,
      name TEXT NOT NULL
    );

    CREATE TABLE budget_account_transactions (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      account_id UUID REFERENCES accounts(id) NOT NULL,
      inflow INTEGER NOT NULL,
      outflow INTEGER NOT NULL
    );
  `)
  return
}

export const down = async (knex: Knex.Client): Promise<undefined> => {
  await knex.raw(`
    DROP TABLE account_transactions;
    DROP TABLE accounts;
    DROP TABLE budgets;
    DROP EXTENSION IF EXISTS "uuid-ossp";
  `)
  return
}
