var express =require("express");
var engine=require("consolidate");
var app=express();
app.engine("html",engine.nunjucks);
app.set("view engine",'html');
app.set("views",__dirname+"/view");
app.get('/',function(req,res){
	res.render('index',{name:'rahul'});
})
app.use(function(req,res){
	res.sendStatus(404);
})
var server=app.listen(6677,function(){
	console.log("we are listning at"+server.address().port);
})