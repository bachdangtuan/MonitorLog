const {ServiceContainers} = require("../models");
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
        const newContainerService = await ServiceContainers.create({
            ipaddress,
            nameServiceContainer,
            cpu,
            ram,
            disk,
            belongtoVirtualMachine,
            createdAt: moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
        })
        res.status(200).send(newContainerService)
    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    createContainerService
};