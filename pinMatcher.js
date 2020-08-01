let generatedPinScreen = document.getElementById('generated-pin-screen');
let dialPadScreen = document.getElementById('dial-pad-screen');
let allButton = document.querySelectorAll('.button');
let notify = document.querySelector('.notify');


let dialPadScreenValue = "";

document.querySelector('.generate-btn')
    .addEventListener('click', function (e) {
        generatedPinScreen.value = Math.floor(1000 + Math.random() * 9000);
        document.querySelector('.pin-not-matched').style.display = 'none'
        document.querySelector('.pin-matched').style.display = 'none'
        dialPadScreen.value = "";
        dialPadScreenValue = "";
        document.getElementById('remaining').innerText=3;

    });
document.querySelector('.submit-btn')
    .addEventListener('click', function (e) {

        if (generatedPinScreen.value === dialPadScreenValue) {
            document.querySelector('.pin-matched').style.display = 'block';
            document.querySelector('.pin-not-matched').style.display = 'none';
            // alert('pin mathched')

        } else {
            let remainingString= document.getElementById('remaining').innerText;
            let remaining=parseInt(remainingString);

           if (remaining===1)
           {
               dialPadScreen.value = "";
               dialPadScreenValue = "";
               generatedPinScreen.value = Math.floor(1000 + Math.random() * 9000);
               document.querySelector('.pin-not-matched').style.display = 'none'
               document.querySelector('.pin-matched').style.display = 'none'
               document.getElementById('remaining').innerText=3;

           }
           else {
               document.getElementById('remaining').innerText=remaining-1;
               document.querySelector('.pin-not-matched').style.display = 'block'
               document.querySelector('.pin-matched').style.display = 'none'
           }


            // alert('try again')
        }
    })
for (let buttonElement of allButton) {

    buttonElement.addEventListener('click', function (e) {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText === 'C') {
            dialPadScreenValue = ""
            dialPadScreen.value = dialPadScreenValue;
            document.querySelector('.pin-not-matched').style.display = 'none'
            document.querySelector('.pin-matched').style.display = 'none'

        } else if (buttonText === '<') {
            dialPadScreenValue = dialPadScreenValue.slice(0, -1);
            dialPadScreen.value = dialPadScreenValue;
            document.querySelector('.pin-not-matched').style.display = 'none'
            document.querySelector('.pin-matched').style.display = 'none'

        } else {
            dialPadScreenValue += buttonText;
            dialPadScreen.value = dialPadScreenValue;
            document.querySelector('.pin-not-matched').style.display = 'none'
            document.querySelector('.pin-matched').style.display = 'none'
        }

    });
}
