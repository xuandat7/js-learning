let sum = (a, b, callback) =>{
    let tong = a + b;
    callback(tong);
    return a+b;

}
let printTong = (msg) => {
    console.log('10 + 10 = ', msg);
}
sum(10, 10, printTong);