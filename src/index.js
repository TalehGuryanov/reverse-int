module.exports = function reverse (n) {

    let str = '' + (Math.sqrt(n**2))
    let strRev = str.split('').reverse().join('')
    return +strRev
}
