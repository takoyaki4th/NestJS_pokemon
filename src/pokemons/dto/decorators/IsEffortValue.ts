import { applyDecorators } from "@nestjs/common";
import { IsInt, IsNotEmpty, Max, Min, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ name: 'ValidateEffortSum', async: false })
export class ValidateEffortSum implements ValidatorConstraintInterface {
  validate(o: any) {
    const total = o.hp+o.attack+o.defense+o.s_attack+o.s_defense+o.speed;
    console.log(o)
    return total <= 510;
  }

  defaultMessage() {
    return '努力値の合計は510以下である必要があります';
  }
}

export function IsEffortValue(){
    return applyDecorators(
        IsInt(),
        Min(0),
        Max(252),
        IsNotEmpty(),
    );
}
