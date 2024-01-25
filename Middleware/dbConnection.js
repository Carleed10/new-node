const mongoose = require("mongoose")

const connectDb = async () =>{
    let connectionString= process.env.CONNECTION_STRING
    try {
        const dbconnect = await mongoose.connect(connectionString)
        if(dbconnect){
            console.log("Database connected succesfully")
        }else{
            console.log("Error connecting to database")
        }
    } catch (error) {
        console.log("Error occured while trying to connect to database", error)
    }
}

module.exports = connectDb