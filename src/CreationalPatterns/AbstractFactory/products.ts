export interface Phone {
  call(no: string): void;
  useInternet(): void;
}

export interface Earbuds {
  listen(): void;
}

export interface SmartWatch {
  watchTime(): void;
  measureHeatBeats(): void;
}

export class Iphone implements Phone {
  call(no: string): void {
    console.log(`Call ${no} with an iPhone.`);
  }

  useInternet(): void {
    console.log('Using internet with iPhone.');
  }
}

export class Airpod implements Earbuds {
  listen(): void {
    console.log('Play music using your AirPods.');
  }
}

export class AppleWatch implements SmartWatch {
  watchTime(): void {
    console.log('Checking the time with a Apple Watch.');
  }

  measureHeatBeats(): void {
    console.log('Monitoring heartbeats with the Apple Watch.');
  }
}

export class Samsung implements Phone {
  call(no: string): void {
    console.log(`Call ${no} with a Samsung Phone.`);
  }

  useInternet(): void {
    console.log('Using internet with Samsung Phone.');
  }
}

export class GalaxyBud implements Earbuds {
  listen(): void {
    console.log('Play music using your Galaxy Bud.');
  }
}

export class GalaxyWatch implements SmartWatch {
  watchTime(): void {
    console.log('Checking the time with a Galaxy Watch.');
  }

  measureHeatBeats(): void {
    console.log('Monitoring heartbeats with the Galaxy Watch.');
  }
}
