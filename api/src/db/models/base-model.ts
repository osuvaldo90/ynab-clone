import { Model, snakeCaseMappers, ColumnNameMappers } from 'objection'

class BaseModel extends Model {
  static get columnNameMappers(): ColumnNameMappers {
    // If your columns are UPPER_SNAKE_CASE you can
    // use snakeCaseMappers({ upperCase: true })
    return snakeCaseMappers()
  }
}

export default BaseModel
