import { FiscalizeAmadeusEU } from "AmadeusEU/FiscalizeAmadeusEU";
import { FiscalizeAmadeusNonEU } from "AmadeusNonEU/FiscalizeAmadeusNonEU";
import { FiscalizeBookingFee } from "BookingFee/FiscalizeBookingFee";
import { Client, Config } from "Client";
import { FiscalizeFlightDuffel } from "FlightDuffel/FiscalizeFlightDuffel";
import { FiscalizeGDSAmadeusEU } from "GDSAmadeusEU/FiscalizeGDSAmadeusEU";
import { FiscalizeGDSAmadeusNonEU } from "GDSAmadeusNonEU/FiscalizeGDSAmadeusNonEU";

export interface FiscalizerAPIClient {
  fiscalizeAmadeusEU: FiscalizeAmadeusEU;
  fiscalizeAmadeusNonEU: FiscalizeAmadeusNonEU;
  fiscalizeBookingFee: FiscalizeBookingFee;
  fiscalizeFlightDuffel: FiscalizeFlightDuffel;
  fiscalizeGDSAmadeusEU: FiscalizeGDSAmadeusEU;
  fiscalizeGDSAmadeusNonEU: FiscalizeGDSAmadeusNonEU;
};

export class FiscalizeAPI {
  private client: Client
  public fiscalizeAmadeusEU: FiscalizeAmadeusEU;
  public fiscalizeAmadeusNonEU: FiscalizeAmadeusNonEU;
  public fiscalizeBookingFee: FiscalizeBookingFee;
  public fiscalizeFlightDuffel: FiscalizeFlightDuffel;
  public fiscalizeGDSAmadeusEU: FiscalizeGDSAmadeusEU;
  public fiscalizeGDSAmadeusNonEU: FiscalizeGDSAmadeusNonEU;

  constructor(config: Config) {
    this.client = new Client(config);

    this.fiscalizeAmadeusEU = new FiscalizeAmadeusEU(this.client)
    this.fiscalizeAmadeusNonEU = new FiscalizeAmadeusNonEU(this.client);
    this.fiscalizeBookingFee = new FiscalizeBookingFee(this.client);
    this.fiscalizeFlightDuffel = new FiscalizeFlightDuffel(this.client);
    this.fiscalizeGDSAmadeusEU = new FiscalizeGDSAmadeusEU(this.client);
    this.fiscalizeGDSAmadeusNonEU = new FiscalizeGDSAmadeusNonEU(this.client);
  }
};