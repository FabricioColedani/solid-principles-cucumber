"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { WordDocument } = require('../../word');
const { ReadonlyPDF } = require('../../pdf');
const { processEditable, viewOnly } = require('../../processor');
let doc;
let logs = [];
const originalLog = console.log.bind(console);
Given('a word document', function () {
    doc = new WordDocument();
});
Given('a readonly pdf', function () {
    doc = new ReadonlyPDF();
});
When('I process it as editable', function () {
    logs = [];
    console.log = (...args) => logs.push(args.join(' '));
    processEditable(doc);
    console.log = originalLog;
});
When('I view it', function () {
    logs = [];
    console.log = (...args) => logs.push(args.join(' '));
    viewOnly(doc);
    console.log = originalLog;
});
Then('it should open and edit and save', function () {
    const ok = logs.some((l) => l.includes('Abriendo')) && logs.some((l) => l.includes('Editando')) && logs.some((l) => l.includes('Guardando'));
    assert.ok(ok, `Expected open+edit+save in logs, got: ${logs}`);
});
Then('it should open only', function () {
    const ok = logs.length === 1 && logs[0].includes('Abriendo');
    assert.ok(ok, `Expected single open log, got: ${logs}`);
});
