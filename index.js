import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/calculator.html")
})

app.get("/bmicalculator",(req,res) => {
    res.sendFile(__dirname+"/bmicalculator.html")
})

app.post("/",(req,res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = 0;
    if (req.body.operation === "+")
        result = num1+num2
    else if (req.body.operation === "-")
        result = num1-num2
    else if (req.body.operation === "*")
        result = num1*num2
    else if (req.body.operation === "/")
        result = num1/num2
    else if (req.body.operation === "%")
        result = num1%num2
    else
        res.send("<h1><strong>Invalid Operation</strong></h1>")
    res.send("<h2>The result is "+result+"</h2>")
})  

app.post("/bmicalculator",(req,res) => {
    var height = req.body.height
    var weight = req.body.weight
    var bmi = weight*10000/(height*height)
    if (bmi > 18 && bmi < 25)
        res.send("<h1>Your bmi is "+bmi+" and your are normal</h1>")
    else if (bmi < 18)
        res.send("<h1>Your bmi is "+bmi+" and your are underweight</h1>")
    else if (bmi > 25)
        res.send("<h1>Your bmi is "+bmi+" and your are qverweight</h1>")
})

app.listen(3000,() =>{
    console.log("Server started")
})