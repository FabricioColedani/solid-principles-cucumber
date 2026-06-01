import { Switchable } from './Device';

export class SmartLight implements Switchable {
    turnOn() { console.log('SmartLight encendida... consumo eficiente y conexión Wi-Fi.'); }
    turnOff() { console.log('SmartLight apagada.'); }
}
