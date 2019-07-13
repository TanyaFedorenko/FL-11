function reverseNumber(num){
    let res =0;
    while(num){
        res=res*10+num%10;
        num=Math.floor(num/10)
    }return res;
}
console.log(reverseNumber(173));

