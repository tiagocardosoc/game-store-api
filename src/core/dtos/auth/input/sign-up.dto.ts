import { IsEmail, IsString, IsStrongPassword } from "class-validator";
import { DtoValidator } from "../../dtoValidator";

interface ISignUpDTO {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export default class InputSignUpDTO extends DtoValidator implements ISignUpDTO {

    constructor(data: ISignUpDTO) {
        super();
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.password = data.password;
    }

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

}