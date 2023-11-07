const { AllUsers } = require('../../model/users')
const {signT} = require('../../Routes/jwt')
exports.postAdmin = async (req, res) => {
    const { fname, lname, gender, phone, password, avatar, email } = req.body
    try {
        await AllUsers.create({
            fname: fname,
            lname: lname,
            gender: gender,
            phone: phone,
            password: password,
            role: "admin",
            email: email,
            avatar: avatar
        }).then((result) => {
            res.status(201).json({
                status: "successful",
                result: result
            })
        })

    } catch (error) {
        console.log(error.message)
    }
}
exports.postAdLog = async(req, res) => {
    const { email, password } = req.body
     try {
         await AllUsers.findOne({ email: email }).then((result) => {
             if (!result) {
                 res.status(404).json({
                     status: "fail",
                     message:'User Does not exist'
    
                })
             }
             const token = signT({ ...result });
             res.status(201).json({
                 status: "successful",
                 result,
                 token
                
             })
             
        })
     } catch (error) {
        console.log(error.message)
     }
}
exports.getUser = async (req, res) => {

    try {
        await AllUsers.find().then((users) => {
            res.status(201).json({
                status: "successful",
                users
            })
        })
    } catch (error) {
        console.log(error.message)
    }
}
exports.deleteUser = async (req, res) => {
    const { id } = req.body
    try {
        await AllUsers.findByIdAndDelete({ _id: id }).then((ress) => {
            res.status(201).json({
                status: "successful",
                ress: ress
            })
        })
    } catch (error) {
        console.log(error.message)
    }
}
exports.getUpdate = async (req, res) => {
    const id = req.params.id
    try {
        await AllUsers.findById({ _id: id }).then((updates) => {
            res.status(201).json({
                status: "Successful",
                updates
            })
        })
    } catch (error) {
        console.log(error)
    }
}
exports.postUpdate = async (req, res) => {
    const id = req.params.id
    const { fname, lname, gender, phone, password, avatar, email } = req.body
    try {
        await AllUsers.findByIdAndUpdate(id, { fname, lname, gender, phone, password, avatar, email }).then((result) => {
            res.status(201).json({
                status: "Successful",
                result
            })

        })
    } catch (error) {
        console.log(error)

    }

}
