function primeFactors(suppliedNumber){
    let number = suppliedNumber;
    let candidate = 2;
    let primes = [];

    while(number > 1){
        while(number % candidate === 0){
            primes.push(candidate);
            number /= candidate;
        }
        candidate += 1;
    }

    return primes;
}

module.exports = primeFactors;