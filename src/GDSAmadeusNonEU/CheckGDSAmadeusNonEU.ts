import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types';
import { GDSAmadeusNonEURules } from '../validator/rules/rulesGDSAmadeusNonEU';
import { Resource } from '../Resource';
import { Validation } from '../validator/Validation';

export class CheckGDSAmadeusNonEU extends Resource {
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
    Validation.validate(data, GDSAmadeusNonEURules);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
