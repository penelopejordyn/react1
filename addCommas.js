function addCommas(number) {
    return number.toLocaleString();
}

console.log(addCommas(1234))
console.log(addCommas(1000000))
console.log(addCommas(6))
console.log(addCommas(-10))
console.log(addCommas(-5678))
console.log(addCommas(12345.678))
console.log(addCommas(-3141592.65))

module.exports = addCommas;