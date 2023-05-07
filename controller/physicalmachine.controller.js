const { PhysicalMachines, VirtualMachines } = require("../models");

let optionQueryDB = {
  include: [
    {
      model: VirtualMachines,
      as: "listVirtualMachine",
      attributes: { exclude: ["createdAt", "updatedAt"] },
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
  attributes: { exclude: ["createdAt", "updatedAt"] },
};

const getDetailPhysicalMachine = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  optionQueryDB.where = { id };
  try {
    const detailPhysicalMachine = await PhysicalMachines.findAll(optionQueryDB);

    console.log(detailPhysicalMachine);
    res.status(200).send(detailPhysicalMachine);
  } catch (err) {
    res.status(500).send({
      message: "Lỗi server !!",
    });
  }
};
module.exports = {
  getDetailPhysicalMachine,
};
