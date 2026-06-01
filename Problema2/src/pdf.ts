import { Openable } from './interfaces';

export class ReadonlyPDF implements Openable {
    open() { console.log('Abriendo PDF protegido... (solo lectura)'); }
}
