import { Request, Response, NextFunction } from "express";

export function errorHandler(error: Error | any, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    
    const { type, message } = error;
    const status = {
    	just_an_exemple: 999,
        bad_request: 400,
        unauthorized: 401,
        not_found: 404,
        not_acceptable: 406,
    }

    if (type === "my_error_message") return res.status(status.just_an_exemple).send(message);

    res.status(500).send(`Unexpected server error: ${error}.`)
}