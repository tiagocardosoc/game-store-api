import { ICreateGamesRepository, IFindAllWhereGamesRepository, IFindOneWhereGamesRepository, IRemoveWhereGamesRepository, IResponseCreateGamesRepository, IResponseDeleteGamesRepository, IResponseFindAllGamesRepository, IResponseFindOneGamesRepository, IResponseUpdateGamesRepository, IUpdateGamesRepository, IUpdateWhereGamesRepository } from "src/core/interfaces/games.interfaces";
import { GamesModel } from "src/core/models/games.model";
import { AppDataSource } from "src/data-source";
import { Repository } from "typeorm";

export class GamesRepository {

    private userDatabase: Repository<GamesModel>

    constructor() {
        this.userDatabase = AppDataSource.getRepository(GamesModel)
    }

    async create(userData: ICreateGamesRepository): Promise<IResponseCreateGamesRepository> {
        return await this.userDatabase.save(userData);
    }

    async update(where: IUpdateWhereGamesRepository, userData: IUpdateGamesRepository): Promise<IResponseUpdateGamesRepository> {
        return await this.userDatabase.update(where, userData);
    }

    async findOne(where: IFindOneWhereGamesRepository): Promise<IResponseFindOneGamesRepository> {
        return await this.userDatabase.findOne(where);
    }

    async findAll(where: IFindAllWhereGamesRepository): Promise<IResponseFindAllGamesRepository[]> {
        return await this.userDatabase.find(where)
    }

    async remove(where: IRemoveWhereGamesRepository): Promise<IResponseDeleteGamesRepository> {
        return await this.userDatabase.delete(where)
    }
}