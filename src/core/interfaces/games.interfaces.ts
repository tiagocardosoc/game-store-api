import { DeleteResult, FindManyOptions, FindOneOptions, FindOptionsWhere, UpdateResult } from "typeorm";
import { GamesModel } from "../models/games.model";

/*NOTE - The reason why we are creating customs interfaces to represent the type of inputs or outputs is because it's more simple to change if necessary in the future. So we can just handle all types in a unique file.*/

// INPUTS:
export interface ICreateGamesRepository extends Partial<GamesModel> { }
export interface IUpdateGamesRepository extends Partial<GamesModel> { }
export interface IUpdateWhereGamesRepository extends FindOptionsWhere<GamesModel> { }
export interface IFindOneWhereGamesRepository extends FindOneOptions<GamesModel> { }
export interface IFindAllWhereGamesRepository extends FindManyOptions<GamesModel> { }
export interface IRemoveWhereGamesRepository extends FindOptionsWhere<GamesModel> { }

// OUTPUTS: 
export interface IResponseCreateGamesRepository extends GamesModel { }
export interface IResponseUpdateGamesRepository extends UpdateResult { }
export interface IResponseFindOneGamesRepository extends GamesModel { }
export interface IResponseFindAllGamesRepository extends GamesModel { }
export interface IResponseDeleteGamesRepository extends DeleteResult { }