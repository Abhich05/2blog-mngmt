const Comment = require('../models/Comment');
exports.addComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};