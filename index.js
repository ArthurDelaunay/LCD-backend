const express = require("express")
const cors = require("cors")
require("dotenv").config()
require("./models")

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
