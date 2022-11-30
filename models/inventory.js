const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Inventory = sequelize.define("inventory", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  })
  return Inventory
}
