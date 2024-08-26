export class House {
  private foundation?: string;
  private structure?: string;
  private roof?: string;
  private hasGarage: boolean = false;
  private hasSwimmingPool: boolean = false;
  private hasGarden: boolean = false;

  setFoundation(foundation: string) {
    this.foundation = foundation;
  }

  setRoof(roof: string) {
    this.roof = roof;
  }

  setStructure(structure: string) {
    this.structure = structure;
  }

  setGarage(hasGarage: boolean) {
    this.hasGarage = hasGarage;
  }

  setSwimmingPool(hasSwimmingPool: boolean) {
    this.hasSwimmingPool = hasSwimmingPool;
  }

  setGarden(hasGarden: boolean) {
    this.hasGarden = hasGarden;
  }

  toString(): string {
    return `House{
        foundation=${this.foundation}, 
        structure=${this.structure}, 
        roof=${this.roof}, 
        hasGarage=${this.hasGarage}, 
        hasSwimmingPool=${this.hasSwimmingPool}, 
        hasGarden=${this.hasGarden}}`;
  }
}
