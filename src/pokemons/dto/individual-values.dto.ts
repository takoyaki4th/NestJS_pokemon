import { IsIndividualValue } from "./decorators/IsIndividualValue";

export class IndividualValues {
    @IsIndividualValue()
    hp:number;
    @IsIndividualValue()
    attack:number;
    @IsIndividualValue()
    defense:number;
    @IsIndividualValue()
    s_attack:number;
    @IsIndividualValue()
    s_defense:number;
    @IsIndividualValue()
    speed:number;
}