import { Switchable } from './Device';

export class Switch {
    private device: Switchable;

    constructor(device: Switchable) {
        this.device = device; // Inyección de dependencia: el dispositivo se suministra desde afuera
    }

    operate(action: string) {
        if (action === 'on') {
            this.device.turnOn();
        } else {
            this.device.turnOff();
        }
    }
}
