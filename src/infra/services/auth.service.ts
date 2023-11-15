import { UserRepository } from "../repository/user.repository";
import Cryptography from "./security.service";
import { UserModel } from "src/core/models/user.model";

class UserService {
    private userRepository: UserRepository;

    async signUp(userData: UserModel): Promise<void> {

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