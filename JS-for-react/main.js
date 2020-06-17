import {sayHi, sayBye} from './say.js';
import {User} from './user.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!import {User} from './user.js';

let user = new User();
user.name = 'Nicha';
console.log('Hello ' + user.name);