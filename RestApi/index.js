import express from "express";
import bodyParser from 'body-parser';
import userRoutes from "./routes/user.js";
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoutes);
app.get('/',(req,res)=>{
    // console.log('[TEST]');
    res.send('Hello World');
});

app.listen(PORT,()=>{
    console.log(`Server running on port: http://localhost:${PORT}`)
})