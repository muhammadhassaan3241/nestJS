import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    CustomersModule,
    UsersModule,
    MongooseModule.forRoot("mongodb://localhost:27017/")],
  controllers: [],
  providers: [],
})
export class AppModule { }
