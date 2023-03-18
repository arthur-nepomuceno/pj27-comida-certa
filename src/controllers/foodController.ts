import {Request, Response} from 'express'
import * as foodServices from '../services/foodServices.js'

async function addFood(req: Request, res: Response) {
    const body = req.body
    const {name, calories, carbs, proteins, fats} = body

    await foodServices.checkElementName(name)
    await foodServices.addElement(body)
    
    const element = await foodServices.getElementByName(name)
    return res.status(201).send(element)
}

async function getFood(req: Request, res: Response) {
    return res.status(200).send('get foods ok')
}

export {
    getFood,
    addFood
}