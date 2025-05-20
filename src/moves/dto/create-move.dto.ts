import { IsEnum, IsInt, IsNotEmpty, IsString, MaxLength, Min } from "class-validator";
import { Type } from "@prisma/client";
import { DamageClass} from "@prisma/client";

export class CreateMoveDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    name:string;

    @IsEnum(DamageClass)
    @IsNotEmpty()
    damage_class:DamageClass

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    power: number;

    @IsNotEmpty()
    @IsEnum(Type)
    type:Type;
}