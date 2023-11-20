import { UserModel } from "src/core/models/user.model";
import { UserRepository } from "../repository/user.repository";
import SecurityService from "./security.service";
import { ISignUpData } from "src/core/interfaces/user.interfaces";
import authMailService from "./auth-mail.service";

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository()
    }

    async signUp(data: ISignUpData): Promise<void> {
        const alreadySignedUp = await this.userRepository.findOne({ email: data.email })

        if (alreadySignedUp) {
            throw new Error('User already exists')
        }

        const hashedPassword = await SecurityService.hashPassword(data.password);
        const [salt, hash] = hashedPassword.split('.');
        data.password = hash

        const userCreated = await this.userRepository.create(data);

        const accountActivationToken = SecurityService.generateToken()

        authMailService.accountActivation({
            to: userCreated.email,
            templateData: {
                firstName: userCreated.firstName,
                email: userCreated.email,
                activationUrl: 'for a while nothing to be rendered'
            }
        })

        return
    }
}

export default new UserService();