/*
 * @Description: 主app
 * @Author: shenxf
 * @Date: 2019-03-15 21:50:30
 */
var express = require('express')
var path = require('path')
var app = express()
var fs = require('fs')
var ejs = require('ejs')

//静态文件目录
app.use(express.static(path.join(__dirname, '../public')));

app.get('/favicon.ico', function(req, res, next) {
	res.sendfile(path.join(__dirname, '../public/images/favicon.ico')); // 发送静态文件
});

app.get('/', function(req, res, next) {
    // 自我介绍数据取得
    fs.readFile('staticData/resumeData.json',(err, data) => {
        if (err) {
            console.log(err)
            return res.end('读取文件失败')
        }
        resumeJson = JSON.parse(data.toString())

        ejs.renderFile('index.html',resumeJson,(err,str) => {
            if (err) {
                console.log(err)
                return res.end('模版引擎渲染失败')
            }

            res.end(str)
        })
    })
})

// production error handler no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	})
})

module.exports = app