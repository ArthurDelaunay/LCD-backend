const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Message = sequelize.define("message", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Message
}
