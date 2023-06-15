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
    let limit = parseInt(req.query.limit) || 8;
    let page = parseInt(req.query.page) || 1;
    let start = (page - 1) * limit;
    const name = req.query.nameVirtual;

    console.log("name", name);

    optionQueryDB = {
      where: { nameVirtualMachine: name },
      limit: limit,
      offset: start,
      attributes: { exclude: ["updatedAt"] },
      order: [['updatedAt', 'DESC']]
    };
    const listInfoDetailVM = await VirtualMachines.findAndCountAll(
      optionQueryDB
    );
    console.log('listInfoDetailVM',listInfoDetailVM);
    res.status(200).send({
      thisPage: page,
      limit: limit,
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





