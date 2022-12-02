const { User } = require("../models")
const { faker } = require("@faker-js/faker")

let users = []
users = [
  ...users,
  { pseudo: "admin", password: "admin", status: "administrator" },
]

let nElements = [...Array(99)]

nElements.forEach((element) => {
  users = [
    ...users,
    {
      pseudo: faker.internet.userName(),
      password: faker.internet.password(8),
      status: "standard",
    },
  ]
})

User.bulkCreate(users)
