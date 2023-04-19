import cors from "cors";
import bcrypt from "bcryptjs";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, password } = req.body;

        // Hash password with bcryptjs
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Save user info to database
        // ...

        res.status(200).json({ message: "User created successfully." });
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}
