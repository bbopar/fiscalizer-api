import ValidatorJS, { Rules, ErrorMessages } from "validatorjs";

export class Validator {
  static validate(data: any, rules: Rules, customErrorMessages?: ErrorMessages): boolean {
    const validation = new ValidatorJS(data, rules, customErrorMessages);

    if (validation.fails()) {
      throw new Error('Validation failed: ' + JSON.stringify(validation.errors.all()));
    }

    return true;
  }
};
