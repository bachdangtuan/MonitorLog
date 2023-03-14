const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://supportsystem:Fa4MdagF2OmU8zVW@cluster0.93tjaf4.mongodb.net/?retryWrites=true&w=majority'






// KẾT NỐI DATABASE MONGO
const connectMongoDB = async () => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log(`Kết nối thành công tới mongoDB Atlas ${mongoURI} `)
        })
        .catch(err => {
            console.log(err)
        })
}
///////////// Export Connect Mongo
module.exports = {
    connectMongoDB,
};
