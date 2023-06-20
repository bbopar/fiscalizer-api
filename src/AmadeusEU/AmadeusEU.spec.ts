import { CheckAmadeusEU } from './CheckAmadeusEU';
import { Client } from '../Client';
import { mockAmadeusEuRequest } from './mockAmadeusEuRequest';

describe('AmadeusEU Fiscalization', () => {
  test('should return v100 for AmadeusEU', async () => {
    const response = await new CheckAmadeusEU(new Client({ source: 'travelspot' })).post(mockAmadeusEuRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000);
});
