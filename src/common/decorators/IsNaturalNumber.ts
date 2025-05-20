import { applyDecorators } from "@nestjs/common";
import { IsInt, IsNotEmpty, Min } from "class-validator";

export function NatureNumber(){
    return applyDecorators(
        IsInt(),
        Min(1),
        IsNotEmpty()
    );
}