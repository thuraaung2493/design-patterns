import Transport from './transport.js';

class Ship implements Transport {
  deliver(): void {
    console.log('Deliver by ship');
  }
}

export default Ship;
