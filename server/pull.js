const schedule = require('node-schedule');
//初始化数据库并连接
const mongoose = require('mongoose');
const axios = require('axios');
var fs = require('fs');
var request = require('request');
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


//每隔一天就将微信里的图文消息同步到数据库中


const scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('30 0 0 * * *', () => {

        // 首先先要获取access_token
        axios.get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx996c17d046b27ea0&secret=8fae80e51fe8ca6cd132c98ed56f500d")
            .then(res => {
                console.log(res.data.access_token);
                let token = res.data.access_token;
                let count = 0;
                let id = setInterval(() => {
                    axios.post('https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=' + token, {
                        "type": "news",
                        "offset": ++count,
                        "count": 1
                    })
                        .then(res => {
                            console.log()
                            for (let j = 0; j < 1; j++) {
                                for (let i = 0; i < res.data.item[j].content.news_item.length; i++) {
                                    console.log(res.data.item[j].content.news_item[i].title);
                                    console.log(res.data.item[j].content.news_item[i].url);
                                    console.log(res.data.item[j].content.news_item[i].thumb_url);
                                    New.findOne({
                                        title: res.data.item[j].content.news_item[i].title
                                    }, (err1, res1) => {
                                        if (res1) {
                                            console.log("已经有了");
                                            // console.log(++count);
                                        } else {
                                            New.create({
                                                title: res.data.item[j].content.news_item[i].title,
                                                link: res.data.item[j].content.news_item[i].url,
                                                imgsrc: res.data.item[j].content.news_item[i].thumb_url
                                            }, (err2, res2) => {
                                                if (!err2) {
                                                    console.log("存进去了");
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        })
                        .catch(err => {
                            console.error(err);
                            console.log("出错了！！！")
                        })

                }, 2000);

                setTimeout(() => {
                    clearInterval(id);
                    //结束前把图片处理一下

                    console.log("结束")

                }, 600000);

            })
            .catch(err => {
                console.error(err);
            })

    });
}

scheduleCronstyle();









