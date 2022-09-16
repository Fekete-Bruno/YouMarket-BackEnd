import { ObjectID } from "bson";
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

async function getProductById(req,res){
    const productId = req.params.productId;
    try {
        const product = await db.collection('products').findOne({_id:ObjectID(productId)});
        if(!product){
            return res.sendStatus(404);
        }
        return res.send(product)
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export { getProducts, getProductById};