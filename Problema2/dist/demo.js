"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const word_1 = require("./word");
const pdf_1 = require("./pdf");
const processor_1 = require("./processor");
const word = new word_1.WordDocument();
(0, processor_1.processEditable)(word);
const pdf = new pdf_1.ReadonlyPDF();
(0, processor_1.viewOnly)(pdf);
// The following would be a compile-time type error in TypeScript
// processEditable(pdf); // Error: ReadonlyPDF does not implement Editable or Savable
