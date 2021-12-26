const path = require('path');
const myPath = path.basename('C://user/devip/Desktop/node/pathmodule.js');
const myPath2 = path.dirname('C://user/devip/Desktop/node/pathmodule.js');
console.log(myPath2);
myExtension1 = path.extname('pathmodule.js');
myExtension2 = path.extname(__filename);
console.log(myExtension1, myExtension2, __filename);


