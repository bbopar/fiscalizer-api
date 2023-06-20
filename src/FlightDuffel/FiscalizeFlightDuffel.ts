import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types';
import { FlightDuffelRules } from '../validator/rules/rulesFlightDuffel';
import { Resource } from '../Resource';
import { Validator } from '../validator/Validation';

export class FiscalizeFlightDuffel extends Resource {
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
    Validator.validate(data, FlightDuffelRules);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
