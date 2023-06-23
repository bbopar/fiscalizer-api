import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types';
import { ExemptTransactionSchema } from 'validator/schema/schemaExemptTransaction';
import { Resource } from '../Resource';
import { Validation } from 'validator/Validation';

export class CheckExemptTransaction extends Resource {
  /**
   * Endpoint path
   */
  path: string

  constructor(args: any) {
    super(args)
    this.path = '/check-fiscalization'
  }

  /**
   * Post request to PU.
   */
  public post = async (data: FiscalizationRequest): Promise<FiscalizationResponse<CheckFiscalizationResponse>> => {
    await Validation.validate(data, ExemptTransactionSchema);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
