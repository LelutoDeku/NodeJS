//importing common js modules
// const simple = require("./second_module")

// simple();

//importing ES modules

// import {simple} from "./module.mjs"

// simple();


// import {simple2 as sim} from "./module.mjs"

// sim();

// import simple23 from "./module.mjs" //make simple2 default and we can call it by any alias
// simple23();

// import {simple, simple2} from "./module.mjs" //multiple exports but you'll have to remove 'default' from simple2() function for this to work
// // simple23();//no simple23 function but only simple and simple2
// simple();
// simple2();

import * as a from "./module.mjs"
console.log(a)
console.log(a.simple()) //both functions do not return anything hence undefined
console.log(a.simple2())