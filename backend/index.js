const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const redis = require('redis')

const app = express();
const port = 3030;

//Redis
// const session = require('express-session')
// const connectRedis = require('connect-redis')
const client = redis.createClient({
    legacyMode: true
});
client.connect()

// const redisStore = connectRedis(session)
// 

//mongodb
const mongodb = mongoose.connection
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err)console.log(err)
    else console.log("succesfully connected")
})
mongodb.on("error", (error) => console.log(error));
mongodb.once("open", () => {
  console.log("Mongo connection established");
});

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    client.get('foo', (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
})

app.get("/product", async (req,res)=>{
    const id = req.query.id
    client.GET("products", async (error, products)=>{
        if(error)console.error(error)
        if(products != null){
            console.log("Berhasil")
            return res.JSON(JSON.parse(products))
        }else{
            const { data } = await axios.get("https://dummyjson.com/products", {params: { id }})
            client.SET("products", JSON.stringify(data))
            res.json(data)
        }
    })
})

app.get("/product/:id", async (req,res)=>{
    client.GET("productD", async (error, products)=>{
        if(error)console.error(error)
        if(products != null){
            console.log("Berhasil")
            return res.JSON(JSON.parse(products))
        }else{
            const { data } = await axios.get(`https://dummyjson.com/products/${req.params.id}`)
            client.SET("productD", JSON.stringify(data))
            res.json(data)
        }
    })
})

app.use("/user", require("./rooters/user.rooter"))
app.listen(port, ()=> console.log(`App running ${port}`))