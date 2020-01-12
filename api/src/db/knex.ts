import Knex from 'knex'

// knexfile has to use 'export =' export to work with knex cli
// eslint-disable-next-line import/default
import knexfile from '../../knexfile'

const knexEnv = process.env.KNEX_ENV || 'development'
const knexConfig = knexfile[knexEnv]

if (knexConfig === undefined) {
  throw new Error(`knex config not available for KNEX_ENV=${knexEnv}`)
}

const knex = Knex(knexConfig)

export default knex
