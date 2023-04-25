const {Projects, PhysicalMachines} = require("../models");

// Get All project

const getAllProject = async (req, res) => {
    // console.log(Projects);

    let optionQueryDB = {
        include: [
            {
                model: PhysicalMachines,
                as: "listPhysicalMachine",
                attributes: {exclude: ["createdAt", "updatedAt"]},
            },
        ],
        attributes: {exclude: ["createdAt", "updatedAt"]},
    };

    try {
        const projectsList = await Projects.findAll(optionQueryDB);

        console.log(projectsList);
        res.status(200).send(projectsList);
    } catch (err) {
        res.status(500).send({
            message: "Lỗi server !!",
        });
    }
};

module.exports = {
    getAllProject,
};
