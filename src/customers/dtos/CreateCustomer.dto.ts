import { Type } from "class-transformer";
import { IsEmail, IsNumberString, IsNotEmpty, IsString, ValidateNested, IsNotEmptyObject } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto {
    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ValidateNested()
    @Type(() => CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}