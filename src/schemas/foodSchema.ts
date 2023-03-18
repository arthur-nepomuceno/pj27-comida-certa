import Joi from "joi"

const foodSchema = Joi.object({
    name: Joi.string().required(),
    calories: Joi.string().regex(/^[0-9]{1,}$/).required(),
    carbs: Joi.string().regex(/^[0-9]{1,}$/).required(),
    proteins: Joi.string().regex(/^[0-9]{1,}$/).required(),
    fats: Joi.string().regex(/^[0-9]{1,}$/).required()
})

export {
    foodSchema
}