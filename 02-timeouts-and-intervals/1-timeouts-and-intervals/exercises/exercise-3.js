import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// fill in the blanks

let x = '';

const exercise3_cb_1 = () => {
    x += 'a';
    log('cb 1:', x);
};
const intervalId = setInterval(exercise3_cb_1, 200); // Blank 1: Set interval to 200ms

const exercise3_cb_2 = () => {
    x += 'w';
    log('cb 2:', x);
};
setTimeout(exercise3_cb_2, 50); // Blank 2: Set timeout to 50ms

const exercise3_cb_3 = () => {
    const test = x === 'whaaaa!';
    log('cb 3:', test);
    console.assert(test, 'x should be "whaaaa!');
};
setTimeout(exercise3_cb_3, 100); // Blank 3: Set timeout to 100ms

const exercise3_cb_4 = () => {
    clearInterval(intervalId); // Blank 4: Clear the interval
    x += '!';
    log('cb 4:', x);
};
setTimeout(exercise3)

