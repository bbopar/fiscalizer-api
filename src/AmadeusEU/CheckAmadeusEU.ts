import { AmadeusEUSchema } from '../validator/schema/schemaAmadeusEU';
import { FiscalizationRequest, FiscalizationResponse, CheckFiscalizationResponse } from '../types';
import { Resource } from '../Resource';
import { Validation }  from '../validator/Validation';

export class CheckAmadeusEU extends Resource {
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
    await Validation.validate(data, AmadeusEUSchema);
    
    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
