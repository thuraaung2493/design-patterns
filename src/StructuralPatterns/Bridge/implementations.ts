export interface DrawingApi {
  drawCircle(): void;
  drawRectangle(): void;
}

export class SvgDrawingApi implements DrawingApi {
  drawCircle(): void {
    console.log('Draw SVG Circle.');
  }

  drawRectangle(): void {
    console.log('Draw SVG Rectangle.');
  }
}

export class CanvasDrawingApi implements DrawingApi {
  drawCircle(): void {
    console.log('Draw Canvas Circle.');
  }

  drawRectangle(): void {
    console.log('Draw Canvas Rectangle.');
  }
}
