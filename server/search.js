var https = require('https');
var fs = require('fs');
var request = require('request');
var sharp = require('sharp');
var getArticle = require('./getArticle')
var getNews = require('./getNews')
var getUser = require('./getUser')
var express = require('express');
var bodyParser = require('body-parser');
var word = require('./words');
const mongoose = require('mongoose');

var privateKey = fs.readFileSync('ca/nginx.key', 'utf8'); //这里输入你的证书所在位置
var certificate = fs.readFileSync('ca/nginx.crt', 'utf8'); //这里输入你的证书所在位置
var credentials = { key: privateKey, cert: certificate };

var app = express();

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//设置跨域访问
//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/search', (req, res0) => {
    mongoose.connect('mongodb://39.107.97.170:27017/itcast', { useNewUrlParser: true });
    var db = mongoose.connection;
    //req.query.title
    getArticle.Article.find({ title: { $regex: req.query.title } }, (err2, res2) => {
        if (err2) {
            console.log("查询失败");
            //查询失败只可能一种情况，分类里连15个都没有
        } else {
            console.log(res2.length);
            res0.send(JSON.stringify(res2));
        }
    });
});

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);