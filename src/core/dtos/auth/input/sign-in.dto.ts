import { IsEmail } from "class-validator";
import { DtoValidator } from "../../dtoValidator";

interface ISignInDTO {
    email: string,
    password: string
}

export default class InputSignInDTO extends DtoValidator implements ISignInDTO {

    constructor(data: ISignInDTO) {
        super();
        this.email = data.email;
        this.password = data.password;
    }

    @IsEmail()
    email: string;

    password: string;

}