import {Injectable, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from './users.entity'

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

    async findOne(username: any): Promise<User> {
        return this.userRepository.findOne({username})
    }

    async create(user: User): Promise<any> {
        const entity = Object.assign(new User(), user);
        return this.userRepository.save(entity)
    }
}
