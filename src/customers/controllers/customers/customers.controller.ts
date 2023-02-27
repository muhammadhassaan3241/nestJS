import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from '../../services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) { }

    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const getCustomer = this.customersService.findCustomerById(id);
        if (getCustomer) return getCustomer;
        else throw new HttpException("customer not found", HttpStatus.BAD_REQUEST);
    }

    @Get('search')
    searchCustomers() {
        const getCustomers = this.customersService.findCustomers();
        if (getCustomers) return getCustomers;
        else throw new HttpException("customers not found", HttpStatus.BAD_REQUEST);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.createCustomer(createCustomerDto);
    }

}
