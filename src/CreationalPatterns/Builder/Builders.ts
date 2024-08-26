import { House } from './Products.js';

export interface HouseBuilder {
  buildFoundation(): HouseBuilder;
  buildStructure(): HouseBuilder;
  buildRoof(): HouseBuilder;
  buildGarage(): HouseBuilder;
  buildGarden(): HouseBuilder;
  buildSwimmingPool(): HouseBuilder;
  getHouse(): House;
}

export class ConcreteHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  buildFoundation(): HouseBuilder {
    this.house.setFoundation('Concrete, brick and stone');
    return this;
  }

  buildStructure(): HouseBuilder {
    this.house.setStructure('Concrete, brick and stone');
    return this;
  }

  buildRoof(): HouseBuilder {
    this.house.setRoof('Concrete');
    return this;
  }

  buildGarage(): HouseBuilder {
    this.house.setGarage(true);
    return this;
  }

  buildGarden(): HouseBuilder {
    this.house.setGarden(true);
    return this;
  }

  buildSwimmingPool(): HouseBuilder {
    this.house.setSwimmingPool(true);
    return this;
  }

  getHouse(): House {
    return this.house;
  }
}
