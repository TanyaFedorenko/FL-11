
let magicNum_8=8;
let magicNum_3=3;
let magicNum_12=12;
let prize_25=25;
let prize_50=50;
let prize_100=100;
let prize_200=200;
let inst='Choose a roulette pocket number from 0 to'
let count_2=2;
let num = Math.floor(Math.random() * magicNum_8) + 0;
let prize = 0;
if (confirm('Do you want to play a game ?')) {
    let count = 0;

    while (count < magicNum_3) {
        count++;
let UserNum=+prompt(inst+'8\n Attempts left:'+count+'\n Total prize:'+prize+'\n Possible prize on current attemrt 100$')
        if (num === UserNum) {
            if (count === 1) {
                alert('Congratulation, you won! Your prize is: 100$. Do you want to continue?');
                prize += prize_100;   
                if (confirm('Will you want to play again?')) {
                    let num = Math.floor(Math.random() * magicNum_12) + 0;
                    let count = 0;
                    while (count < magicNum_3 && prize > 0) {
                        count++;
let UserNum=+prompt(inst+'12\n Attempts left:'+count+'\nTotal prize:'+prize+'\nPossible prize on current attemrt 200$');

                        if (num === UserNum) {
                            if (count === 1) {
                                prize += prize_200;
                                alert('Congratulation, you won! Your prize is:'+ prize +'$. Do you want to continue?');
                                break;
                            } else if (count === count_2) {
                                prize +=prize_100;
                                alert('Congratulation, you won! Your prize is:' +prize +'$. Do you want to continue?');
                                break;
                            } else if (count === magicNum_3) {
                                prize += prize_50;
                                alert('Congratulation, you won! Your prize is:'+prize +'$. Do you want to continue?');
                                break;
                            } else {
                                alert('Thank you for your participation. Your prize is:'+prize + '$');
                                location.reload();
                            }
                        }
                    }
                } else {
                    alert('Thank you for your participation. Your prize is:' + prize + '$');
                    location.reload();

                }
                break;
            } else if (count === count_2) {
                prize += prize_50;
                alert('Congratulation, you won! Your prize is:' + prize + '$ Do you want to continue?');
                alert('Thank you for your participation. Your prize is:' + prize + '$')
                if (confirm('Will you want to play again?')) {
                    let num = Math.floor(Math.random() * magicNum_12) + 0;
                    let count = 0;
                    while (count < magicNum_3 && prize > 0) {
                        count++;
let UserNum=+prompt(inst+'12\n Attempts left:'+count+'\n Total prize:'+prize+'\npossible prize on current attemrt 200$')
                        if (num === UserNum) {
                            if (count === 1) {
                                prize += prize_200;
                            alert('Congratulation, you won!   Your prize is:' + prize+ '$. Do you want to continue?');
                                break;
                            } else if (count === count_2) {
                                prize +=prize_100;
                                alert('Congratulation, you won! Your prize is:'+prize+'$. Do you want to continue?');
                                break;
                            } else if (count === magicNum_3) {
                                prize += prize_50;
                                alert('Congratulation, you won! Your prize is:'+prize +'$. Do you want to continue?');
                                break;
                            } else {
 alert('Congratulation, you won! Your prize is:'+prize+'$/n Do you want to continue? ЕСЛИ ОТМЕНА');
                                location.reload();
                            }
                        }
                    }
                } else { 
alert('Congratulation, you won!   Your prize is:' + prize + '$ /n Do you want to continue?');
                    location.reload();
                }
                break;
            } else {
                prize +=prize_25;
                alert('Congratulation, you won!   Your prize is:' + prize + '$. Do you want to continue?');
              
                alert('Thank you for your participation. Your prize is:' +prize+ '$');

                if (confirm('Will you want to play again?')) {
                    let num = Math.floor(Math.random() * magicNum_12) + 0;
                    let count = 0;
                    while (count < magicNum_3 && prize > 0) {
                        count++;
let UserNum=+prompt(inst+'12\n Attempts left:'+count+
                    '\nTotal prize:'+prize+'\nPossible prize on current attemrt 200$');
                        if (num === UserNum) {
                            if (count === 1) {
                                prize += prize_200;
                                alert('Congratulation, you won! Your prize is:'+prize+'$ Do you want to continue?');

                                break;
                            } else if (count ===count_2) {
                                prize +=prize_100;
                                alert('Congratulation, you won!Your prize is:'+prize+'$ Do you want to continue?');
                                break;
                            } else if (count === magicNum_3) {
                                prize += prize_50;
                                alert('Congratulation, you won! Your prize is:' +prize+ '$ Do you want to continue?');
                                break;
                            } else {
 alert('Congratulation, you won! Your prize is:'+prize + '$ /n Do you want to continue?');
                                location.reload();
                            }
                        }
                    }
                } else {
                    alert('Thank you for your participation. Your prize is:' + prize + '$');
                    location.reload();
                }

                break;
            }

      }
    }
} else {
    alert('You did not become a billionaire, but can.')
}
