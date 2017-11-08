
/**
 * Generates a random string
 * Possible values = characterSet.length^length
 * 
 * According to the birthday paradox
 * With a character set of 62 characters
 * And a length of 12 characters
 * The probabylity of generating 2 identical ids is
 * 
 * @param {string} characterSet - Characters allowed in the random string generated
 * @param {number} length - Length of the random string generated
 * @returns {string} - A randomly generated string
 */
let generateId = function (characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', length = 12) {
    let id = '';
    for (let i = 0; i < length; i++) {
        id += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return id;
}

/**
 * Calculates probability of collision following the birthday paradox algorithm
 * 
 * The probability of generating 2 equal random strings can be determined by using the birthday paradox algorithm
 * 10^−15 is the uncorrectable bit error rate of a typical hard disk
 * MD5, a 128-bit hash function generating 32 hexadecimal characters [a-z0-9] (not case sensitive, so the character set is only 36 in length) stays within that range (10^-15) until about 820 billion documents
 * 
 * TODO: Find a way to make this work in javascript, there seem to be a hard limit to Math that makes it freak out.
 * 
 * @param {number} characterSetLength 
 * @param {number} idLength 
 * @returns {array}
 */
let collisionProbability = function (characterSetLength = 62, idLength = 12) {
    let possibleValues = Math.pow(characterSetLength, idLength);
    let numberGenerated = 1000000000;
    let a = (numberGenerated * (numberGenerated - 1)) / 2;
    let b = (possibleValues - 1) / possibleValues;
    return ((1 - Math.pow(b, a)) * 100).toFixed(20);
}

console.log(generateId());