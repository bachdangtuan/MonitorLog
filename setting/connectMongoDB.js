const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://dangtuan:dangtuan12@cluster0.xmpe6ec.mongodb.net/?retryWrites=true&w=majority'


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
