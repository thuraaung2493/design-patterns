import RoadLogistics from './road-logistics.js';
import SeaLogistics from './sea-logistics.js';

export default function factoryDemo() {
  let logistics = new SeaLogistics();
  logistics.planDelivery();
  logistics = new RoadLogistics();
  logistics.planDelivery();
}
