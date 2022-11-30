const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Quality = sequelize.define("quality", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  })
  return Quality
}
