function getMin() {
console.log(arguments[0])
for (let i = 0; i < arguments.length; i++) {
    if(arguments[i] < arguments[0]){
        arguments[0] = arguments[i];
    }

}return arguments[0];
}
getMin(4,5,6); 