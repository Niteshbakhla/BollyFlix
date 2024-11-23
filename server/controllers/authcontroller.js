const bcrypt = require("bcrypt");
const admin = require("../models/admin");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
            const { username, password } = req.body;
            try {
                        // Hash the password before saving
                        const hashPassword = await bcrypt.hash(password, 10);
                        // Create a new admin document
                        const Admin = new admin({ username, password: hashPassword });
                        await Admin.save();

                        return res.status(200).json({ success: true, message: "Admin created successfully" });
            } catch (error) {
                        if (error.code === 11000) {
                                    return res.status(404).json({ success: false, message: "create unique username" })
                        }
                        return res.status(500).json({ message: error.message, success: false });
            }
}

exports.login = async (req, res) => {
            const { username, password } = req.body;
            try {
                        // Find the admin by username
                        let Admin = await admin.findOne({ username });

                        if (!Admin) {
                                    return res.status(404).json({ success: false, message: "Admin not found" });
                        }

                        // Compare the provided password with the stored hashed password
                        const comparePassword = await bcrypt.compare(password, Admin.password);

                        if (!comparePassword) {
                                    return res.status(400).json({ success: false, message: "Invalid password" });
                        }

                        // Generate a JWT token
                        const token = jwt.sign({ id: Admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

                        // Respond with the token and username
                        return res.status(200).json({
                                    success: true,
                                    data: { success: true, message: "Login Successfully", username: Admin.username, token, }
                        });

            } catch (error) {
                        console.log(error)
                        // return res.status(500).json({ success: false, message: error.message });
            }
}


exports.logout = async (req, res) => {
            return res.status(200).json({ success: true, message: "Logout successfully!" })
}