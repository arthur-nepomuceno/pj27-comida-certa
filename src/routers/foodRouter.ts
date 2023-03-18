import { Router } from "express"
import { addFood, getFood } from "../controllers/foodController.js"
import { checkSchema } from "../middlewares/checkSchema.js"
import { foodSchema } from "../schemas/foodSchema.js"

const foodRouter = Router()

foodRouter.post('/add', checkSchema(foodSchema), addFood)
foodRouter.get('/food', getFood)

export default foodRouter