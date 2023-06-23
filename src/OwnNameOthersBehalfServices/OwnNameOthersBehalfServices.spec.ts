import { CheckOwnNameOthersBehalfServices } from './CheckOwnNameOthersBehalfServices';
import { Client } from '../Client';
import { CONFIG } from '../../config.json';
import { mockDuffelRequest } from './mockOwnNameOthersBehalfServices';

describe('Duffel Fiscalization', () => {
  test('should return v100 for Duffel', async () => {
    const response = await new CheckOwnNameOthersBehalfServices(new Client({
      apiKey: CONFIG.API_KEY,
      basePath: CONFIG.BASE_PATH,
      company: CONFIG.COMPANY,
    })).post(mockDuffelRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
