const models = require("../index");
const usersData = require("./users.json");
const booksData = require("./books.json");

module.exports = {
  insert: () => {
    models.User.bulkCreate(usersData)
      .then(() => {
        models.Book.bulkCreate(booksData);
      })
      .then((res) => console.log("Users and Books successfully added"))
      .catch((err) => console.log(err));
  },
};
