import { Client, Config } from "Client"
import { CheckExemptTransaction, FiscalizeExemptTransaction } from 'ExemptTransaction';
import { CheckRegularProcedure, FiscalizeRegularProcedure } from 'RegularProcedure';
import { CheckOwnNameOthersBehalfServices, FiscalizeOwnNameOthersBehalfServices } from 'OwnNameOthersBehalfServices';

export interface FiscalizerAPIClient {
  checkExemptTransaction: CheckExemptTransaction
  checkRegularProcedure: CheckRegularProcedure
  checkOwnNameOthersBehalfServices: CheckOwnNameOthersBehalfServices

  fiscalizeExemptTransaction: FiscalizeExemptTransaction
  fiscalizeRegularProcedure: FiscalizeRegularProcedure
  fiscalizeOwnNameOthersBehalfServices: FiscalizeOwnNameOthersBehalfServices
}

export class FiscalizeAPI {
  private client: Client

  public checkExemptTransaction: CheckExemptTransaction
  public checkRegularProcedure: CheckRegularProcedure
  public checkOwnNameOthersBehalfServices: CheckOwnNameOthersBehalfServices

  public fiscalizeExemptTransaction: FiscalizeExemptTransaction
  public fiscalizeRegularProcedure: FiscalizeRegularProcedure
  public fiscalizeOwnNameOthersBehalfServices: FiscalizeOwnNameOthersBehalfServices

  constructor(config: Config) {
    this.client = new Client(config)

    this.checkExemptTransaction = new CheckExemptTransaction(this.client)
    this.checkRegularProcedure = new CheckRegularProcedure(this.client)
    this.checkOwnNameOthersBehalfServices = new CheckOwnNameOthersBehalfServices(this.client)

    this.fiscalizeExemptTransaction = new FiscalizeExemptTransaction(this.client)
    this.fiscalizeRegularProcedure = new FiscalizeRegularProcedure(this.client)
    this.fiscalizeOwnNameOthersBehalfServices = new FiscalizeOwnNameOthersBehalfServices(this.client)
  }
}