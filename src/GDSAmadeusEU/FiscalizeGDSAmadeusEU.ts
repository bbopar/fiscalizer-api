import { CheckFiscalizationResponse, FiscalizationRequest, FiscalizationResponse } from '../types';
import { GDSAmadeusEUSchema } from 'validator/schema/schemaGDSAmadeusEU';
import { Resource } from '../Resource';
import { Validation } from 'validator/Validation';

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
    await Validation.validate(data, GDSAmadeusEUSchema);

    return this.request({ method: 'POST', path: `${this.path}`, data });
  }
}
