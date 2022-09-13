import app from './app.js';

app.get("/test",(req,res)=>{
    res.sendStatus(200);
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});