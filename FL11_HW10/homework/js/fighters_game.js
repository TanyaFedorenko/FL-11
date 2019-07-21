let num_100=100;
let num_2=2;
class Fighter {
    constructor(name, damage, hp, agility) {
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.agility = agility;
        this.atack = function () {
            let probabilityAttack = Math.floor(Math.random() * (num_100 - 1)) + 1;
                       if (probabilityAttack > agility) {
                // console.log(true)
                return true;
            } else {
                console.log(false)
                return false;
            }
        };
        this.logCombatHistory = function () {
            console.log('Name: John, Wins: 0, Losses: 0')
        };
        this.heal = function () {
            console.log('Name: John, Wins: 0, Losses: 0')
        };
        this.addWin = function () {
            let win = 0;
            win++;
            return win;
        };
        this.addloss = function () {
            let loss = 0;
            loss++;
            return loss;
        }
    }
}

function battle1(a, b) {
    let hp = b.hp;
    let dam = a.damage;
    b.hp = hp - dam;
}
function attack(obj, obj1) {

    let count = 1;
    let fit = obj;
    let fit2 = obj1;
    while (count <= num_2) {
        if (count === 1) {
            if (obj1.hp > obj.damage && obj1.atack() === true) {
                battle1(fit, fit2)
                console.log(obj.name + ' ' + 'make' + ' ' + obj.damage + ' ' + 'damage to' + ' ' + obj1.name)
                count++;
            } else if (obj1.hp < obj.damage) {
                obj.addWin();
                console.log(fit.name + ' ' + ' game over');
                count += num_2;
            } else {
                obj.addloss();
                count++
                console.log(obj1.name + ' ' + 'attack missed');
            }

        } else {
            if (obj.hp > obj1.damage && obj.atack() === true) {
                battle1(fit2, fit)
                console.log(obj1.name + ' ' + 'make' + ' ' + obj1.damage + ' ' + 'damage to' + ' ' + obj.name)
                count--;

            } else if (obj.hp < obj1.damage) {
                obj1.addWin();
                console.log(fit.name + ' ' + ' game over');
                count++;
            } else {
                obj1.addloss();
                count--
                console.log(obj.name + ' ' + 'attack missed');
            }
        }
    }obj.addWin();
}
