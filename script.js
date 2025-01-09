const name = document.getElementById('name');
const age = document.getElementById('age');
const ball = document.getElementById('ball');
const results = document.getElementById('results');



let nameprompt = prompt('Ismingizni kirirting');
let ageprompt = prompt('Yoshingizni kiriting');
let ballprompt = prompt('Balingizni kiriting');

name.textContent = nameprompt;
age.textContent = ageprompt;
ball.textContent = ballprompt;


if(ballprompt < 65){
    results.textContent ='вы не прошли'
} else{
    results.textContent ='поздравляю вы прошли'
}
