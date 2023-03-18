import { newFood } from '../types/foodTypes'
import * as foodRepository from '../repositories/foodRepository.js'

async function addElement(body: newFood) {
    return await foodRepository.insertElement(body)
}

export {
    addElement
}