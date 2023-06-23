import { CheckRegularProcedure } from './CheckRegularProcedure';
import { Client } from '../Client';
import { mockBookingFeeRequest } from './mockRegularProcedure';
import { CONFIG } from '../../config.json';

describe('BookingFee Fiscalization', () => {
  test('should return v100 for BookingFeeRequest', async () => {
    const response = await new CheckRegularProcedure(new Client({
      apiKey: CONFIG.API_KEY,
      basePath: CONFIG.BASE_PATH,
      company: CONFIG.COMPANY,
    })).post(mockBookingFeeRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
