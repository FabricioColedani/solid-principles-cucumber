import { WordDocument } from './word';
import { ReadonlyPDF } from './pdf';
import { processEditable, viewOnly } from './processor';

const word = new WordDocument();
processEditable(word);

const pdf = new ReadonlyPDF();
viewOnly(pdf);

// The following would be a compile-time type error in TypeScript
// processEditable(pdf); // Error: ReadonlyPDF does not implement Editable or Savable
