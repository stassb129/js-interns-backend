import {Headers, Controller, Get, UseGuards} from '@nestjs/common';
import {AppService} from './app.service';
import {JwtAuthGuard} from "./auth/guards/jwt-auth.guard";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    // @Get()
    // getHello(): string {
    //     return this.appService.getHello();
    // }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    async getProfile(@Headers('Authorization') auth: string): Promise<any> {
        return this.appService.getHello(auth);
    }

}