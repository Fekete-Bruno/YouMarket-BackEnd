import db from "../database/db.js";
import orderSchema from "../schemas/orderSchema.js";

async function validateOrder(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const newOrder = req.body;

  if (!token) return res.sendStatus(401);

  const validation = orderSchema.validate(newOrder, { abortEarly: true });

  if (validation.error) {
    console.log(validation.error.details);
    return res.sendStatus(401);
  }

  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) return res.sendStatus(401);
    const user = await db.collection("users").findOne({ _id: session.userId });
    if (!user) return res.sendStatus(404);
    delete user.password;
    res.locals.user = user;
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }

  next();
}

async function validateGetOrder(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);
  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) return res.sendStatus(401);
    const user = await db.collection("users").findOne({ _id: session.userId });
    if (!user) return res.sendStatus(404);
    delete user.password;
    res.locals.user = user;
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }

  next();
}

export default validateOrder;
