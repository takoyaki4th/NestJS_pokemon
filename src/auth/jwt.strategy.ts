import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "src/common/types/JwtPayload";
import { RequestUser } from "src/common/types/RequestUser";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error('JWT_SECRET is not defined');
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:secret,
        });
    }

    //引数と戻り値は同じ構造　key名を変更してるだけ
    async validate(payload:JwtPayload):Promise<RequestUser> {
        return {
            id:payload.sub,
            name:payload.username,
            deletedAt:payload.deletedAt
        };
    }
}