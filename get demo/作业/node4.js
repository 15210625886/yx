// 查看index页面有几个请求
/*
 * http模块  fs模块
 *
 */
var http=require('http');
var fs=require('fs');
http.createServer(function (req,res) {
    var url=req.url;
    switch (url){
        case '/index1.html':
            fs.readFile('index1.html','utf-8',function (err,data) {
                if(err){
                    console.log('读取失败');
                    console.log(err);
                }else {
                    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                    res.end(data);
                }
            });
            break;
        case '/index2.html':
            fs.readFile('index2.html','utf-8',function (err,data) {
                if(err){
                    console.log('读取失败');
                    console.log(err);
                }else {
                    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                    res.end(data);
                }
            });
            break;
        case '/index3.html':
            fs.readFile('index3.html','utf-8',function (err,data) {
                if(err){
                    console.log('读取失败');
                    console.log(err);
                }else {
                    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                    res.end(data);
                }
            });
            break;
        case '/index.css':
            fs.readFile('index.css','utf-8',function (err,data) {
                if(err){
                    console.log('读取失败');
                    console.log(err);
                }else {
                    res.writeHead(200,{'content-type':'text/css;charset=utf-8'});
                    res.end(data);
                }
            });
            break;
        case'/index.js':
            fs.readFile('index.js','utf-8',function (err,data) {
                if(err){
                    console.log('读取失败');
                    console.log(err);
                }else {
                    res.writeHead(200,{'content-type':'text/javascript;charset=utf-8'});
                    res.end(data);
                }
            });
            break;
        case'/index4.png':
            fs.readFile('index4.png',function (err,data) {
                if(err){
                    console.log('读取失败');
                    console.log(err);
                }else {
                    res.writeHead(200,{'content-type':'image/png'});
                    res.end(data);
                }
            });
            break;
        default:
            res.end("404")
    }
}).listen(3000);