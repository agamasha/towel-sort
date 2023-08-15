
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let empty = [];
    if (arguments.length === 0) {
        return empty;
    }
    for (let i = 1; i < matrix.length; i = i + 2) {
        matrix[i].reverse();
    }
    console.log(matrix);
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push(...matrix[i]);
    }
    return result;
}
