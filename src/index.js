module.exports = function reverse (n) {
    let y = 0;
    for(; n ; n = Math.floor(n / 10)){
       y = y * 10 + n % 10;
    }
    return(y);
}

  

