const express =require('express')
const cors =require('cors')
const app= express()

app.use(express.json())
app.use(cors())

const port =1111;

app.get('/api',(req,res)=>{
    res.send(
        {
            message:"hello-man",
            state:true
        }
    )
})

app.listen(port,()=>{
    console.log(`sever running on port ${port}`);
})