const UserModel = require("../model/UserModel");



const createUser = async (req, res) => {

    const { name, email, location } = req.body;

    try {

        const userdata = new UserModel({ name, email, location })
        const createuser = await userdata.save()

        res.status(200).json({ message: "user created successfully", user: createuser },)

    } catch (error) {

        res.status(400).json({ message: error.message })
    }

}


const getAllUser = async (req, res) => {
    try {

        const getusers = await UserModel.find()
        res.status(200).json({ message: "get user successfully", users: getusers })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    try {

        const userOne = await UserModel.findById(req.params.id)
        if (!userOne) {
            res.status(400).json({ message: "user not found!" })
        }
        res.status(200).json({ message: "get user successuflly", user: userOne })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const updateUser = async (req, res) => {

    const { name, email, location } = req.body;

    try {

        const updated = await UserModel.findByIdAndUpdate(req.params.id, { name, email, location }, { new: true })
        if (!updated) {
            res.status(400).json({ message: "user not found!" })
        }
        res.status(200).json({ message: "user update successfully", user: updated })


    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const deleteUser = async (req, res) => {
    try {

        const deleteduser = await UserModel.findByIdAndDelete(req.params.id)
        if (!deleteduser) {
            res.status(400).json({ message: "user not found!" })
        }
        res.status(200).json({ message: "user deleted successfully", user: deleteduser })



    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



module.exports = { createUser, getAllUser, getUser, updateUser, deleteUser }