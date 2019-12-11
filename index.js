const http = require("http")

// 这是一个服务器
let server = http.createServer((req,res)=> {
    res.write("哈哈哈")
    res.end("hello,world")
})

// 这是监听一个事件
server.on('request',(req,res)=> {
    console.log("hello,world")
})

// 监听服务器关闭
server.on('close',()=> {
    console.log("服务器关闭了...")
})

server.listen(8080);


