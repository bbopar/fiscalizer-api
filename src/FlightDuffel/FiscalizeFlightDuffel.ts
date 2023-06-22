import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types';
import { Resource } from '../Resource';
import { Validation } from 'validator/Validation';
import { FlightDuffelSchema } from 'validator/schema/schemaFlightDuffel';

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
    await Validation.validate(data, FlightDuffelSchema);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
