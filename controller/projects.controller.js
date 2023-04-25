const {Projects, PhysicalMachine} = require('../models')

// Get All project

const getAllProject = async (req, res) => {
    // console.log(Projects);

    let optionQueryDB = {
        include: [
            {
                model: PhysicalMachine,
                as: "belongCompany",
            },

        ],
        attributes: {exclude: ['createdAt', 'updatedAt']}
    }


    try {
        const projectsList = await Projects.findAll(optionQueryDB)

        console.log(projectsList);
        // res.status(200).send({
        //     projectsList
        // })

    } catch (err) {
        res.status(500).send({
            message: "Lỗi server !!",
        });
    }
};

module.exports = {
    getAllProject,
};
