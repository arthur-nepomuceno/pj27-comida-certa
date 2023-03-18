import { Foods } from '@prisma/client'

type newFood = Omit<Foods, 'id'>

export {
    newFood
}