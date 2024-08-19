import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listMany);

routes.get("/authors/:id", AuthorController.getOne);

routes.post("/authors", AuthorController.create);

routes.put("/authors/:id", AuthorController.update);

routes.delete("/authors/:id", AuthorController.delete);

export default routes;