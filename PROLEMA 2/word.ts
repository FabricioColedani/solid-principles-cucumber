import { Openable, Editable, Savable } from './interfaces';

export class WordDocument implements Openable, Editable, Savable {
    open() { console.log('Abriendo documento Word...'); }
    edit() { console.log('Editando texto...'); }
    save() { console.log('Guardando cambios en disco...'); }
}
