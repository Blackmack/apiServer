require('babel-core/register')
import express from 'express'
import path from 'path'
import router from './router'
import bodyParser from 'body-parser'
import config from 'config-lite' // 配置中间件
import history from 'connect-history-api-fallback'
import chalk from 'chalk'

const app = express()
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || req.headers.referer || '*')
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Credentials", true) //可以带cookies
    res.header("Access-Control-Max-Age", 3600) // 本次预检请求的有效期, 一小时内不重复检验
    res.header("X-Powered-By", 'Express')
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
router(app)
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))
app.listen(config.port || '3000', () => {
    console.log(chalk.green(`服务已启动，端口${config.port||3000}`))
})