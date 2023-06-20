export const BookingFeeRules = {
  oib: 'required|string',
  messageId: 'required|string',
  isTaxLiable: 'required|boolean',
  date: 'required|regex:/(\\d{2}).(\\d{2}).(\\d{4})T(\\d{2}):(\\d{2}):(\\d{2})/',
  sequence: 'required|in:P,N',
  fiscalNumber: {
    fullNumber: ['required', 'string', 'regex:/^[1-9][0-9]*\/\\d*\/\\d*$/'],
    invoiceSequenceNumber: 'required|numeric|string',
    businessSpaceLabel: 'required|numeric|string',
    chargingDeviceLabel: 'required|numeric|string',
  },
  vat: 'required|array',
  'vat.*': {
    amount: ['numeric', 'regex:/^[0-9]+\\.[0-9]{2}$/'],
    base: ['numeric', 'regex:/^-?[0-9]+\\.[0-9]{2}$/'],
    rate: ['numeric', 'regex:/^-?[0-9]+\\.[0-9]{2}$/'],
  },
  totalAmount: ['required', 'numeric', 'regex:/^-?[0-9]+\\.[0-9]{2}$/'],
  paymentMethod: 'required|in:[G,K,C,T,O]',
  zki: 'required|string|min:32|max:32',
  operatorOib: 'required|string',
  subsequentDelivery: 'required|boolean',
};
