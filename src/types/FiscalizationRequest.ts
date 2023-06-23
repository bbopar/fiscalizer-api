export type FiscalizationRequest = 
| RegularProcedureRequest
| OwnNameOthersBehalfServicesRequest
| ExemptedTransactionsRequest

export interface BaseFiscalizationRequest {
  oib: string
  messageId: string
  isTaxLiable: boolean
  date: string
  sequence: Sequence
  fiscalNumber: {
    fullNumber: string
    invoiceSequenceNumber: string
    businessSpaceLabel: string
    chargingDeviceLabel: string
  }
  totalAmount: string
  paymentMethod: PaymentMethod
  zki: string
  operatorOib: string
  subsequentDelivery: boolean
}

export interface RegularProcedureRequest extends BaseFiscalizationRequest {
  vat: Vat[]
  marginAmount?: string
  vatExcludedAmount?: string
  amountExemptVat?: string
}

export interface OwnNameOthersBehalfServicesRequest extends BaseFiscalizationRequest {
  vatExcludedAmount: string
  marginAmount?: string
  vat?: Vat[]
}

export interface ExemptedTransactionsRequest extends BaseFiscalizationRequest {
  amountExemptVat: string
  marginAmount?: string
}

interface Vat {
  rate: string
  base: string
  amount: string
}


export enum Sequence {
  P = 'P',
  N = 'N',
}

export enum PaymentMethod {
  G = 'G',
  K = 'K',
  C = 'C',
  T = 'T',
  O = 'O',
}
