import { RoadLogistics, SeaLogistics } from './factorys.js';

export function clientCode() {
  let logistics = new SeaLogistics();
  logistics.createTransport().deliver();

  logistics = new RoadLogistics();
  logistics.createTransport().deliver();
}
