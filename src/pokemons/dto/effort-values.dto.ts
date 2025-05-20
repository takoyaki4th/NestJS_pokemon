import { IsEffortValue } from "./decorators/IsEffortValue";

export class EfforValues{
    @IsEffortValue()
    hp:number;
    @IsEffortValue()
    attack:number;
    @IsEffortValue()
    defense:number;
    @IsEffortValue()
    s_attack:number;
    @IsEffortValue()
    s_defense:number;

    @IsEffortValue()
    speed:number;
}