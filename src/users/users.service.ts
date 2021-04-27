import {Injectable, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from './users.entity'
import {CreateUsersDto} from "./dto/create-users.dto";
import {arrify} from "ts-loader/dist/utils";

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(username: string): Promise<User> {
        return this.userRepository.findOne({username})
    }

    async create(createUserDto: CreateUsersDto): Promise<any> {
        const entity = Object.assign(new User(), createUserDto);
        return this.userRepository.save(entity)
    }
}
