let nameEmail = prompt('Your email?', '');
let User1 = 'user@gmail.com';
let User2 = 'admin@gmail.com';
let User = {
    User1: 'UserPass',
    User2: 'AdminPass'
};
let sixLenght=6;
let fiveLenght=5;
if (nameEmail === null) {
    alert('Canceled');
} else if (nameEmail.length < sixLenght) {
    alert('I dont know any emails having name lenght less thas 6 symbol');
} else if (nameEmail === User1 || nameEmail === User2) {
    let password = prompt('Your password?', '');
    if (password === null) {
        alert('Canceled');
    } else if (password === User.User1 || password === User.User2) {
        if (confirm('Do you want to change your password? ')) {
            let password2 = prompt('Your old password?', '');
            if (password2 === User.User1 || password2 === User.User2) {
                let NewPassword = prompt('Your new password', '');
                if (NewPassword.length < fiveLenght) {
                    alert('It’s too short password. Sorry');
                } else {
                    let password3 = prompt('Enter new password again');
                    if (NewPassword === password3) {
                        alert('You have successfully changed your password.” ');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password')
            }
        } else {
            alert('You have failed the change');
        }

    } else {
        alert('Wrong password');
    }
} else {
    alert('I dont know you');
}
