function addOne(x){
    return x+1;
}
function pipe(a, foo) {
    foo(a);
    let count=0;
    while(count<arguments.length-1){
        count++;
        a=foo(a);
    } return a;
}

pipe(1,addOne);
pipe(1,addOne,addOne);