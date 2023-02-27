import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateAccountMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('ValidateAccountMiddleware');
        const { valid } = req.headers;
        if (valid) {
            console.log({ valid: true });
            next();
        } else {
            res
                .status(401)
                .json({ error: "invalid account" });
        }
    }
}