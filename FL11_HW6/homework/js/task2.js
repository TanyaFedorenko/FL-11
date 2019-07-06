let a = +prompt('Triangle sides length A', '');
let b = +prompt('Triangle sides length B', '');
let c = +prompt('Triangle sides length C', '');

if (a+b>c & a+c>b & c+b>a) {
        if (a===b===c) {
            console.log('Equivalent triagle')
        } else if (a===b & b===c & c===a) {
            console.log('Isosceles triagle')
        }else { 
             console.log('Normal triangle')
        }
} else {
    console.log('Triangle doesn`t exist');
}
