
//初始化数据库并连接
const mongoose = require('mongoose');
var Schema = mongoose.Schema
//连接数据库

mongoose.connect('mongodb://39.107.97.170:27017/article', {useNewUrlParser: true});

//设计数据库结构
var arti_schema = new Schema({
    cate:{
        type:String
    },
    imgsrc:{
        type:String
    },
    link:{
        type:String
    },
    title:{
        type:String
    }
  });   
//将自定义的数据库结构注册为模型

//第一个参数尽量为大写单数字符串
//返回值：模型构造函数
var New = mongoose.model('New',arti_schema);

exports.New = New;
