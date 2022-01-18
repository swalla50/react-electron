import postUser from "../models/postUsers.js";

export const getUsers = async (req, res) => {
    try {
        const postUsers = await postUser.find();
        
        res.status(200).json(postUsers);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createUsers = async (req, res) => {
    const post = req.body;

    const newUser = new postUser(post);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}