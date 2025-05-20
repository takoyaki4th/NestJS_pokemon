import { IsNotEmpty, IsString, IsStrongPassword, MaxLength } from "class-validator";

export class CredentialsDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    name:string;

    @IsStrongPassword({
        minLength:8,
        minLowercase:1,
        minNumbers:1,
        minUppercase:0,
        minSymbols:0
    })
    password:string;
   
}