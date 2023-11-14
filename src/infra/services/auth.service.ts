import { error } from "console";
import { UserRepository } from "../repository/user.repository";
import { hashPassword, verifyPassword } from "./security.service";

class UserService {
    private userRepository: UserRepository;

    async signUp(userData: any): Promise<void> {

        if (this.userRepository.findOne(userData)) {
            throw new error('User already exists')
        }

        // Creating a hash for the user's password
        const hashedPassword = await hashPassword(userData.password);
        const [salt, hash] = hashedPassword.split('.');
        userData.password = hash

        const newUser = await this.userRepository.create(userData);
            
        return
    }
}

export default new UserService();