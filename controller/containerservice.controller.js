const {servicecontainers} = require("../models");
const moment = require('moment');

// Thiết lập múi giờ thành UTC+7
moment.tz.setDefault('Asia/Ho_Chi_Minh');

const createContainerService = async (req, res) => {
    console.log('req', req.body)
    // const dateBackup = moment().format("DD/MM/YYYY");
    // const timeBackup = moment().format("HH:mm:ss");
    console.log(new Date())

    const {
        ipaddress,
        nameServiceContainer,
        cpu,
        ram,
        disk,
        belongtoVirtualMachine,

    } = req.body
    try {
        const newContainerService = await servicecontainers.create({
          ipaddress,
          nameServiceContainer,
          cpu,
          ram,
          disk,
          belongtoVirtualMachine,
          createdAt: moment()
            .tz("Asia/Ho_Chi_Minh")
            .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        });
        res.status(200).send(newContainerService)
    } catch (err) {
        console.log(err);
    }

}

const getDetailContainer = async (req, res) => {
    try {
      let limit = parseInt(req.query.limit) || 8;
      let page = parseInt(req.query.page) || 1;
      let start = (page - 1) * limit;
      const id = req.query.container;
  
      console.log("id", id);
  
      optionQueryDB = {
        where: { belongtoVirtualMachine: id },
        limit: limit,
        offset: start,
        attributes: { exclude: ["updatedAt"] },
        order: [['updatedAt', 'DESC']]
      };
      const listServiceContainers = await servicecontainers.findAndCountAll(
        optionQueryDB
      );
      console.log('listInfoDetailVM',listServiceContainers);
      res.status(200).send({
        thisPage: page,
        limit: limit,
        listServiceContainers,
        message: "Lấy thành công",
      });
    } catch (e) {
      res.send(e);
    }
  };



module.exports = {
    createContainerService,
    getDetailContainer
};