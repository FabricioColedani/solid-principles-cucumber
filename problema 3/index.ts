import { TraditionalBulb } from './TraditionalBulb';
import { SmartLight } from './SmartLight';
import { Switch } from './Switch';

console.log('--- Usando TraditionalBulb ---');
const bulb = new TraditionalBulb();
const sw1 = new Switch(bulb);
sw1.operate('on');
sw1.operate('off');

console.log('\n--- Cambiando a SmartLight sin tocar `Switch` ---');
const smart = new SmartLight();
const sw2 = new Switch(smart);
sw2.operate('on');
sw2.operate('off');
