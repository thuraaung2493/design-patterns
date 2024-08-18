import { clientCode as abstractFactory } from './CreationalPatterns/AbstractFactory/client-code.js';
import { clientCode as factoryMethod } from './CreationalPatterns/FactoryMethod/client-code.js';
import { clientCode as singleton } from './CreationalPatterns/Singleton/client-code.js';
import { clientCode as bridge } from './StructuralPatterns/Bridge/client-code.js';

console.log('Singleton');
singleton();

console.log('Factory Method');
factoryMethod();

console.log('Abstract Factory');
abstractFactory();

console.log('Bridge');
bridge();
