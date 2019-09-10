
// Få åtkomst till element:
let subans = document.getElementById('sub-ans');
let textbox = document.getElementById('text-box');

/* If sats som kollar om det är en siffra vi får som input, 
och sedan kolla och skriv ut om besökaren är för ung, för gammal eller precis rätt!
*/
subans.addEventListener('click', function() {
    var inpdata = Number(textbox.value);

    if (inpdata <= 18) {
        alert('You are too young.');
    }
    else if (inpdata >= 19 && inpdata <= 65) {
        alert('You are between 19-65 years old.');
    }
    else if (inpdata > 65) {
        alert('You are too old.');
    }
    else {
        alert('Invalid input. Please use a number.');
    }
});
