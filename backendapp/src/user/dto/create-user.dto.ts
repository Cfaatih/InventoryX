import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    firstname: string

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    mobile: string;

    @IsEmail()
    email: string;

}
