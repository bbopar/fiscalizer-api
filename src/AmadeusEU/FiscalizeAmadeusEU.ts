import { AmadeusEUSchema } from 'validator/schema/schemaAmadeusEU';
import { FiscalizationRequest, FiscalizationResponse, FiscalizedResponse } from '../types';
import { Resource } from '../Resource';
import { Validation } from 'validator/Validation';

export class FiscalizeAmadeusEU extends Resource {
  /**
   * Endpoint path
   */
  path: string

  constructor(args: any) {
    super(args)
    this.path = '/fiscalize'
  }

  /**
   * Post request to PU.
   */
  public post = async (data: FiscalizationRequest): Promise<FiscalizationResponse<FiscalizedResponse>> => {
    await Validation.validate(data, AmadeusEUSchema);
    
    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
