import express from "express"
import cors from "cors"
import {data} from "./data.js"
const app=express();
app.use(cors())

const PORT=3000
 
//Routes
app.get("/",(req,res)=>{
    res.send("home test")
})
app.get("/categories",(req,res)=>{
    res.json(Object.keys(data))
});

app.get("/instruments",(req,res)=>{
    res.json(data)
});

app.get("/instruments/:name",(req,res)=>{
    const name=req.params.name.toLowerCase();

    for(let category in data){
        const instrument=data[category].find(
            i=>i.name.toLowerCase()===name
        );
        if(instrument) return res.json(instrument);
    }

    res.status(404).json({message:"Instrument not found"})
})

app.listen(PORT,()=>console.log("Api is running on http://localhost:3000"))