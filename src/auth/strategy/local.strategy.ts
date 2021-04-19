import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../auth.service';
import {createHmac} from "crypto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, createHmac('sha256', password).digest('hex'))

        if (!user) {
            throw new UnauthorizedException({
                status: HttpStatus.UNAUTHORIZED,
                error: 'Incorrect username of password'
            })
        }
        return user
    }
}