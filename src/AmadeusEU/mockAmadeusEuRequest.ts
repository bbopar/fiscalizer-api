import {
  PaymentMethod,
  Sequence,
  TravelAgenciesAndTravelOrganizersServicesRequest,
} from '../types/FiscalizationRequest';
import { v4 as uuid } from 'uuid';
import moment from 'moment-timezone';

export const mockAmadeusEuRequest: TravelAgenciesAndTravelOrganizersServicesRequest = {
  oib: '63896222880',
  messageId: uuid().toString(),
  isTaxLiable: true,
  date: moment().tz('Europe/Zagreb').format('DD.MM.YYYYTHH:mm:ss').toString(),
  sequence: Sequence.N,
  fiscalNumber: {
    fullNumber: '1488/01/4',
    invoiceSequenceNumber: '1488',
    businessSpaceLabel: '01',
    chargingDeviceLabel: '4',
  },
  vat: [{
    amount: '60.00',
    base: '240.00',
    rate: '25.00',
  }],
  marginAmount: '300.00',
  vatExcludedAmount: '1000.00',
  totalAmount: '1300.00',
  paymentMethod: PaymentMethod.K,
  zki: '969de172b2ba184e2eb94048fb567470',
  operatorOib: '63896222880',
  subsequentDelivery: false,
};
