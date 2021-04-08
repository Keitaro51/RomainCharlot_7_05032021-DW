const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`);

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  }
}, {tableName: 'departments', timestamps: false});

module.exports = Department;