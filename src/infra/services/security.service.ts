import * as crypto from 'crypto';


class Cryptography {
    static async hashPassword(password: string): Promise<string> {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha256').toString('hex');

        return `${salt}.${hash}`
    }

    static async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
        const [salt, hash] = hashedPassword.split('.');
        const newHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha256').toString('hex');
    
        return newHash === hash;
    }
}

export default Cryptography;