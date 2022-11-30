const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Announce = sequelize.define("announce", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Announce
}
