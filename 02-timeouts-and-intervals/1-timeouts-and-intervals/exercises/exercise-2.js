import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// fill in the blanks

let x = '';

x += 'j'; // Blank 1: Start with 'j'

setTimeout(() => {
    x += 'a'; // Blank 2: Append 'a' after 100 milliseconds
    log('cb 1:', x);
}, 100);

x += 'a'; // Blank 3: Append 'a' immediately

setTimeout(() => {
    const test = x === 'javascript';
    log('cb 2:', test);
    console.assert(test, 'x should be "javascript"');
}, 300);

setTimeout(() => {
    x += 'v'; // Blank 4: Append 'v' after 200 milliseconds
    log('cb 3:', x);
}, 500);

setTimeout(() => {
    x += 'script'; // Blank 5: Append 'script' after 500 milliseconds
    log('cb 4:', x);
}, 200);

x += 'a'; // Blank 6: Append 'a' just before logging

log(x);

log('= = = =  the call stack is empty  = = = =');

