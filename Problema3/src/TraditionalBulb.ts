import { Switchable } from './Device';

export class TraditionalBulb implements Switchable {
    turnOn() { console.log('Bombilla tradicional encendida... consumiendo mucha energía.'); }
    turnOff() { console.log('Bombilla tradicional apagada.'); }
}
