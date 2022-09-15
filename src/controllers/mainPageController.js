import db from "../database/db.js";

async function getProducts(req,res){
    try {
        const products = await db.collection('products').find({}).toArray();
        return res.send(products).status(200);   
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export {getProducts};