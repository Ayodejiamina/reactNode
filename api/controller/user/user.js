
const { AllUsers } = require('../../model/users')
const { signT } = require('../../Routes/jwt')
const bcrypt = require('bcrypt')
exports.postUser = async (req, res) => {
    const { fname, lname, gender, phone, password, avatar, email } = req.body
    try {
        const hashedPass = await bcrypt.hash(password, 10)
        await AllUsers.create({
            fname: fname,
            lname: lname,
            gender: gender,
            phone: phone,
            password: hashedPass,
            role: "users",
            email: email,
            avatar: avatar
        }).then((result) => {
            const token = signT({ ...result })
            res.status(201).json({
                status: "successful",
                result: result,
                token
            })
        })

    } catch (error) {
        console.log(error.message)
    }
}
exports.postLog = (req, res) => {
    //  
}