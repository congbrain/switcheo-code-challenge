var sum_to_n_a = function(n) {
    let s = 0;
    for(let i = 1; i <= n; i ++) {
        s += i;
    }
    return s;
};

var sum_to_n_b = function(n) {
    // your code here
    return (1 + n) * n / 2;
};

var sum_to_n_c = function(n) {
    // your code here
    if(n === 0)
        return 0;
    return sum_to_n_c(n - 1) + n;
};

console.log(sum_to_n_b(5), sum_to_n_a(5), sum_to_n_c(5));