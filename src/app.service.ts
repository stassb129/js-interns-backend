import {Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {ExtractJwt} from "passport-jwt";
import {jwtConstants} from "./auth/constants";

@Injectable()
export class AppService {
    public constructor() {
    }

    getHello(req): any {

        const token = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            key: 'stas'
        }
        console.log(token)

        // const id = this.jwtService.verify()
        return {
            // id
        }
    }

}
