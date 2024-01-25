const UserModel = require('../Models/UserModel')
const bcrypt = require("bcryptjs")

const signUp = async(req, res)=>{
    const {Fullname, Email, Password, PhoneNumber} = req.body
    if(!Fullname || !Email || !Password || !PhoneNumber){
        res.status(400).send({message : 'All Fields are mandatory'})
    }


    const ValidateUser = await UserModel.findOne({Email})


    if (ValidateUser) {
        res.status(403).send({message : 'User already exist, try logging in to your account'})
    }else{
        const hashedPassword = await bcrypt.hash(Password, 10);
        const createUser = await UserModel.create({
            Fullname,
            Email,
            Password : hashedPassword,
            PhoneNumber
        })

        const createdUser = {\
            Fullname : createUser.Fullname,
            Email : createUser.Email,
            PhoneNumber : createUser.PhoneNumber
        }
        
        res.status(200).send({message : `User created successfully for ${createUser.Fullname}`, createdUser})
    }
}



module.exports = signUp
