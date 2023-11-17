import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class UserModel {
    @PrimaryGeneratedColumn()
    id: string

    @Column('varchar', { length: 100 })
    googleId: string

    @Column('varchar', { length: 50 })
    firstName: string

    @Column('varchar', { length: 50 })
    lastName: string

    @Column('varchar', { length: 100 })
    email: string

    @Column('varchar', { length: 300 })
    password: string

    @Column('boolean')
    emailConfirmed: boolean

    @Column('varchar', { length: 300 })
    emailConfirmationToken: string

    @Column('varchar', { length: 50 })
    phone: string
}