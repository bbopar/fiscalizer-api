import { CheckBookingFee } from './CheckBookingFee';
import { Client } from '../Client';
import { mockBookingFeeRequest } from './mockBookingFeeRequest';

describe('BookingFee Fiscalization', () => {
  test('should return v100 for BookingFeeRequest', async () => {
    const response = await new CheckBookingFee(new Client({ source: 'travelspot' })).post(mockBookingFeeRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
