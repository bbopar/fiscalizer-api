import { CheckExemptTransaction } from './CheckExemptTransaction';
import { Client } from '../Client';
import { CONFIG } from '../../config.json';
import { mockGDSAmadeusNonEU } from './mockExemptTransaction';

describe('GDSAmadeusNonEU Fiscalization', () => {
  test('should return v100 for GDSAmadeusNonEU', async () => {
    const response = await new CheckExemptTransaction(new Client({
      apiKey: CONFIG.API_KEY,
      basePath: CONFIG.BASE_PATH,
      company: CONFIG.COMPANY,
    })).post(mockGDSAmadeusNonEU);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
