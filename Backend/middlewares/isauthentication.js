import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
try {
    const token = req.cookies.token;
if (!token) {
    return res.status(401).json({
        message: "Authentication failed, token not found",
        success: false,
    });
}

const decoded = jwt.verify(token, process.env.JWT_SECRET);
if (!decoded) { 
    return res.status(401).json({
        message: "Authentication failed, invalid token",
        success: false,
    });
    req.id = decoded.id; // Store user ID in request object
    next(); // Proceed to the next middleware or route handler
} 
} catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
        message: "Authentication failed",
        success: false,
    });
    
}
}

export default isAuthenticated;