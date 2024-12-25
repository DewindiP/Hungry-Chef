const express = require('express');
const cors = require('cors');
const controller = require('./controller');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
app.use(cors());
app.use(express.json()); 

const uri = "mongodb+srv://thimiraakalanka13:QKgC6cMYyJNFaDaI@cluster0.dqyot.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log("mongodb connected successfully");

    }catch(err){
        console.log("database connection error :", err);
    }
}

connect();

app.listen(3001,'127.0.0.1',()=>{
    console.log("node working")
});


app.get("/products",(req,res) =>{
    controller.getProducts((req,res,next) =>{
        res.send(products);
    })
})

app.post("/addproduct",(req,res) =>{
    controller.addProducts(req.body,(callback) =>{
        res.send();
    });
})

app.put("/updateproduct",(req,res) =>{
    controller.updateProduct(req.body,(callback) =>{
        res.send(callback);
    });
})

app.delete("/deleteproduct",(req,res) =>{
    controller.deleteProduct(req.body,(callback) =>{
        res.send(callback);
    });
})

app.use('/api', router);




