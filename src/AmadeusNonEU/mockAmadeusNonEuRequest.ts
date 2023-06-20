import {
  PaymentMethod,
  Sequence,
  ExemptedTransactionsRequest,
} from '../types/FiscalizationRequest';
import { v4 as uuid } from 'uuid';
import moment from 'moment-timezone';

export const mockAmadeusNonEuRequest: ExemptedTransactionsRequest = {
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
  marginAmount: '300.00',
  amountExemptVat: '1300.00',
  totalAmount: '1300.00',
  paymentMethod: PaymentMethod.K,
  zki: '969de172b2ba184e2eb94048fb567470',
  operatorOib: '63896222880',
  subsequentDelivery: false,
};
