export type JwtPayload = {
    sub: string;
    username: string;
    deletedAt?: Date;
}