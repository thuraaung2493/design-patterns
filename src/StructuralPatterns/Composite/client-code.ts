import { View, ViewGroup } from './composite.js';

export function clientCode() {
  const mainView: ViewGroup = new ViewGroup('Main View');
  const child1: View = new View('Child 1');
  mainView.add(child1);

  const subView: ViewGroup = new ViewGroup('Sub View Composite');
  subView.add(new View('Sub View Child'));
  subView.add(new View('Sub View Child'));

  mainView.add(subView);
  mainView.draw();
}
