import { ValidationError } from 'types';
import * as yup from 'yup';

export class Validation {
  static async validate<T>(data: T, schema: yup.Schema<any>): Promise<boolean> {
    const isValid = await schema.isValid(data);

    if(!isValid) {
      const validationErrors = await schema.validate(data, { abortEarly: false })
        .then(() => [])
        .catch(err => err.inner.map((validationError: { message: any, type: any }) => {
          return {
            code: '422',
            documentation_url: '',
            message: validationError.message,
            title: 'validation_error',
            type: validationError.type,  
          };
        }));

      throw new ValidationError({ errors: validationErrors });
    }

    return true;
  }
};
