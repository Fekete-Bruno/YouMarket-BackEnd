import db from "../database/db.js";

async function updateProductStock(req, res) {
  const productId = req.params.productId;
  try {
    const product = await db
      .collection("products")
      .findOne({ _id: ObjectID(productId) });
    if (!product) {
      return res.sendStatus(404);
    }
    await db
      .collection("products")
      .updateOne(product, { $set: { amount: amount - 1 } });
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

async function postOrder(req, res) {
  const newOrder = req.body;
  const userId = res.locals.user._id;
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const product = await db.collection("cart").findOne({ userId: userId });
    await db.collection("orders").insertOne({ ...newOrder, userId, product });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

async function getOrder(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  try {
    const user = await db.collection("sessions").findOne({ token: token });
    const order = await db
      .collection("orders")
      .findOne({ userId: user.userId });
    res.status(200).send(order);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}

export { updateProductStock, postOrder, getOrder };
