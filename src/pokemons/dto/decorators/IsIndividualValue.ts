import { applyDecorators } from "@nestjs/common";
import { IsInt, IsNotEmpty, Max, Min } from "class-validator";

export function IsIndividualValue(){
    return applyDecorators(
        IsInt(),
        Min(0),
        Max(31),
        IsNotEmpty()
    );
}