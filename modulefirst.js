// Common js module importing 
// const simple = require('./modulesecond');
// simple();

// Es6 module importing 
// import { simple2 } from "./modulesecond.mjs"
// import { simple, simple2 } from "./modulesecond.mjs"
// import { simple2 as simple, simple as simple2 } from "./modulesecond.mjs"
// import { simple2 as simple} from "./modulesecond.mjs"

// import simple24 from "./modulesecond.mjs"
// simple24(); 

import * as demoAll from "./modulesecond.mjs"
// demoAll.simple2() wont run due to default keyword
console.log(demoAll, demoAll.simple(), demoAll.simple3());


// url module to play with http 
