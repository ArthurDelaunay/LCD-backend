require("dotenv").config()
const { Sequelize, hasMany } = require("sequelize")

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  }
)

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established.")
  } catch (error) {
    console.error("Unable to connect to the database:" + error)
  }
}

connectDb()

const Announce = require("./announce")(sequelize)
const Conversation = require("./conversation")(sequelize)
const Faction = require("./faction")(sequelize)
const Guild = require("./guild")(sequelize)
const Image = require("./image")(sequelize)
const Inventory = require("./inventory")(sequelize)
const Message = require("./message")(sequelize)
const Product = require("./product")(sequelize)
const Quality = require("./quality")(sequelize)
const User = require("./user")(sequelize)

Faction.hasMany(Guild)
Faction.hasMany(User)

Guild.hasMany(User)
Guild.belongsTo(Faction)
Guild.hasOne(Image)

Message.belongsTo(User, { foreignKey: "senderId" })
Message.belongsTo(Conversation)

User.belongsTo(Faction)
User.belongsTo(Guild)
User.hasMany(Message, { foreignKey: "senderId" })
User.hasOne(Image)
User.hasMany(Announce)
User.hasMany(Inventory)
User.belongsToMany(Conversation, { through: "user_conversation" })

Image.belongsTo(Guild)
Image.belongsTo(User)
Image.belongsTo(Product)

Conversation.hasMany(Message)
Conversation.belongsTo(Announce)
Conversation.belongsToMany(User, { through: "user_conversation" })

Inventory.belongsTo(User)
Inventory.belongsTo(Product)

Quality.hasMany(Product)

Product.belongsTo(Quality)
Product.hasMany(Inventory)
Product.hasOne(Image)
Product.hasMany(Announce)

Announce.belongsTo(Product)
Announce.belongsTo(User)
Announce.hasMany(Conversation)

sequelize.sync({ alter: true })

const db = {
  Announce,
  Conversation,
  Faction,
  Guild,
  Image,
  Inventory,
  Message,
  Product,
  Quality,
  User,
}

module.exports = db
