import {Injectable} from '@nestjs/common';
import {AuthService} from "./auth/auth.service";


@Injectable()
export class AppService {
    public constructor(
        private readonly authService: AuthService,
    ) {
    }

    async getHello(auth): Promise<any> {
        const json = await this.authService.verify(auth)
        console.log(json)
        return json
    }

}