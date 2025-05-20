const express = require('express')
const { createUser, getAllUser, getUser, updateUser, deleteUser } = require('../controllers/UserControllers')
const router = express.Router()


router.post('/createuser', createUser);
router.get('/allusers', getAllUser);
router.get('/user/:id', getUser);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);




module.exports = router 