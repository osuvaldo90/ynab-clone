import Knex from 'knex'

const knexfile: { [k: string]: Knex.Config | undefined } = {
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/ynab_clone_tests',
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
}

// 'export =' required for knex cli to work
export = knexfile
