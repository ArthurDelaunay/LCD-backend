const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Product
}
