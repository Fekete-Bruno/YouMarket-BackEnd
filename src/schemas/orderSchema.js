import joi from "joi";
const orderSchema = joi.object({
  address: joi.string().required(),
  number: joi.string().required(),
  cep: joi.string().max(9),
  city: joi.string().required(),
  state: joi.string().required(),
  method: joi.string().valid("credit").valid("debit"),
  card_number: joi.string().max(16).required(),
  cvc: joi.string().max(3).required(),
});

export default orderSchema;
