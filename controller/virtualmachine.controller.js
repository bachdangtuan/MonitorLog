const { VirtualMachines } = require("../models");
const moment = require("moment");

// Thiết lập múi giờ thành UTC+7
moment.tz.setDefault("Asia/Ho_Chi_Minh");

let optionQueryDB;

const createVirtualMachine = async (req, res) => {
  console.log("req", req.body);
  // const dateBackup = moment().format("DD/MM/YYYY");
  // const timeBackup = moment().format("HH:mm:ss");
  console.log(new Date());

  const {
    ipaddress,
    nameVirtualMachine,
    cpu,
    usedram,
    ram,
    disk,
    diskused,
    belongtoPhysicalMachine,
  } = req.body;
  try {
    const newVirtualMachine = await VirtualMachines.create({
      ipaddress,
      nameVirtualMachine,
      cpu,
      ram,
      usedram,
      disk,
      diskused,
      belongtoPhysicalMachine,
      createdAt: moment()
        .tz("Asia/Ho_Chi_Minh")
        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    });
    res.status(200).send(newVirtualMachine);
  } catch (err) {
    console.log(err);
  }
};

const getDetailNameVirtualMachine = async (req, res) => {
  try {
    let limit = parseInt(req.query.limit) || 6;
    let page = parseInt(req.query.page) || 1;
    let start = (page - 1) * limit;
    const name = req.query.name;

    optionQueryDB = {
      where: { nameVirtualMachine: name }, // Add the WHERE condition here
      limit: limit,
      offset: start,
      attributes: { exclude: ["updatedAt"] },
    };

    const listInfoDetailVM = await VirtualMachines.findAndCountAll(
      optionQueryDB
    );

    res.status(200).send({
      listInfoDetailVM,
      message: "Lấy thành công",
    });
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  createVirtualMachine,
  getDetailNameVirtualMachine,
};
