const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Produit = sequelize.define("produit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Produit
}
