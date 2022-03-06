function primeFactors(suppliedNumber){
    let number = suppliedNumber;
    let candidate = 2;
    let primes = [];

    while(number > 1){
        for(number; number % candidate === 0; number /= candidate){
            primes.push(candidate);
        }
        candidate += 1;
    }

    return primes;
}

module.exports = primeFactors;