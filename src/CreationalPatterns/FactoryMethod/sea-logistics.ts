import Logistics from './logistics.js';
import Ship from './ship.js';
import Transport from './transport.js';

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

export default SeaLogistics;
