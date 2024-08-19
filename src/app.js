import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connection.once("open", () => {
  console.log("conexão feita com sucesso!");
});

const app = express();
routes(app);

app.delete("/books/:id", (req, res) => {
  const index = getOneBook(req.params.id);
  if (!index)
    return res
      .status(404)
      .send(`A entidade procurada pelo índice ${index} não foi encontrada.`);

  books.splice(index, 1);
  res.status(201).json(books);
});

export default app;
