const jwt = require('jsonwebtoken');

const checkRole = (...roles) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'Access denied' });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Access denied' });
            }
            req.user = decoded; // Attach user info to request
            next();
        } catch (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
    };
};

module.exports = checkRole; // Changed to CommonJS syntax
