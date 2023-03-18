import {Request, Response} from "express"

async function addFood(req: Request, res: Response) {
    const body = req.body;
    const {name, calories, carbs, proteins, fats} = body

    return res.status(201).send(`New food added successfully.`)
}

async function getFood(req: Request, res: Response) {
    return res.status(200).send('get foods ok')
}

export {
    getFood,
    addFood
}