import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "../users/users.entity";

@Entity()
export class Booked {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    checkIn: string;

    @Column()
    checkOut: string;

    @Column()
    guests: number;

    @ManyToOne(() => User, (author: User) => author.bookeds)
    public author: User;

}