import User from "../models/userModel.js"
import bcrypt from 'bcrypt.js'
import jwt from 'jsonwebtoken'

//generate a token jwt
const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET, {expiresIn: '7d' })
}

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const userExists = await User.findOne({ email })
        if(userExists) {
            return res.status(400).json({ message: "User already Exists" })
        }
        if(password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be atleast 8 characters" })
        }

        //hashing password
        const salt = await bcrypt.gensalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        //create user
        const user = await User.create({
            name,
            email,
            password : hashedPassword,
        })
        res.status(201).json({
            _id: user_.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    catch(err) {
        res.status(500).json({
            message: "Server Error",
            error : error.message
        })
    }
}