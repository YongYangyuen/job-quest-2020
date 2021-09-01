function fizzBuzz(number) {
    switch (number % 3) {
        case 0:
            switch (number % 5) {
                case 0:
                    return 'FizzBuzz';
                default:
                    return 'Fizz';
            }
        default:
            switch (number % 5) {
                case 0:
                    return 'Buzz';
                default:
                    return 'Not Fizz, not Buzz, and not FizzBuzz';
            }
    }
}

console.log(fizzBuzz(45));