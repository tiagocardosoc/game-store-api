import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', { length: 80})
    name: string

    @Column('varchar', { length: 80})
    producer: string

    @Column('varchar', { length: 80})
    category: string

    @Column('float')
    price: number

    @Column('varchar', { length: 80})
    imageUrl: string

    @Column('varchar', { length: 500})
    description: string

    @Column('date')
    releaseDate: Date
}