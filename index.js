function getLen(books) {
    return books.map(book => book.length)
}
const books = ["Biology", "Phy", "History", "Math"];
const booklen = getLen(books);
console.log(booklen)



function evneNums(nums) {
    return nums.filter(num => num % 2 === 0);
}
const nums = [1, 2, 3, 4, 5, 6,];
const even = evneNums(nums)
console.log(even);



function topStudNames(students) {
    return students
        .filter(student => student.score > 75)
        .map(student => student.name);
}
const students = [{ name: "Hana", score: 90 }, { name: "Yordi", score: 70 }];
const topStud = topStudNames(students);
console.log(topStud);


function squareNums(numbers) {
    return numbers.map(numbers => numbers * numbers);
}
const numbers = [1, 4, 5, 9, 10];
const numsqr = squareNums(numbers);
console.log(numsqr);


function getStringUpper(combinedArray) {
    return combinedArray
        .filter(item => typeof item === 'string')
        .map(stringItem => stringItem.toUpperCase());
}
const combinedArray = [1, "fevi", 5, 6, "joy", "eyu"];
const getUpper = getStringUpper(combinedArray);
console.log(getUpper);


