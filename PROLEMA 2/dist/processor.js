"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewOnly = exports.processEditable = void 0;
function processEditable(doc) {
    doc.open();
    doc.edit();
    doc.save();
}
exports.processEditable = processEditable;
function viewOnly(doc) {
    doc.open();
}
exports.viewOnly = viewOnly;
