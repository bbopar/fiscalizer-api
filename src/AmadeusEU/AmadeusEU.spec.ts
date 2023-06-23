import { CheckAmadeusEU } from './CheckAmadeusEU';
import { Client } from '../Client';
import { mockAmadeusEuRequest } from './mockAmadeusEuRequest';
import { CONFIG } from '../../config.json';

describe('AmadeusEU Fiscalization', () => {
  test('should return v100 for AmadeusEU', async () => {
    const response = await new CheckAmadeusEU(new Client({
      apiKey: CONFIG.API_KEY,
      basePath: CONFIG.BASE_PATH,
      company: CONFIG.COMPANY,
    })).post(mockAmadeusEuRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000);
});
