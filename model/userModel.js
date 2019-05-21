import mysql from 'mysql'
import uitils from '../lib/util'
import query from '../mysql/indexSql'
import baseModel from './baseModel'

class userModel extends baseModel{
    constructor(){
        super()
        this.getUser=this.getUser.bind(this)
    }
   async getUser(obj){
        let res= await query(`select * from tab_user`)
        return res
    }
    addUser(obj){
        let sql=`insert into  bxgc_contactInfo values ('${uitils.guid()}','${obj.fName}','${obj.fTelephone}','${obj.fEmail}','${obj.fDesc}')`
        return query(sql)
    }
}
export default new userModel()