import {Body, Controller, Get, Post, Request, Response, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {AuthService} from "./auth.service";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";
import {LoginAuthDto} from "./dto/login-auth.dto";
import {CreateAuthDto} from "./dto/create-auth.dto";
import {ApiOperation} from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @ApiOperation({summary: "login пользователя"})
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Body() user: LoginAuthDto) {
        return this.authService.login(user)
    }

    @ApiOperation({summary: "register пользователя"})
    @Post('/register')
    async register(@Body() createAuthDto: CreateAuthDto) {
        return this.authService.register(createAuthDto)
    }
}