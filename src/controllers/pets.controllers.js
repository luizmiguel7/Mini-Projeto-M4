import { Pets } from "../models/pets.models.js";

const listPets = async (req, res) => {
    try {
        const pets = await Pets.findAll();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar pets' });
    }
}

const listOnePet = async (req, res) => {
    try {
        let nome = req.params.nome;
        nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

        const pet = await Pets.findOne({ where: { nome } });
        if (!pet) {
            return res.status(404).json({ error: 'Pet não encontrado' });
        }
        res.json(pet);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar Pet' });
    }
};

const petsAvailable = async (req, res) => {
    try {
        const pets = await Pets.findAll({ where: { status: 'disponível' } });
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar pets disponíveis' });
    }
};

const createPets = async (req, res) => {
    try {
        const newPet = await Pets.create(req.body);
        res.status(201).json(newPet);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar Pet' });
    }
};

export { listPets, listOnePet, petsAvailable, createPets }

