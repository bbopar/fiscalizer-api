import { CheckAmadeusNonEU } from './CheckAmadeusNonEU';
import { Client } from '../Client';
import { mockAmadeusNonEuRequest } from './mockAmadeusNonEuRequest';

describe('AmadeusNonEU Fiscalization', () => {
  test('should return v100 for AmadeusNonEU', async () => {
    const response = await new CheckAmadeusNonEU(new Client({ source: 'travelspot' })).post(mockAmadeusNonEuRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000);
});
