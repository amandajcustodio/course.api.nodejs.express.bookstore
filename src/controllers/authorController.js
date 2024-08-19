import { author } from "../models/Author.js";

class AuthorController {
    static async listMany(req, res) {
        try {
            const success = await author.find({});
            res.status(200).json(success);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar autores.` })
        }
        
    }

    static async getOne(req, res) {
        try {
            const id = req.params.id;

            const success = await author.findById(id);
            res.status(200).json(success);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - autor(a) não encontrado(a).` })
        }
    }

    static async create(req, res) {
        console.log(req.body)
        try {
            const success = await author.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", author: success });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar autor(a).` });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;

            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Atualizado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar autor(a).` });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;

            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Deletado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar autor(a).` });
        }
    }
}

export default AuthorController;