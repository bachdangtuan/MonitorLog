const {VirtualMachines} = require("../models");
const moment = require('moment');

// Thiết lập múi giờ thành UTC+7
moment.tz.setDefault('Asia/Ho_Chi_Minh');
const createVirtualMachine = async (req, res) => {
    console.log('req', req.body)
    // const dateBackup = moment().format("DD/MM/YYYY");
    // const timeBackup = moment().format("HH:mm:ss");
    console.log(new Date())

    const {
        ipaddress,
        nameVirtualMachine,
        cpu,
        ram,
        disk,
        belongtoPhysicalMachine,

    } = req.body
    try {
        const newVirtualMachine = await VirtualMachines.create({
            ipaddress,
            nameVirtualMachine,
            cpu,
            ram,
            disk,
            belongtoPhysicalMachine,
            createdAt: moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
        })
        res.status(200).send(newVirtualMachine)
    } catch (err) {
    }

}
module.exports = {
    createVirtualMachine
};