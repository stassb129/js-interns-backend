import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany} from 'typeorm';
import {createHmac} from "crypto";
import {Booked} from "../booked/booked.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 500, unique: true})
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    hashPassword() {
        this.password = createHmac('sha256', this.password).digest('hex');
    }

    @OneToMany(() => Booked, (post: Booked) => post.author)
    public bookeds: Booked[];


}