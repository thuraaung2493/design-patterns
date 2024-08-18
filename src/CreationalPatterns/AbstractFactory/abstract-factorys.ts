import {
  Airpod,
  AppleWatch,
  Earbuds,
  GalaxyBud,
  GalaxyWatch,
  Iphone,
  Phone,
  Samsung,
  SmartWatch,
} from './products.js';

// Abstract Factory
export interface PhoneFactory {
  createPhone(): Phone;
  createEarBud(): Earbuds;
  createWatch(): SmartWatch;
}

// Concrete Factories
export class IPhoneFactory implements PhoneFactory {
  createPhone(): Phone {
    return new Iphone();
  }

  createEarBud(): Earbuds {
    return new Airpod();
  }

  createWatch(): SmartWatch {
    return new AppleWatch();
  }
}

export class SamsungFactory implements PhoneFactory {
  createPhone(): Phone {
    return new Samsung();
  }

  createEarBud(): Earbuds {
    return new GalaxyBud();
  }

  createWatch(): SmartWatch {
    return new GalaxyWatch();
  }
}
