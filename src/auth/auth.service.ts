import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {CreateAuthDto} from "./dto/create-auth.dto";
import {LoginAuthDto} from "./dto/login-auth.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username)
        if (user && user.password === pass) {
            const {password, ...result} = user
            return result
        } else
            return null
    }

    async login(user: LoginAuthDto) {
        const userData = await this.userService.findOne(user.username)
        return {
            id: userData.id,
            access_token: this.jwtService.sign({id: user.id})
        }
    }


    async register(createAuthDto: CreateAuthDto) {
        await this.userService.create(createAuthDto)
    }
}