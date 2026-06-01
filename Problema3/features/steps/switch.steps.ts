import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import assert from 'assert';
import { Switch } from '../../Switch';
import { TraditionalBulb } from '../../TraditionalBulb';
import { SmartLight } from '../../SmartLight';

let sw: Switch;
let captured: string[] = [];
let originalLog: (...args: any[]) => void;

Before(function () {
  captured = [];
  originalLog = console.log;
  // capture console output
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.log = (...args: any[]) => { captured.push(args.join(' ')); };
});

After(function () {
  console.log = originalLog;
});

Given('a {string} device', function (deviceName: string) {
  if (deviceName === 'TraditionalBulb') {
    sw = new Switch(new TraditionalBulb());
  } else if (deviceName === 'SmartLight') {
    sw = new Switch(new SmartLight());
  } else {
    throw new Error('Unknown device ' + deviceName);
  }
});

When('I operate {string}', function (action: string) {
  sw.operate(action);
});

Then('the output should contain {string}', function (expected: string) {
  const found = captured.some(line => line.includes(expected));
  assert.ok(found, `Expected output to contain '${expected}', got: ${captured.join('\n')}`);
});
