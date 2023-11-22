import { DtoValidator } from "../../dtoValidator";

interface ISignInDTO {
    id: string,
    email: string,
    password: string
}

export default class InputSignInDTO extends DtoValidator implements ISignInDTO {

    constructor(data: ISignInDTO) {
        super();
        this.id = data.id
        this.email = data.email;
        this.password = data.password;
    }

    id: string;

    email: string;

    password: string;

}