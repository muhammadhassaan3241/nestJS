import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateAccountMiddleware } from './middlewares/validate-account.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';
import { Request, Response, NextFunction } from 'express'

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware, ValidateAccountMiddleware,
      (req: Request, res: Response, next: NextFunction) => {
        console.log("all middlewares invoked");
        next()
      }
    )
      .forRoutes(CustomersController)
  }
}
