const Blog = require('../models/Blog');  // Assuming a Blog model exists

// Get all blogs (public route)
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('assignedEditor', 'name email');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error });
    }
};

// Create a new blog (Admin only)
exports.createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newBlog = new Blog({
            title,
            content,
            createdBy: req.user.id, // Assuming user is attached via authMiddleware
        });
        await newBlog.save();
        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error });
    }
};

// Edit a blog (Admin or assigned Editor)
exports.editBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Check if user is admin or assigned editor
        if (req.user.role !== 'Admin' && blog.assignedEditor.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized to edit this blog' });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog', error });
    }
};

// Delete a blog (Admin only)
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error });
    }
};

// Assign blog to an editor (Admin only)
exports.assignBlogToEditor = async (req, res) => {
    try {
        const { editorId } = req.body;
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        blog.assignedEditor = editorId;
        await blog.save();
        res.status(200).json({ message: 'Blog assigned to editor successfully', blog });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning blog to editor', error });
    }
};
