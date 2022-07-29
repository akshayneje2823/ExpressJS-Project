const express = require('express');
const bodyPrase = require('body-parser')

const app = express();
app.use(bodyPrase.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html")
})
app.post('/',function(req,res){

    var weight = Number(req.body.weight)
    var height = Number(req.body.height)

    var ans = weight / (height * weight)

    res.send("Your BMI is " +ans)
})
app.listen(3000,function(){
    console.log("we are on....")
})