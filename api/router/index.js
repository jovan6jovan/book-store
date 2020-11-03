const Router = require("koa-router");
const booksController = require("../controllers/books");
const usersController = require("../controllers/users");
const singleUserController = require("../controllers/user.js");

const router = () => {
  /**
   * Create koa router instance
   */
  const router = new Router();

  router.get("/", (ctx) => {
    ctx.body = "Hello world";
  });

  router.get("/users", async (ctx) => {
    ctx.body = await usersController.allUsers();
  });

  router.get("/users/:id", async (ctx) => {
    const id = Number(ctx.params.id);

    ctx.body = await singleUserController.singleUser(id);
  });

  router.get("/books", async (ctx) => {
    ctx.body = await booksController.allBooks();
  });

  router.post("/saveBookToUserReadingList", async (ctx) => {
    const bookId = JSON.parse(ctx.request.body).bookId;
    const userId = JSON.parse(ctx.request.body).userId;

    ctx.body = await booksController.saveBookToUserReadingList(bookId, userId);
  });

  router.put("/saveUserFavBook", async (ctx) => {
    const bookId = ctx.request.body.bookId;
    const bookTitle = ctx.request.body.bookTitle;
    const userId = ctx.request.body.userId;
    
    ctx.body = await singleUserController.saveUserFavBook(
      bookId,
      bookTitle,
      userId
    );
  });

  router.post("/addUser", async (ctx) => {
    const name = JSON.parse(ctx.request.body).name;

    ctx.body = await singleUserController.addUser(name);
  });

  router.post("/addBook", async (ctx) => {
    const title = JSON.parse(ctx.request.body).title;
    const author = JSON.parse(ctx.request.body).author;
    const year = JSON.parse(ctx.request.body).year;

    ctx.body = await booksController.addBook(title, author, year);
  });

  return router;
};

module.exports = router;
