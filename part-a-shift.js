var array = [1, 2, 3, 4, 5];

function shift(array, direction, number) {
    if (direction == 'right') {
        for (var i = 0; i < number; i++) {
            array.unshift(array.pop());
        }
    } else if (direction == 'left') {
        for (var i = 0; i < number; i++) {
            array.push(array.shift());
        }
    }
}

shift(array, 'right', 3);
console.log(array);