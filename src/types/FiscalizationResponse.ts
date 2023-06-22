import { Headers } from 'node-fetch'

export interface FiscalizationResponse<T_Data> {
  data: T_Data
  headers?: Headers
}

export interface ErrorResponse {
  code: string
  documentation_url: string
  message: string
  title: string
  type: string
}

export class FiscalizerError extends Error {
  public errors: ErrorResponse[]

  constructor({
    errors
  }: {
    errors: ErrorResponse[]
  }) {
    super()
    this.errors = errors
  }
}

export class ValidationError extends Error {
  public errors: ErrorResponse[]

  constructor({
    errors
  }: {
    errors: ErrorResponse[]
  }) {
    super();
    this.errors = errors;
    this.stack = 'ValidationError';
  }
}

export interface FiscalizedResponse {
  jir: string
  messageId: string
  dateTime: string
}

export interface CheckFiscalizationResponse {
  SifraGreske: string
  PorukaGreske: string
}
