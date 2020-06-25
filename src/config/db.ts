import { Sequelize, } from 'sequelize';

/**
 * connextion to DB using sequelize
 * @author siemah
 * @version 1.0.0
 */
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_HOST_PORT } = process.env;

export const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_HOST_PORT}/${DB_NAME}`,
  {
    logging: false,
  }
);

sequelize.sync(); // synchronize all models
export default sequelize;