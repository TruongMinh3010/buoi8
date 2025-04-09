let input = prompt("Nhập vào dãy số cách nhau bởi dấu phẩy (,):");
let numbers = input.split(",").map(Number);

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

document.writeln("Dãy số: " + numbers.join(", ") + "<br>");
document.writeln("Số lớn nhất: " + findMax(numbers) + "<br>");
document.writeln("Số nhỏ nhất: " + findMin(numbers) + "<br>");
