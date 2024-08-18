import { DrawingApi } from './implementations.js';

export abstract class Shape {
  protected drawingApi: DrawingApi;

  constructor(drawingApi: DrawingApi) {
    this.drawingApi = drawingApi;
  }

  public abstract draw(): void;
}

export class Circle extends Shape {
  constructor(drawingApi: DrawingApi) {
    super(drawingApi);
  }

  public draw(): void {
    this.drawingApi.drawCircle();
  }
}

export class Rectangle extends Shape {
  constructor(drawingApi: DrawingApi) {
    super(drawingApi);
  }

  public draw(): void {
    this.drawingApi.drawRectangle();
  }
}
