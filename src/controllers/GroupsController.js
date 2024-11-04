const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AppError = require("../utils/AppError");

class GroupsController {
  async create(req, res) {
    const { name, type } = req.body;

    const validateGroupExistend = await prisma.group.findFirst({
      where: {
        name,
        type,
      },
    });

    if(validateGroupExistend){
        throw new AppError("Esse grupo com esse tipo ja existe!")
    }

    await prisma.group.create({
        data:{
            name,
            type
        }
    })

    return res.status(201).json()
  }
}

module.exports = GroupsController