import Logistics from './logistics.js';
import Transport from './transport.js';
import Truck from './truck.js';

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

export default RoadLogistics;
