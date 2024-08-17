import Application from './application.js';

export default function singletonDemo() {
  const app1 = Application.getInstance();
  const app2 = Application.getInstance();

  app1.run('Application 1 is running');
  app2.run('Application 2 is running');

  console.log('app1 === app2', app1 === app2);
}
