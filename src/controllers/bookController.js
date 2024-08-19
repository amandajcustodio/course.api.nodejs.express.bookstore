import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {
    static async listMany(req, res) {
        try {
            // const success = await book.find({});

            // Utilizando o modelo reference:
            const success = await book.find({}).populate("author").exec();
            res.status(200).json(success);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar livros.` });
        }
    }

    static async getOne(req, res) {
        try {
            const id = req.params.id;

            const success = await book.findById(id);
            res.status(200).json(success);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - livro não encontrado.` });
        }
    }

    static async create(req, res) {
        try {
            // const book = req.body;
            // const bookAuthor = await author.findById(book.author);
            // const payload = { ...book, author: { ...bookAuthor._doc }}
            const success = await book.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", book: success });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro.` });
        }
    }

    static async update(req, res) {
        const newBook = req.body;
        const id = req.params.id;

        try {
            const bookAuthor = await author.findById(newBook.author);
            const payload = { ...newBook, author: { ...bookAuthor._doc }};
            const success = await book.findByIdAndUpdate(id, payload);
            res.status(200).json({ message: "Atualizado com sucesso!", book: success, author: bookAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar livro.` });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;

            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Deletado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar livro.` });
        }
    }

    static async listByPublisher(req, res) {
        const publisher = req.query.publisher;
        try {
            const success = await book.find({ publisher: publisher});
            res.status(200).json(success);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar livros.` });
        }
    }
}

export default BookController;