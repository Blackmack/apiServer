import baseControll from './baseController'
import userModel from '../model/userModel'

class userControll extends baseControll {
    constructor(){
        super()
        this.getUser=this.getUser.bind(this)
    }
    async getUser(req,res,next){
        try{
            let result=await userModel.getUser()||{}
            console.log(result)

            res.json({
                code:1,
                success:true,
                data:result,
                message:'请求成功'
            })
        }
        catch(e){
            console.log(e)
        }
       
    }
    async addUser(req,res,next){
        try{
            console.log(req.body)
            let result=await userModel.addUser(req.body)||{}
            console.log(result)

            res.json({
                code:1,
                success:true,
                data:result,
                message:'请求成功'
            })
        }
        catch(e){
            console.log(e)
        }
    }
}
export default new userControll()