import { PhoneFactory, SamsungFactory } from './abstract-factorys.js';
import { Earbuds, Phone, SmartWatch } from './products.js';

export function clientCode() {
  let factory: PhoneFactory = new SamsungFactory();
  let phone: Phone = factory.createPhone();
  let earbud: Earbuds = factory.createEarBud();
  let watch: SmartWatch = factory.createWatch();
  phone.call('0988283822382');
  earbud.listen();
  watch.measureHeatBeats();
}
