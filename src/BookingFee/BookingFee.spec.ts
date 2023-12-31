import { CheckBookingFee } from './CheckBookingFee';
import { Client } from '../Client';
import { mockBookingFeeRequest } from './mockBookingFeeRequest';
import { CONFIG } from '../../config.json';

describe('BookingFee Fiscalization', () => {
  test('should return v100 for BookingFeeRequest', async () => {
    const response = await new CheckBookingFee(new Client({
      apiKey: CONFIG.API_KEY,
      basePath: CONFIG.BASE_PATH,
      company: CONFIG.COMPANY,
    })).post(mockBookingFeeRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
