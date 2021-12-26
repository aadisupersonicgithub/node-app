const fs = require('fs');
// fs = file system 

// non blocking model of nodejs , ie baki challega as ye tha hi nahi, but ye parallely chalega
// fs.readFile('rem2.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// });

// if need blocking
// const rem2write = fs.readFileSync('rem2.txt');
// console.log(rem2write.toString());

// to write into a file non blocking 
fs.writeFile('rem3.txt', "Content of rem3", () => {
    console.log("Written to rem3");
});
// blocking 
const rem4write = fs.writeFileSync('rem4.txt', "This is content of rem4");
console.log(rem4write)

console.log("Reading finished successfully!!");
