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
        usedram,
        ram,
        disk,
        diskused,
        belongtoPhysicalMachine,

    } = req.body
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
            createdAt: moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
        })
        res.status(200).send(newVirtualMachine)
    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    createVirtualMachine
};