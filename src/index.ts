import { FiscalizeAmadeusEU } from "AmadeusEU/FiscalizeAmadeusEU"
import { CheckAmadeusEU } from "AmadeusEU/CheckAmadeusEU"
import { FiscalizeAmadeusNonEU } from "AmadeusNonEU/FiscalizeAmadeusNonEU"
import { CheckAmadeusNonEU } from "AmadeusNonEU/CheckAmadeusNonEU"
import { FiscalizeBookingFee } from "BookingFee/FiscalizeBookingFee"
import { CheckBookingFee } from "BookingFee/CheckBookingFee"
import { Client, Config } from "Client"
import { FiscalizeFlightDuffel } from "FlightDuffel/FiscalizeFlightDuffel"
import { CheckFlightDuffel } from "FlightDuffel/CheckFlightDuffel"
import { FiscalizeGDSAmadeusEU } from "GDSAmadeusEU/FiscalizeGDSAmadeusEU"
import { CheckGDSAmadeusEU } from "GDSAmadeusEU/CheckGDSAmadeusEU"
import { FiscalizeGDSAmadeusNonEU } from "GDSAmadeusNonEU/FiscalizeGDSAmadeusNonEU"
import { CheckGDSAmadeusNonEU } from "GDSAmadeusNonEU/CheckGDSAmadeusNonEU"

export interface FiscalizerAPIClient {
  checkAmadeusEU: CheckAmadeusEU
  checkAmadeusNonEU: CheckAmadeusNonEU
  checkBookingFee: CheckBookingFee
  checkFlightDuffel: CheckFlightDuffel
  checkGDSAmadeusEU: CheckGDSAmadeusEU
  checkGDSAmadeusNonEU: CheckGDSAmadeusNonEU

  fiscalizeAmadeusEU: FiscalizeAmadeusEU
  fiscalizeAmadeusNonEU: FiscalizeAmadeusNonEU
  fiscalizeBookingFee: FiscalizeBookingFee
  fiscalizeFlightDuffel: FiscalizeFlightDuffel
  fiscalizeGDSAmadeusEU: FiscalizeGDSAmadeusEU
  fiscalizeGDSAmadeusNonEU: FiscalizeGDSAmadeusNonEU
}

export class FiscalizeAPI {
  private client: Client

  public checkAmadeusEU: CheckAmadeusEU
  public checkAmadeusNonEU: CheckAmadeusNonEU
  public checkBookingFee: CheckBookingFee
  public checkFlightDuffel: CheckFlightDuffel
  public checkGDSAmadeusEU: CheckGDSAmadeusEU
  public checkGDSAmadeusNonEU: CheckGDSAmadeusNonEU

  public fiscalizeAmadeusEU: FiscalizeAmadeusEU
  public fiscalizeAmadeusNonEU: FiscalizeAmadeusNonEU
  public fiscalizeBookingFee: FiscalizeBookingFee
  public fiscalizeFlightDuffel: FiscalizeFlightDuffel
  public fiscalizeGDSAmadeusEU: FiscalizeGDSAmadeusEU
  public fiscalizeGDSAmadeusNonEU: FiscalizeGDSAmadeusNonEU

  constructor(config: Config) {
    this.client = new Client(config)

    this.checkAmadeusEU = new CheckAmadeusEU(this.client)
    this.checkAmadeusNonEU = new CheckAmadeusNonEU(this.client)
    this.checkBookingFee = new CheckBookingFee(this.client)
    this.checkFlightDuffel = new CheckFlightDuffel(this.client)
    this.checkGDSAmadeusEU = new CheckGDSAmadeusEU(this.client)
    this.checkGDSAmadeusNonEU = new CheckGDSAmadeusNonEU(this.client)

    this.fiscalizeAmadeusEU = new FiscalizeAmadeusEU(this.client)
    this.fiscalizeAmadeusNonEU = new FiscalizeAmadeusNonEU(this.client)
    this.fiscalizeBookingFee = new FiscalizeBookingFee(this.client)
    this.fiscalizeFlightDuffel = new FiscalizeFlightDuffel(this.client)
    this.fiscalizeGDSAmadeusEU = new FiscalizeGDSAmadeusEU(this.client)
    this.fiscalizeGDSAmadeusNonEU = new FiscalizeGDSAmadeusNonEU(this.client)
  }
}