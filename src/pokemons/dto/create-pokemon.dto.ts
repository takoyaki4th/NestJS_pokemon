import { Type } from "class-transformer";
import { IsNotEmpty, IsString, Max, MaxLength, Validate, ValidateNested } from "class-validator";
import { NatureNumber } from "src/common/decorators/IsNaturalNumber";
import { EfforValues } from "src/pokemons/dto/effort-values.dto";
import { IndividualValues } from "src/pokemons/dto/individual-values.dto";
import { ValidateEffortSum } from "./decorators/IsEffortValue";

export class CreatePokemonDto {
    @NatureNumber()
    dex_number:number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    nickname:string;

    @NatureNumber()
    @Max(100)
    level:number;

    @ValidateNested()
    @Type(()=> EfforValues)
    @Validate(ValidateEffortSum)
    effort:EfforValues;

    @ValidateNested()
    @Type(()=> IndividualValues)
    individual:IndividualValues;
}
