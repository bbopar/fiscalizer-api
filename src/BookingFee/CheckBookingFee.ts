import { BookingFeeRules } from '../validator/rules/rulesBookingFee';
import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types';
import { Resource } from '../Resource';
import { Validation } from '../validator/Validation';

export class CheckBookingFee extends Resource {
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
    Validation.validate(data, BookingFeeRules);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
