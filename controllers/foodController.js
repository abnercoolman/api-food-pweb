const foodService = require('../services/foodService');

const getAllFoods = async (req, res) => {
    try {
        const foods = await foodService.getAllFoods();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).send('Erro ao buscar alimentos');
    }
};

const getFoodById = async (req, res) => {
    try {
        const food = await foodService.getFoodById(req.params.id);
        if (!food) {
            return res.status(404).send('Alimento não encontrado');
        }
        res.status(200).json(food);
    } catch (error) {
        res.status(500).send('Erro ao buscar alimento');
    }
};

const createFood = async (req, res) => {
    try {
        const newFood = await foodService.createFood(req.body);
        res.status(201).json(newFood);
    } catch (error) {
        res.status(500).send('Erro ao criar alimento');
    }
};

const updateFood = async (req, res) => {
    try {
        const updatedFood = await foodService.updateFood(req.params.id, req.body);
        if (!updatedFood) {
            return res.status(404).send('Alimento não encontrado');
        }
        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(500).send('Erro ao atualizar alimento');
    }
};

const deleteFood = async (req, res) => {
    try {
        const deletedFood = await foodService.deleteFood(req.params.id);
        if (!deletedFood) {
            return res.status(404).send('Alimento não encontrado');
        }
        res.status(200).send('Alimento removido com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao remover alimento');
    }
};

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
};