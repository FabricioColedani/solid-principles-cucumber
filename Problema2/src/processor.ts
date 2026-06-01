import { Openable, Editable, Savable } from './interfaces';

export function processEditable(doc: Openable & Editable & Savable) {
    doc.open();
    doc.edit();
    doc.save();
}

export function viewOnly(doc: Openable) {
    doc.open();
}
