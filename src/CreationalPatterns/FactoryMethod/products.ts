export interface Transport {
  deliver(): void;
}

export class Ship implements Transport {
  deliver(): void {
    console.log('Deliver by ship');
  }
}

export class Truck implements Transport {
  deliver(): void {
    console.log('Deliver by truck');
  }
}
