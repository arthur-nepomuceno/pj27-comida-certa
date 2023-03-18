import { Request, Response, NextFunction } from 'express'
import { Prisma } from '@prisma/client'

export function errorHandler(error: Error | any, req: Request, res: Response, next: NextFunction) {
    console.log(error)

    const { type, message } = error
    const status = {
        bad_request: 400,
        unauthorized: 401,
        not_found: 404,
        not_acceptable: 406,
    }

    if (type === "duplicated-name") return res.status(status.not_acceptable).send(message)
    
    res.status(500).send(`Unexpected server error. ${error}.`)
}