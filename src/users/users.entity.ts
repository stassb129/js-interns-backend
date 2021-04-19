import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';
import {createHmac} from "crypto";

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

}