import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'games' })
export class GamesModel {
    @PrimaryGeneratedColumn()
    id: string

    @Column('varchar', { length: 80 })
    name: string

    @Column('varchar', { length: 80 })
    producer: string

    @Column('varchar', { length: 80 })
    category: string

    @Column('float')
    price: number

    @Column('varchar', { length: 80 })
    imageUrl: string

    @Column('varchar', { length: 500 })
    description: string

    @Column('date')
    releaseDate: Date
}