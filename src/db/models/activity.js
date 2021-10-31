'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  activity.init({
    useragent: DataTypes.JSON,
    status_code: DataTypes.INTEGER,
    type_name: DataTypes.STRING,
    message: DataTypes.TEXT,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    }
  }, {
    sequelize,
    modelName: 'activity',
    underscored: true,
    timestamps: false
  });
  return activity;
};