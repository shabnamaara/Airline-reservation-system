const express =require('express')
const cors = require('cors');

const { MongoClient, ObjectId } = require('mongodb');
const app=express()
app.use(express.json());
app.use(cors());

const Client = new MongoClient('mongodb+srv://Airline:pappuh@pappuh.lqdm3ih.mongodb.net/?retryWrites=true&w=majority&appName=pappuh');
Client.connect();
const db = Client.db('AirlineDatabase');
const col = db.collection('users');
//col.insertOne({'student':"345"})
app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})
app.get('/retrive', async (req, res) => {
    const result =await  col.find().toArray()
    console.log(result)
    res.send(result)
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body)
    const user=await col.findOne({email});
    if(!user||!(password===user.password)){
        return res.status(401).json({message:'INvalid email or password'})
    }
 
    res.json({username:user.name});
})


app.get('/',(req,res)=>{
res.send('<center><h1>hello swaroop</h1></center>')
})

app.get('/about',(req,res)=>{
    res.send('<center><h1>hello swaroop</h1></center>')
})
app.put('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const {name, role, email, password}=req.body 
    const result= await col.updateOne({_id: new ObjectId(id)}, {$set:{name, role, email, password} }) 
    res.send('updated') 
})

app.delete('/users/:id',async (req,res)=>{
    const {id}=req.params
    const result= await col.deleteOne({_id:new ObjectId(id)})
    res.json({message:'deleted sucessfully'})
})

  
app.listen(8080,()=>{console.log('express server is running')})