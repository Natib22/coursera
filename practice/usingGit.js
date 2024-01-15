var divide = function(dividend, divisor) {
    let counter = 0;
    let Tdividend = Math.abs(dividend);
    let Tdivisor = Math.abs(divisor);

    if (divisor == 1) {
        counter = dividend;
    } else if (divisor == -1) {
        counter = -dividend;
    } else {
        for (let i = 30; i >= 0; i--) {
            if (Tdivisor << i <= Tdividend) {
                Tdividend -= Tdivisor << i;
             //   console.log(Tdividend)
                counter += 1 << i;
                console.log(counter)
            }
        }

      //  (divisor < 0 && dividend >= 0) || (divisor >= 0 && dividend < 0) ? (counter = -counter) : counter;
    }

    if (counter > (2**31) - 1) {
        return (2**31) - 1;
    } else if (counter < (-2)**31) {
        return (-2)**31;
    } else {
        return counter;
    }
};
console.log(divide(10,3))