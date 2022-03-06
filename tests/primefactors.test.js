const primeFactors = require('../src/primeFactors');

test('prime factor of 1 is none', ()=>{
    expect(primeFactors(1)).toStrictEqual([]);
})