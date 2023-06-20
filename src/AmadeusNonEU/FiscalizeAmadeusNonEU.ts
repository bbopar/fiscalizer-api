import { AmadeusNonEURules } from '../validator/rules/rulesAmadeusNonEU';
import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types'
import { Resource } from '../Resource';
import { Validation } from '../validator/Validation';

export class FiscalizeAmadeusNonEU extends Resource {
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
  public post = async (data: FiscalizationRequest): Promise<FiscalizationResponse<CheckFiscalizationResponse>> => {
    Validation.validate(data, AmadeusNonEURules);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
