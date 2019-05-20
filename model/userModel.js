import mysql from 'mysql'
import query from '../mysql'
import baseModel from './baseModel'

class userModel extends baseModel{
    constructor(){
        super()

    }
    getUser(obj){
        let sql= await query(`select id,fname from `)
    }
}