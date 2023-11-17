import { UserRepository } from "../repository/user.repository";
import Cryptography from "./security.service";
import { ISignUpData } from "src/core/interfaces/user.interfaces";

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository()
    }

    async signUp(userData: ISignUpData): Promise<void> {

        if (this.userRepository.findOne(userData)) {
            throw new Error('User already exists')
        }

        const hashedPassword = await Cryptography.hashPassword(userData.password);
        const [salt, hash] = hashedPassword.split('.');
        userData.password = hash

        const newUser = await this.userRepository.create(userData);

        return
    }
}

export default new UserService();