const Food = require('../models/foodModel');

const getAllFoods = async () => {
    return await Food.find();
};

const getFoodById = async (id) => {
    return await Food.findById(id);
};

const createFood = async (foodData) => {
    const food = new Food(foodData);
    return await food.save();
};

const updateFood = async (id, foodData) => {
    return await Food.findByIdAndUpdate(id, foodData, { new: true });
};

const deleteFood = async (id) => {
    return await Food.findByIdAndDelete(id);
};

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
};