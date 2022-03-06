function primeFactors(suppliedNumber){
    let number = suppliedNumber;
    let candidate = 2;
    let primes = [];

    for(candidate; number > 1; candidate += 1){
        for(number; number % candidate === 0; number /= candidate){
            primes.push(candidate);
        }
    }

    return primes;
}

module.exports = primeFactors;