import Application from './application.js';

export function clientCode() {
  const app1 = Application.instance;
  const app2 = Application.instance;

  console.log('app1 === app2', app1 === app2);
}
