const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Faction = sequelize.define("faction", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Faction
}
