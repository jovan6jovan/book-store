const models = require("../models");

module.exports.singleUser = async (id) => {
  try {
    const result = await models.User.findOrCreate({
      where: { id: id },
      include: [
        {
          model: models.Book,
          as: "Reading",
          attributes: ["title", "author"],
        },
        {
          model: models.Favorite,
        },
      ],
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.saveUserFav = async (bookId, bookTitle, userId) => {
  try {
    const result = await models.Favorite.create({
      id: bookId,
      title: bookTitle,
      UserId: userId,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.addUser = async (name) => {
  try {
    const result = await models.User.create({ name });
    return result;
  } catch (error) {
    console.log(error);
  }
};
