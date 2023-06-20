/* eslint-disable no-console */
import Validator, { Rules } from "validatorjs";

export class Validation {
  static async validate(data: any, rules: Rules) {
    Validator.useLang("en");
      
    const validation = new Validator(data, rules, {});

    validation.check();
  }
};
