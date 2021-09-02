var array = []; // Test your input here

function secondMax(array) {
    if (array.length == 0) throw 'Error!';

    var max = array[0];
    var _2ndMax = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            _2ndMax = max;
            max = array[i];
        }
    }

    return _2ndMax;
}

try {
    console.log(secondMax(array));
} catch (e) {
    console.error(e);
}