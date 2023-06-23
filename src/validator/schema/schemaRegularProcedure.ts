import * as yup from 'yup';

export const RegularProcedureSchema = yup.object().strict(true).shape({
  oib: yup.string().required(),
  messageId: yup.string().required(),
  isTaxLiable: yup.boolean().required(),
  date: yup.string().required().matches(/(\d{2}).(\d{2}).(\d{4})T(\d{2}):(\d{2}):(\d{2})/),
  sequence: yup.string().required().oneOf(['P', 'N']),
  fiscalNumber: yup.object().shape({
    fullNumber: yup.string().required().matches(/^[1-9][0-9]*\/\d*\/\d*$/),
    invoiceSequenceNumber: yup.string().required(),
    businessSpaceLabel: yup.string().required(),
    chargingDeviceLabel: yup.string().required(),
  }),
  vat: yup
    .array()
    .of(
      yup.object().shape({
        amount: yup.string().matches(/^[0-9]+\.[0-9]{2}$/),
        base: yup.string().matches(/^-?[0-9]+\.[0-9]{2}$/),
        rate: yup.string().matches(/^-?[0-9]+\.[0-9]{2}$/),
      })
    )
    .required(),
  totalAmount: yup.string().required().matches(/^-?[0-9]+\.[0-9]{2}$/),
  paymentMethod: yup.string().required().oneOf(['G', 'K', 'C', 'T', 'O']),
  zki: yup.string().required().min(32).max(32),
  operatorOib: yup.string().required(),
  subsequentDelivery: yup.boolean().required(),
}).noUnknown();
