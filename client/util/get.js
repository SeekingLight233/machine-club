
function f() {
    const mongoose = require('mongoose');
    var Schema = mongoose.Schema
    //连接数据库
    mongoose.connect('mongodb://39.107.97.170:27017/itcast', {useNewUrlParser: true});
    
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
    var Article = mongoose.model('Article',arti_schema);
    
    Article.find((err,res)=>{
        if(err){
            console.log("查询失败")
        }else{
            console.log("查询成功")
            for(let i = 0;i<5;i++){
                console.log(res[i]._doc.title)
            }
        }
    }).limit(5).skip(910);
    
}
exports.f = f;