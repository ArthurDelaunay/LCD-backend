const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "standard",
    },
  })
  return User
}
