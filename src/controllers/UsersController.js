const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const { hash } = require("bcrypt")
const AppError = require("../utils/AppError")

class UsersController{
    async create(req, res){
        const {name, email, password} = req.body

        const validateUserExistend = await prisma.user.findFirst({
            where:{
                email,
            }
        })

        if (validateUserExistend){
            throw new AppError("Email ja utilizado!")
        }

        const hashedPassword = await hash(password, 8)

        await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
            }
        })

       return res.status(201).json()
    }
}

module.exports = UsersController