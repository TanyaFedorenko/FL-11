function getNumbers(str) {
    let strNum = +str.replace(/\D+/g, '');
    let sNum = strNum.toString();
    let arrNum = [];
    for (let i = 0; i < sNum.length; i++) {
        arrNum.push(+sNum[i]);
    }
    console.log(arrNum);
}
getNumbers('n1um3ber95');


function findTypes() {
    let types = {
        'object': 0,
        'number': 0,
        'string': 0,
        'Boolean': 0
    };
    for (let i = 0; i < arguments.length; i++) {
        let a = arguments[i];
        let t = typeof a;
        if (t ==='number') {
            types.number += 1;
        } else if (t === 'object') {
            types.object += 1;
        } else if (t === 'string') {
            types.string += 1;
        } else {
            types.Boolean += 1;
        }
    }
    for (let key in types){    
        if ({}.hasOwnProperty.call(types, key)){
       return key + ':' + types[key]
        }
    }
}

findTypes(null, 'hello');


function executeforEach(arr, foo) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        foo(arr[i]);
        res.push(arr[i]);
    }
    return res;
}



function mapArray(arr, foo) {
    executeforEach(arr, foo);

}
let num_2=2;
let num_5=5;
let num_8=8;
let num_3=3;


function filterArray(arr, foo) {
    executeforEach(arr, foo);

}
filterArray([num_2, num_5, num_8], function (el) {
    return el > num_3
})


function showFormattedDate(date) {
    let years = date.getFullYear();
    let days = date.getDate();
    let month = date.getMonth();
    let mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return 'Date: ' + mon[month] + ' ' + days + ' ' + years;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));




function canConvertToDate(date) {
    if (new Date(date) ==='Invalid Date') {
        return false;
    } else {
        return true;
    }
}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');




function daysBetween(dat1, dat2) {
    let date1 = dat1;
    let date2 = dat2;
    let hun=1000;
    let hun_3600=3600;
    let hun_24=24;
    let daysLag = Math.round(Math.abs(date2.getTime() - date1.getTime()) / (hun * hun_3600 * hun_24));
    return daysLag;

}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))


function getAmountOfAdultPeople(arr) {
    let a = new Date();
    let count = 0;
    let obj;
    let num_360=360;
    let num_18=18;
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        obj = arr[i];
        for (let key in obj) {
            if (key === ' birthday ') {
                let dateBirthday = new Date(obj[key]);
                let res = daysBetween(a, dateBirthday) / num_360;
                if (res >= num_18) {
                    count++
                }
            }
        }
    }
    return console.log(count);
}

getAmountOfAdultPeople([
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
  },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
  },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
  },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
  }
])




function keys(obj) {
    let a = [];
    
    for (let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)){
        a.push(key)
        }
    }
    
    return a;
}
keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});


function values(obj) {
    let a = [];
    for (let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)){
        a.push(obj[key]);
        }

    }
    return a;
}
values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});
