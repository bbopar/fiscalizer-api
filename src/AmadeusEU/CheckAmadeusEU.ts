import { AmadeusEURules } from '../validator/rules/rulesAmadeusEU';
import { FiscalizationRequest, FiscalizationResponse, CheckFiscalizationResponse } from '../types';
import { Resource } from '../Resource';
import { Validator }  from '../validator/Validation';

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
    Validator.validate(data, AmadeusEURules);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
