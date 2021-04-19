import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../users/users.entity";

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

    async login(user: any) {
        const payload = {user: user.username, sub: user.id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async register(user: User) {
        await this.userService.create(user)
    }
}