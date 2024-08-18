import { Circle, Rectangle, Shape } from './abstractions.js';
import { CanvasDrawingApi, DrawingApi } from './implementations.js';

export function clientCode() {
  // const drawingApi: DrawingApi = new SvgDrawingApi();
  const drawingApi: DrawingApi = new CanvasDrawingApi();

  let shape: Shape = new Circle(drawingApi);
  shape.draw();

  shape = new Rectangle(drawingApi);
  shape.draw();
}
