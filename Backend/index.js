const express = require('express');
require('dotenv').config();

const connection = require('./Configuration/Connection');
const BlogRouter = require('./Controller/Blogcontrollers')


const app = express();
app.use(express.json())
app.use('/blog', BlogRouter);

app.get("",(req,res)=>{
        res.send("home")
})

app.listen(9090, async()=>{
        await connection
        console.log(`listening to port http://localhost:9090`)
})