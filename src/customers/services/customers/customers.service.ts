import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customers } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customers[] = [
        { id: 1, name: 'John', email: 'johndoe123@gmail.com' },
        { id: 2, name: 'Jane', email: 'janedoe123@gmail.com' }
    ]

    findCustomerById(id: number) {
        return this.customers.find(user => user.id === id);
    }

    findCustomers() {
        return this.customers;
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }
}
