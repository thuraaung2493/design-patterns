import { Ship, Transport, Truck } from './products.js';

abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery() {
    // other business codes...
  }
}

export class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}
