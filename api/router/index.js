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

  router.post("/saveUserBook", async (ctx) => {
    const bookId = ctx.request.query.bookId;
    const userId = ctx.request.query.userId;

    ctx.body = await booksController.saveUserBook(bookId, userId);
  });

  router.put("/saveUserFav", async (ctx) => {
    const bookId = ctx.request.query.bookId;
    const bookTitle = ctx.request.query.bookTitle;
    const userId = ctx.request.query.userId;

    ctx.body = await singleUserController.saveUserFav(
      bookId,
      bookTitle,
      userId
    );
  });

  router.post("/addUser", async (ctx) => {
    const name = ctx.request.query.name;

    ctx.body = await singleUserController.addUser(name);
  });

  router.post("/addBook", async (ctx) => {
    const title = ctx.request.query.title;
    const author = ctx.request.query.author;
    const year = ctx.request.query.year;

    ctx.body = await booksController.addBook(title, author, year);
  });

  return router;
};

module.exports = router;
