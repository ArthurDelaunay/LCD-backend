const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Guild = sequelize.define("guild", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guildmaster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  })
  return Guild
}
