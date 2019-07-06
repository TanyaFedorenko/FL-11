
let ax = +prompt('напишите координату X для точки а', '');
let ay = +prompt('напишите координату Y для точки а', '');
let bx = +prompt('напишите координату X для точки b', '');
let by = +prompt('напишите координату Y для точки b', '');
let cx = +prompt('напишите координату X для точки c', '');
let cy = +prompt('напишите координату y для точки c', '');
if ((cx - ax) / (bx - ax) === (cy - ay) / (by - ay)) {
        if (cx - ax === bx - cx && cy - ay === by - cy) {
            console.log(true);
        } else {
            console.log(false);
        }
} else {
    console.log('C plase somewhere we don`t know');
}
