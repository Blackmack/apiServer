import mysql from 'mysql'
import { resolve } from 'url';
import { rejects } from 'assert';
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'officeWeb'
});
function query(sql,param){
    return new Promise((resolve,reject)=>{
        pool.getConnection((error,connection)=>{
            if(error){
                if(error.code==='PROTOCOL_CONNECTION_LOST'){
                    reject('断开重连')
                }
                else{
                    console.error(err.stack || err)
                    reject(error)
                }
            }
            else{
                
                connection.query(sql,param,(queryErr,result)=>{
                    if(queryErr){
                        reject(queryErr)
                    }
                    else{
                        console.log('22222222222'+result)
                        resolve(result)
                    }
                    //释放连接

                    connection.release()
                })
            }
        })
    })
}
export default query
