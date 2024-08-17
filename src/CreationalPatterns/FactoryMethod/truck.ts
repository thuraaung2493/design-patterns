import Transport from './transport.js';

class Truck implements Transport {
  deliver(): void {
    console.log('Deliver by truck');
  }
}

export default Truck;
