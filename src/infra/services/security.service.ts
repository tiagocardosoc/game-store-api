import * as crypto from 'crypto';

class SecurityService {
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

    static generateToken(): string {
        const valorAleatorio = crypto.randomBytes(20).toString('hex');

        const hash = crypto.createHash('sha256').update(valorAleatorio).digest('hex');

        return hash;
    }
}

export default SecurityService;