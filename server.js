const express = require('express');
const app = express();

const {connectMongoDB} = require("./setting/connectMongoDB.js");
const PORT = 5000
const {rootRouter} = require("./routers/routers");




///////////// cài đặt kiểu json ép kiểu json
app.use(express.json());

///////////// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,*');
    // Set to true if you need the website to include cookies in the requests sent
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
// Connected MongoDB
connectMongoDB().then()

//using router
app.use("/api", rootRouter)

///////////// App listing port
app.listen(PORT, async () => {
    console.log(`Server khoi tao port ${PORT} http://localhost:${PORT}`)
})
