import { ICreateUserRepository, IFindOneWhereRepository, IUpdateUserRepository, IUpdateWhereRepository } from "src/core/interfaces/user.interfaces";
import { UserModel } from "src/core/models/user.model";
import { AppDataSource } from "src/data-source";
import { Repository } from "typeorm";

export class UserRepository {

    private userDatabase: Repository<UserModel>

    constructor() {
        this.userDatabase = AppDataSource.getRepository(UserModel)
    }

    async create(userData: ICreateUserRepository) {
        return await this.userDatabase.save(userData);
    }

    async update(findBy: IUpdateWhereRepository, userData: IUpdateUserRepository) {
        return await this.userDatabase.update(findBy, userData);
    }

    async findOne(where: IFindOneWhereRepository) {
        return await this.userDatabase.findOne({ where });
    }

    /* 
        delete will not be implement for now
    */
}