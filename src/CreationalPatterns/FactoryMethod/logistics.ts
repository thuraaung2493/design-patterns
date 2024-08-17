import Transport from './transport.js';

abstract class Logistics {
  planDelivery() {
    const transport = this.createTransport();

    transport.deliver();
  }

  abstract createTransport(): Transport;
}

export default Logistics;
