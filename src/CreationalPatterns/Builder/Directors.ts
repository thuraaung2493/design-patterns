import { HouseBuilder } from './Builders.js';
import { House } from './Products.js';

export class ConstructionEngineer {
  private builder: HouseBuilder;

  constructor(builder: HouseBuilder) {
    this.builder = builder;
  }

  constructHouse(): House {
    return this.builder
      .buildFoundation()
      .buildStructure()
      .buildRoof()
      .buildGarage()
      .buildSwimmingPool()
      .buildGarden()
      .getHouse();
  }
}
