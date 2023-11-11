import { UserModel } from "../models/user.model";

export interface ICreateUserRepository extends Partial<UserModel> { }

export interface IUpdateUserRepository extends Partial<UserModel> { }
export interface IUpdateWhereRepository {
    id?: string,
    email?: string,
}

export interface IFindOneWhereRepository {
    id?: string,
    email?: string,
    phone?: string
}

