const {iterate} = require ("./main.js");

describe("iterate", ()=>{
test(" if number is divisible by 3",()=>{ 
    expect(iterate(3)).toBe("3: fizz");
})
test(" if number is divisible by 5",()=>{ 
    expect(iterate(5)).toBe("5: buzz");
})
test(" if number is divisible by 3 and 5",()=>{ 
    expect(iterate(15)).toBe("15: fizzbuzz");
})
test(" if number is not divisible by 3 and 5",()=>{ 
    expect(iterate(22)).toBe(22);
})
})
