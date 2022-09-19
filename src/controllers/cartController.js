
import { ObjectID } from "bson";
import db from "../database/db.js";

async function getCart(req,res){
    const userId = res.locals.user._id;
    try {
        const cart = await db.collection('carts').find({userId}).toArray();
        return res.send(cart);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

async function addCart(req,res){
    const  product  = req.body;
    const userId = res.locals.user._id;
    try {
        await db.collection('carts').insertOne({userId,product});
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }

    return res.sendStatus(201);
}

async function deleteCart(req,res){
    const cartId = req.headers.data;
    try {
        await db.collection('carts').deleteOne({_id:ObjectID(cartId)});
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
    return res.sendStatus(200);
}
export { getCart, addCart, deleteCart };