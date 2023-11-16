import { FindManyOptions, FindOneOptions, FindOptionsWhere } from "typeorm";
import { GamesModel } from "../models/games.model";


// REPOSITORY:

// > CREATE <
export interface ICreateGamesRepository extends Partial<GamesModel> { }

// > UPDATE <
export interface IUpdateGamesRepository extends Partial<GamesModel> { }

export interface IUpdateWhereGamesRepository extends FindOptionsWhere<GamesModel> { }

// > FIND ONE <
export interface IFindOneWhereGamesRepository extends FindOneOptions<GamesModel> { }

// > FIND ALL <
export interface IFindAllWhereGamesRepository extends FindManyOptions<GamesModel> { }

// > REMOVE <
export interface IRemoveWhereGamesRepository extends FindOptionsWhere<GamesModel> { }