import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.listMany);

routes.get("/books/search", BookController.listByPublisher);

routes.get("/books/:id", BookController.getOne);

routes.post("/books", BookController.create);

routes.put("/books/:id", BookController.update);

routes.delete("/books/:id", BookController.delete);

export default routes;