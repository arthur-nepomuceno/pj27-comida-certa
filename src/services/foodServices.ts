import { newFood } from '../types/foodTypes'
import * as foodRepository from '../repositories/foodRepository.js'

async function checkElementName(name: string){
    const register = await foodRepository.findElementByName(name)
    if(register) throw {
        type: "duplicated-name",
        message: "_This food is already registered._"
    }
    return register
}

async function addElement(body: newFood) {
    return await foodRepository.insertElement(body)
}

async function getElementByName(name: string) {
    return await foodRepository.findElementByName(name)
}

export {
    addElement,
    checkElementName,
    getElementByName
}