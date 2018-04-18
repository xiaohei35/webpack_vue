const http = require('http')
const querystring = require('querystring')
const fs = require('fs')
const Mock=require('mockjs')

const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const _=require('lodash')

const express = require('express')
const multer=require('multer')
const app =express()

app.use(express.static('./'))
app.use(bodyParser.json())
//磁盘存储引擎可以让你控制文件的存储。
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(req.file)
    let filename=file.originalname.split('.')
    cb(null, filename[0] + '-' + Date.now() + '.' + filename[1])
  }
})

var upload = multer({ storage: storage })


//检验token是否存在
function veifyToken(token){
    return new Promise((resolve,reject)=>{
        jwt.sign(token,1511,function(err,decoded){
            if(err){
                reject(err)
            }else{
                resolve(decoded)
            }
        })
    })  
}

//设置跨域
app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:8080')
    res.header('Access-Control-Allow-Headers',"content-type,Token,plantform")
    res.header('Content-Type',"application/json;charset=utf-8")
    veifyToken(req.headers.token).then(res=>{
        console.log(res)
    })
    next()
})

//登录接口
app.post('/dsp-admin/user/login', function (req, res) {
    let user = fs.readFileSync(__dirname +'/user.json', { encoding: "utf-8" })
    user = JSON.parse(user);
    let login = req.body;
    let resInfo = {
        success: 1,
        info: "用户名或密码错误",
        token: ""
    }
    user.forEach(item => {
        if (item.username == login.username && item.password == login.password) {
            resInfo.success = 0;
            resInfo.info = "登录成功";
            resInfo.user={
                name:item.username,
                time:new Date().toLocaleTimeString(),
                nickname:'lucky'
            }
        }
    });
    if (resInfo.success == 0) {
        resInfo.token = jwt.sign(login, "1511", {
            expiresIn: 60 * 60
        })
    }
    res.end(JSON.stringify(resInfo))
    console.log(JSON.stringify(resInfo))
})

//折线图数据接口
app.post('/getAxisData',(req,res)=>{
    console.log(req.body)
    // let {startTime,endTime,dimLeft,dimRight} = req.body;
    // let mockData={
    //     "status ": 0,
    //     "data ": {
    //         exposeNum: 10000, //曝光量
    //         clickNum: 1000, // 点击量
    //         clickRate: 100,  // 点击率
    //         clickPrice: 10000, // 点击均价
    //         cpmPrice: 200000, // 千次展示均价
    //         consumed: 1000, // 时间段消耗(单位分)
    //         dataY1:[1100, 1382, 1325, 1600, 1600],
    //         dataY2:[1100, 1382, 1325, 1600, 1600]
    //     }
    // }
    let data=[]
    for(var i=0;i<req.body.len;i++){
        data.push(Mock.Random.natural(1,1500))
    }
    res.end(JSON.stringify(data))
})

//上传图片接口
app.post('/dsp-creative/creative/upload',upload.single('file'),function(req,res){
    // req.files 表单上传的文件信息
    // req.body 表单的文本域信息
    res.send({
    "data": {
            "size":req.file.size,
            "value":req.file.path,
            "key":"2A36B67C6"
        },
    "status":0
    })
})

app.listen(9000,function(){
    console.log('server listen 9000')
})