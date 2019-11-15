var fs = require('fs');
var request = require('request');
var sharp = require('sharp');
var getArticle = require('./getArticle')
var getNews = require('./getNews')
var getUser = require('./getUser')
var express = require('express');
var bodyParser = require('body-parser');
var word = require('./words')
const mongoose = require('mongoose')

var app = express();

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//当服务器收到get请求的时候的操作
app.get('/', (req, res) => {
    var data = "这是从数据库中取得数据，说白了就是一堆json";
});

app.get('/about', (req, res) => {
    res.send(JSON.stringify("这是返回给你的数据"));
});

app.get('/root', (req, res) => {
    res.send(req.query.para);
});
//得到数据库中的数据


app.get('/list', (req, res0) => {
    //初始化数据库并连接
    mongoose.connect('mongodb://39.107.97.170:27017/article', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection('news').countDocuments((err, count) => {
        console.log(count);

        getNews.New.find((err2, res2) => {
            if (err2) {
                console.log("查询失败");
            } else {
                console.log(res2.length)
                    //查询成功的话根据页码请求15个数据
                var list = [];
                for (let i = 0; i < 15; i++) {
                    //处理图片
                    console.log(res2[i]);
                    list.push(res2[i])
                }
                res0.send(JSON.stringify(list.reverse()));
            }
        }).skip(15 * req.query.Pnum).limit(15).sort({ "_id": -1 });
    })
});

app.get('/cate', (req, res0) => {
    mongoose.connect('mongodb://39.107.97.170:27017/itcast', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection('articles').countDocuments({
        "cate": req.query.cate
    }, (err, count) => {
        getArticle.Article.find({
            "cate": req.query.cate
        }, (err2, res2) => {
            if (err2) {
                console.log("查询失败");
                //查询失败只可能一种情况，分类里连15个都没有
                getArticle.Article.find({ "cate": req.query.cate }, (err3, res3) => {
                    //处理下图片
                    for (let i = 0; i < res3.length; i++) {
                        if (!fs.existsSync('./static/' + res3[i]._id + '.png')) {
                            request(res3[i].imgsrc).pipe(fs.createWriteStream('./tmp/' + i + '.png').on("close", () => {
                                sharp('./tmp/' + i + '.png').resize(200).toFile('./static/' + res3[i]._id + '.png')
                            }));
                        }
                    }
                    res0.send(JSON.stringify(res3));
                })
            } else {
                console.log(res2.length)
                    //查询成功的话根据页码请求15个数据
                var list = [];
                for (let i = 0; i < 15; i++) {
                    //处理图片
                    if (!fs.existsSync('./static/' + res2[i]._id + '.png')) {
                        request(res2[i].imgsrc).pipe(fs.createWriteStream('./tmp/' + i + '.png').on("close", () => {
                            sharp('./tmp/' + i + '.png').resize(200).toFile('./static/' + res2[i]._id + '.png')
                        }));
                    }
                    console.log(res2[i]);
                    list.push(res2[i])
                }
                res0.send(JSON.stringify(list.reverse()));
            }
        }).skip(count - (15 * req.query.Pnum)).limit(15);
    })

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


app.post('/register', (req0, res0) => {
    console.log(req0.body)
        //查询数据库中是否已存在用
    mongoose.connect('mongodb://39.107.97.170:27017/word', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection('users').findOne({ name: req0.body.params.name }, (err1, res1) => {
        if (res1) {
            console.log("里面已经有了");
            let exist = { ex: true };
            res0.send(JSON.stringify(exist));
        } else {
            db.collection('users').insertOne({
                name: req0.body.params.name,
                password: req0.body.params.password
            })
            var name = mongoose.model(req0.body.params.name, word.UserSchema);
            //先装进去一个单词，要不然集合显示不出来(我也很奇怪啊QAQ)
            name.create({
                word: "init",
                note: "初始化note",
                defn: "初始化defn",
                commit:"初始化音标",
                audio:"初始化音频"
            });
            let exist = { ex: false };
            res0.send(JSON.stringify(exist));
        }
    })


    // getUser.User.findOne({ name: req0.body.name }, (err1, res1) => {
    //     if (res1) {
    //        let exist = {ex:true}
    //     //    console.log("有了!!!")
    //        res0.send(JSON.stringify(exist))
    //     } else {
    //         console.log("新用户你好")
    //         //没有的话创建一个新用户
    //         getUser.User.create({
    //             name: req0.body.name,
    //             password: req0.body.password
    //         });
    //         // 然后给这个人分配一个集合，用来存储单词
    //         var name = mongoose.model(req0.body.name, word.UserSchema);
    //         //先装进去一个单词，要不然集合显示不出来(我也很奇怪啊QAQ)
    //         name.create({
    //             word: "root",
    //             note: "can u hear me?"
    //         });
    //     }
    // })
});

app.post('/login', (req0, res0) => {
    console.log(req0.body.params.name);
    mongoose.connect('mongodb://39.107.97.170:27017/word', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection('users').findOne({
        name: req0.body.params.name
    }, (err1, res1) => {
        if (res1) {
            console.log("有这个用户，请输入密码...");
            if (res1.password === req0.body.params.password) {
                console.log("密码匹配")
                res0.send(JSON.stringify({ res: "match" }))
            } else(
                res0.send(JSON.stringify({ res: "error" }))
            )
        } else {
            res0.send(JSON.stringify({ res: "empty" }))
        }
    })
});

app.post('/addword', (req0, res0) => {
    console.log(req0.body.params.user);
    console.log(typeof(req0.body.params.user));
    console.log(req0.body.params.word);
    console.log(req0.body.params.note);


    mongoose.connect('mongodb://39.107.97.170:27017/word', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection(req0.body.params.user).insertOne({
        word: req0.body.params.word,
        note: req0.body.params.note,
        data: Date.now()
    })

});

app.use('/static', express.static('./static/'));

app.use('/images', express.static('./images/'));

app.listen(3002, () => {
    console.log('App listening on port 3002!');
});