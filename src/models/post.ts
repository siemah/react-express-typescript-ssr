import { Model, DataTypes, } from 'sequelize';
import { sequelize, } from '../config/db';

class Post extends Model {
  public id!: number;
  public author!: number;
  public title!: string;
  public content!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },
    author: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    content: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'post',
  }
);

export default Post;