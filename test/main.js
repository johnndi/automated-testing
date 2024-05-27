module.exports = {iterate};

function iterate(i){
    if (i % 3 ==0 && i % 5 == 0){
        return i + ": fizzbuzz";
    }
    else if (i % 5 == 0){
        return i + ": buzz";
    }
    else if (i % 3 == 0){
        return i + ": fizz";
    }
    else{
        return i;
    }
}
console.log(iterate(22))


