const models = require("../models");

module.exports.allUsers = async () => {
  try {
    const result = await models.User.findAll();
    return result;
  } catch (error) {
    console.log(error);
  }
};
