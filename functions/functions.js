function sum (a,b){
    var c = a + b;
    return c;
}
// ILI
function sum (a,b){
    return a + b;
}

var result=sum(3,4)
console.log(result)

function sumUpdate() {
    var args=arguments;
    var result=0;
    for (var i=0; i<args.length; i++) {
        var value = args[i+''];
        result += value;
    }

    return result;
}

var sumA=sumUpdate(6,-5,3,4,5);
console.log(sumA)

