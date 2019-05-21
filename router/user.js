import express from 'express'
import user from '../controller/userController'
const router=express.Router()

router.get('/getUser',user.getUser)
router.post('/addUser',user.addUser)
export default router