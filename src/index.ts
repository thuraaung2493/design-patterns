import { clientCode as abstractFactory } from './CreationalPatterns/AbstractFactory/client-code.js';
import { clientCode as builder } from './CreationalPatterns/Builder/client-code.js';
import { clientCode as factoryMethod } from './CreationalPatterns/FactoryMethod/client-code.js';
import { clientCode as singleton } from './CreationalPatterns/Singleton/client-code.js';
import { clientCode as bridge } from './StructuralPatterns/Bridge/client-code.js';
import { clientCode as composite } from './StructuralPatterns/Composite/client-code.js';

console.log('Singleton');
singleton();

console.log('Factory Method');
factoryMethod();

console.log('Abstract Factory');
abstractFactory();

console.log('Builder');
builder();

console.log('Bridge');
bridge();

console.log('Composite');
composite();
