import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("ValidateCustomerMiddleware");
        const { authorization } = req.headers;
        if (authorization) {
            next();
        } else {
            res
                .status(403)
                .json({ error: "no authorization token provided!" });
        }
    }
}   