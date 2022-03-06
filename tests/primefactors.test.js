const primeFactors = require('../src/primeFactors');

test('prime factor of 1 is none', ()=>{
    expect(primeFactors(1)).toStrictEqual([]);
})

test('prime factors of 2 is 2', ()=> {
    expect(primeFactors(2)).toStrictEqual([2]);
})

test('prime factors of 3 is 3', ()=> {
    expect(primeFactors(3)).toStrictEqual([3]);
})

test('prime factors of 4 is 2, 2', ()=> {
    expect(primeFactors(4)).toStrictEqual([2,2]);
})

test('prime factors of 6 is 2, 3', ()=> {
    expect(primeFactors(6)).toStrictEqual([2,3]);
})

test('prime factors of 8 is 2,2,2', ()=> {
    expect(primeFactors(8)).toStrictEqual([2,2,2]);
})

test('prime factors of 9 is 3,3', ()=> {
    expect(primeFactors(9)).toStrictEqual([3,3]);
})