import { CheckFlightDuffel } from './CheckFlightDuffel';
import { Client } from '../Client';
import { CONFIG } from '../../config.json';
import { mockDuffelRequest } from './mockDuffelRequest';

describe('Duffel Fiscalization', () => {
  test('should return v100 for Duffel', async () => {
    const response = await new CheckFlightDuffel(new Client({
      apiKey: CONFIG.API_KEY,
      basePath: CONFIG.BASE_PATH,
      company: CONFIG.COMPANY,
    })).post(mockDuffelRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
