import { CheckGDSAmadeusEU } from './CheckGDSAmadeusEU';
import { Client } from '../Client';
import { mockGDSAmadeusEU } from './mockGDSAmadeusEU';

describe('GDSAmadeusEU Fiscalization', () => {
  test('should return v100 for GDSAmadeusEU', async () => {
    const response = await new CheckGDSAmadeusEU(new Client({ source: 'travelspot' })).post(mockGDSAmadeusEU);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
