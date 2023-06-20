import { CheckFlightDuffel } from './CheckFlightDuffel';
import { Client } from '../Client';
import { mockDuffelRequest } from './mockDuffelRequest';

describe('Duffel Fiscalization', () => {
  test('should return v100 for Duffel', async () => {
    const response = await new CheckFlightDuffel(new Client({ source: 'travelspot' })).post(mockDuffelRequest);

    expect(response.data.SifraGreske).toBe('v100');
  }, 15000)
});
