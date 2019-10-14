/*let sum = 0;

for(let i = 2; i < process.argv.length; i++){
    let nums = parseInt(process.argv[i]);
    sum += nums;
}

console.log(sum);
*/

let sum = 0;

for(let i = 2; i < process.argv.length; i++){
    sum += Number(process.argv[i]);
}

console.log(sum);