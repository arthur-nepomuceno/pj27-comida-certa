import prisma from '../database/database.js'
import { newFood } from '../types/foodTypes.js'

async function insertElement(body: newFood) {
    return await prisma.foods.create({
        data: {
            name: body.name,
            calories: body.calories,
            carbs: body.carbs,
            proteins: body.proteins,
            fats: body.fats
        }
    })
}

export {
    insertElement
}