const express = require("express")
const app = express()
const UserRouter = require("./Routes/UserRoute")
const connectDb = require("./Middleware/dbConnection")


const env = require("dotenv").config()

app.use(express.json())

app.use("/Api/Users", UserRouter)

console.log("You can start working");
connectDb()
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`APP IS RUNNING ON http://localhost:${port}`);
})