import mongoose from "mongoose";
// import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String, required: true },
    price: { type: Number },
    pages: { type: Number },
    // author: authorSchema,

    // Utilizando reference - Quando usamos references o autor não faz mais parte do objeto livro. 
    // Assim, cada livro deve ser “populado” com as referências do autor:
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;