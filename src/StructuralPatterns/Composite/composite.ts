// Component
export abstract class UIWidget {
  protected id: string;

  constructor(id: string) {
    this.id = id;
  }

  abstract draw(): void;
}

// Leaf
export class View extends UIWidget {
  constructor(id: string) {
    super(id);
  }

  draw(): void {
    console.log(`Draw View id: ${this.id}`);
  }
}

// Composite
export class ViewGroup extends UIWidget {
  private children: Array<UIWidget> = [];

  constructor(id: string) {
    super(id);
  }

  add(child: UIWidget) {
    this.children.push(child);
  }

  draw(): void {
    console.log(`Draw ViewGroup id: ${this.id}`);

    for (const child of this.children) {
      child.draw();
    }
  }
}
