const schedule = require('node-schedule');
//初始化数据库并连接
const mongoose = require('mongoose');
const axios = require('axios');
var fs = require('fs');
var sharp = require('sharp');
var Schema = mongoose.Schema
//连接数据库

mongoose.connect('mongodb://39.107.97.170:27017/article', { useNewUrlParser: true });

//设计数据库结构
var arti_schema = new Schema({
    cate: {
        type: String
    },
    imgsrc: {
        type: String
    },
    link: {
        type: String
    },
    title: {
        type: String
    }
});
//将自定义的数据库结构注册为模型

//第一个参数尽量为大写单数字符串
//返回值：模型构造函数
var New = mongoose.model('New', arti_schema);

const scheduleCronstyle = () => {
    schedule.scheduleJob('30 1 1 * * *', () => {

        New.find((err, data) => {
            let i = 0;
            let id = setInterval(() => {
                if (!fs.existsSync('./static/' + data[i]._id + '.png')) {
                    axios({
                        method: 'get',
                        url: data[i].imgsrc,
                        responseType: 'stream'
                    })
                        .then(function (response) {
                            response.data.pipe(fs.createWriteStream('./tmp/' + i + '.png').on("close", () => {
                                sharp('./tmp/' + i + '.png').resize(200).toFile('./static/' + data[i]._id + '.png')
                            }))
                        });
                }
                i++;
                console.log(data[i]._id);
            }, 2000);

            setTimeout(() => {
                clearInterval(id);
            }, 600000);


        });
    });
}

scheduleCronstyle();