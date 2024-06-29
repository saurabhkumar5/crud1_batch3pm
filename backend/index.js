const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

app.use(cors())
app.use(express.json())


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://saurabhmaurya8626:3S8fBA3ezmVmIksp@cluster0.6hda3nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>console.log("database is connected"))
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

const userModel = mongoose.model("user",userSchema)



app.get('/',(req,res)=>{

     userModel.find({})
     .then((data)=>res.json(data))
    //    res.send("hello from backend side")
})


app.get('/getuser/:id',(req,res)=>{
        
             const id = req.params.id;
                // console.log(id) 
                userModel.findById({_id:id})
                .then(value=>res.json(value))
})

app.post('/create',(req,res)=>{
       
         console.log(req.body)
         userModel.create(req.body)
    res.send("hello from create side")
})

app.put('/updateUser/:id',(req,res)=>{
                  // console.log(req.params.id)
                  // console.log(req.body.name)

                  const id = req.params.id
                  userModel.findByIdAndUpdate({_id:id},{
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                  })
                  .then((value)=>res.json(value))
})


app.delete('/delete/:data',(req,res)=>{
     console.log(req.params.data)

     const id = req.params.data

     userModel.findByIdAndDelete({_id:id})
     .then((value)=>res.json(value))
})

app.listen(4000,()=>console.log("server is connntect"))