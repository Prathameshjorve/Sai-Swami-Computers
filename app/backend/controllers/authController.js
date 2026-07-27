const loginAdmin = async (req, res, next) => {
    try {
        console.log("BODY:", req.body);

        const { username, password } = req.body;

        console.log("USERNAME:", username);
        console.log("PASSWORD:", password);

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide username and password"
            });
        }

        const admin = await Admin.findOne({ username });

        console.log("ADMIN FOUND:", admin);

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        console.log("PASSWORD MATCH:", isMatch);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                _id: admin._id,
                username: admin.username,
                email: admin.email,
                token: generateToken(admin._id)
            }
        });

    } catch (error) {
        console.error(error);
        next(error);
    }
};