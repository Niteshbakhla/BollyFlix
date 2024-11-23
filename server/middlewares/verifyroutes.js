const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
            const bearertoken = req.headers("Authorization")
            const token = bearertoken.split(" ")[0]

            if (!token) {
                        return res.status(401).json({ success: false, message: "Unauthorized " })
            }

            try {
                        const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
                                    if (err) {
                                                return res.status(401).json({ success: false, message: "Access denied" })
                                    }
                                    req.id = decoded.id
                                    next();
                        })

            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}