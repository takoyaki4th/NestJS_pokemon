import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { NatureNumber } from "src/common/decorators/IsNaturalNumber";
import { Type } from "@prisma/client";

export class CreateSpecieDto {
    @NatureNumber()
    dex_number: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    name:string;

    @NatureNumber()
    hp:number;
    @NatureNumber()
    attack:number;
    @NatureNumber()
    defense:number;
    @NatureNumber()
    sattack:number;
    @NatureNumber()
    sdefense:number;
    @NatureNumber()
    speed:number;

    @IsEnum(Type)
    @IsNotEmpty()
    type1:Type;

    @IsOptional()
    @IsEnum(Type)
    @IsNotEmpty()
    type2?:Type;   
}