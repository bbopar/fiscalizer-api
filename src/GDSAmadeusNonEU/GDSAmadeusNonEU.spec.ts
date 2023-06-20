import { CheckGDSAmadeusNonEU } from './CheckGDSAmadeusNonEU';
import { Client } from '../Client';
import { mockGDSAmadeusNonEU } from './mockGDSAmadeusNonEU';

describe('GDSAmadeusNonEU Fiscalization', () => {
  test('should return v100 for GDSAmadeusNonEU', async () => {
    const response = await new CheckGDSAmadeusNonEU(new Client({ source: 'travelspot' })).post(mockGDSAmadeusNonEU);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
