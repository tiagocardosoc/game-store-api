import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: string

    @Column('varchar')
    googleId: string

    @Column('varchar', { length: 30 })
    firstName: string

    @Column('varchar', { length: 30 })
    lastName: string

    @Column('varchar', { length: 100 })
    email: string

    @Column('varchar', { length: 100 })
    password: string

    @Column('boolean')
    emailConfirmed: string

    @Column('varchar', { length: 200 })
    emailConfirmationToken: string

    @Column('varchar', { length: 50 })
    phone: string
}