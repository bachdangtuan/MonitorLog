const {LogDatabase} = require("../models/LogDatabase");


const postInfoBackUptoDB = async (req, res, next) => {
    try {
        const {test} = req.body
        console.log('test', test)

        res.status(200).send({
            message: test
        })

    } catch (e) {

    }

}

module.exports = {
    postInfoBackUptoDB
}
