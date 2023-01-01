var express=require("express")
var app=express()
var path=require("path")
var fs=require("fs")

app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,resp)
{
resp.sendFile(path.join(__dirname,'/indexhtml'))
});

app.listen(8000)