const {Projects, PhysicalMachines, VirtualMachines, ServiceContainers} = require("../models");

// Get All project

let optionQueryDB = {
    include: [
        {
            model: PhysicalMachines,
            as: "listPhysicalMachine",
            attributes: {exclude: ["createdAt", "updatedAt"]},
            include: [
                {
                    model: VirtualMachines,
                    as: "listVirtualMachine",
                    attributes: {exclude: ["createdAt", "updatedAt"]},
                    // include: [
                    //     {
                    //         model: ServiceContainers,
                    //         as: "belongVirtualMachine",
                    //         attributes: {exclude: ["createdAt", "updatedAt"]},
                    //
                    //     },
                    // ],
                },
            ],
        },
    ],
    attributes: {exclude: ["createdAt", "updatedAt"]},
};
const getAllProject = async (req, res) => {
    // console.log(Projects);
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
const getDetailProject = async (req, res) => {
    // console.log(Projects);
    const {id} = req.params
    optionQueryDB.where = {id}

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
    getDetailProject
};
