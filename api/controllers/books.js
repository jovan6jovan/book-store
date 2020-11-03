const models = require("../models");

module.exports.allBooks = async () => {
  try {
    const result = await models.Book.findAll();
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.saveBookToUserReadingList = async (bookId, userId) => {
  try {
    const result = await models.Book.findByPk(bookId);
    return result.addReader(userId);
  } catch (error) {
    console.log(error);
  }
};

module.exports.addBook = async (title, author, year) => {
  try {
    const result = await models.Book.create({
      title,
      author,
      year,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
