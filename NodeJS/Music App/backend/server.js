import express from "express"
import cors from "cors"

const app=express();
app.use(cors())

const PORT=3000
//simple data

const data={
    strings:[
        {
            name:"Sitar",
            origin:"India",
            importance:"Used in classical Indian music",
            masters:["Ravi Shankar","Anushka Shankar"]
        },
        {
           name:"Guitar",
           origin:"Spain",
           importance:"Popular in all music styles",
           masters:["Jimi Hendrix","Eric Clapton"]
        },
        {
            name:"Tabla",
            origin:"India",
            importance:"Key instrument in Hindustani classical music",
            masters:["Zakir Hussain"]
        }
    ]
}

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