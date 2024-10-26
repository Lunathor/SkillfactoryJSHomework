let start = +prompt("Введите стартовое число")
let stop = +prompt("Введите конечное число")
function logNum(start, stop){
    let current = start;
    let IntervalId = setInterval(function(){
        console.log(current);
        if (current === stop){
            clearInterval(IntervalId);
        }
        current++
    }, 1000);
}
logNum(start, stop);
