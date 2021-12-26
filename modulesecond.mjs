// Common JS module to be imported 
// function simple() {
//     console.log("Simple is complex");
// }
// module.exports = simple;

// Common ES6 module to be imported
export function simple() {
    console.log("Simple is complex");
    return 11;
}
export function simple3() {
    console.log("Simple3 is complex");
    return 33;
}
// kuch b garbage import then this will go 
export default function simple2() {
    console.log("Simple2 is complex");
    return 22;
}

