import app from './app.js';

app.get("/test",(req,res)=>{
    res.sendStatus(200);
})

console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});