import { error } from "console";
import { UserRepository } from "../repository/user.repository";
import { hashPassword, verifyPassword } from "./security.service";
import { UserModel } from "src/core/models/user.model";

class UserService {
    private userRepository: UserRepository;

    async signUp(userData: UserModel): Promise<void> {

        if (this.userRepository.findOne(userData)) {
            throw new error('User already exists')
        }

        const hashedPassword = await hashPassword(userData.password);
        const [salt, hash] = hashedPassword.split('.');
        userData.password = hash

        const newUser = await this.userRepository.create(userData);
            
        return
    }
}

export default new UserService();