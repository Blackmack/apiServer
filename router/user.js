import express from 'express'

const router=express.Router()

router.get('/register',(req,res)=>{
    console.log('请求成功')
    res.send('请求成功');
})
export default router