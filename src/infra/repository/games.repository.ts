import { ICreateGamesRepository, IFindAllWhereGamesRepository, IFindOneWhereGamesRepository, IRemoveWhereGamesRepository, IUpdateGamesRepository, IUpdateWhereGamesRepository } from "src/core/interfaces/games.interfaces";
import { GamesModel } from "src/core/models/games.model";
import { AppDataSource } from "src/data-source";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

export class GamesRepository {

    private userDatabase: Repository<GamesModel>

    constructor() {
        this.userDatabase = AppDataSource.getRepository(GamesModel)
    }

    async create(userData: ICreateGamesRepository): Promise<ICreateGamesRepository> {
        return await this.userDatabase.save(userData);
    }

    async update(where: IUpdateWhereGamesRepository, userData: IUpdateGamesRepository): Promise<UpdateResult> {
        return await this.userDatabase.update(where, userData);
    }

    async findOne(where: IFindOneWhereGamesRepository): Promise<GamesModel> {
        return await this.userDatabase.findOne(where);
    }

    async findAll(where: IFindAllWhereGamesRepository): Promise<GamesModel[]> {
        return await this.userDatabase.find(where)
    }

    async remove(where: IRemoveWhereGamesRepository): Promise<DeleteResult> {
        return await this.userDatabase.delete(where)
    }
}