import { ConcreteHouseBuilder, HouseBuilder } from './Builders.js';
import { ConstructionEngineer } from './Directors.js';

export function clientCode() {
  const houseBuilder: HouseBuilder = new ConcreteHouseBuilder();
  const enginner = new ConstructionEngineer(houseBuilder);
  const house = enginner.constructHouse();
  console.log(house.toString());
}
