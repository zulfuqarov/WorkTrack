import express from "express";
import AuthModel from "../model/AuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post('/register', async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { name, email, password } = req.body;
        const hashPassword = bcrypt.hashSync(password, 10);

        const findEmail = await AuthModel.findOne({
            email
        })
        if (findEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const respons = new AuthModel({
            name,
            email,
            password: hashPassword
        });

        await respons.save();

        return res.status(201).json({ message: "User Registered Successfully" });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
})

router.post('/login', async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { email, password } = req.body;


        const findEmail = await AuthModel.findOne({
            email
        })
        if (!findEmail) {
            return res.status(400).json({ message: "Email not found" });
        }


        const comparePassword = bcrypt.compareSync(password, findEmail.password);
        if (!comparePassword) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const payload = {
            id: findEmail._id,
            name: findEmail.name,
            email: findEmail.email
        }

        const token = jwt.sign(payload, process.env.TOKEN_SECRET_CODE, { expiresIn: '3d' });

        res.cookie("jwtToken", token, {
            // httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        return res.status(200).json({ message: "Login Successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
})

router.post("/logout", (req, res) => {
    // #swagger.tags = ['Auth']

    const token = req.cookies.jwtToken;

    try {
        if (!token) {
            res.status(400).json({ message: "profile not sigin" });
            return;
        }
        res.clearCookie("jwtToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });


        return res.status(200).json({ message: "Logout Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.delete('/delete/:id', async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { id } = req.params;

        const findUser = await AuthModel.findByIdAndDelete(id);

        if (!findUser) {
            return res.status(400).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
})

export default router;