import express from "express"

const app = express()
const port = 3000

function logger(req,res,next){
    console.log("Request method: ", req.method)
    console.log("Request url: ", req.url)
    next();
}

app.use(logger)

app.get("/",function(req,res){
    res.send("<h2>Hello, world</h2>")
})

app.listen(port,() => {
    console.log(`Server started on ${port}`)
})