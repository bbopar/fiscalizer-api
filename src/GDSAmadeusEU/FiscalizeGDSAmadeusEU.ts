import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types';
import { GDSAmadeusEURules } from '../validator/rules/rulesGDSAmadeusEU';
import { Resource } from '../Resource';
import { Validator } from '../validator/Validation';

export class FiscalizeGDSAmadeusEU extends Resource {
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
    Validator.validate(data, GDSAmadeusEURules);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}