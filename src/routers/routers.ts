import { Router } from "express"
import foodRouter from "./foodRouter.js"

const router = Router()

router.use(foodRouter)

export default router