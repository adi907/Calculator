let screen = document.getElementById('screen');//the actual input screen whose value manipulated by (screen.value)
let buttons = document.querySelectorAll('.btn');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*';
            screen.value += buttonText;
        }else if(buttonText == '÷'){
            buttonText='/';
            screen.value+=buttonText;
        }else if (buttonText == 'AC') {
            screen.value = '';
        }else if (buttonText == '=') {
            screen.value = eval(screen.value);
        }else if(buttonText == 'DEL'){
            screen.value=screen.value.slice(0,(screen.value.length-1));
        }else {
            screen.value += buttonText;
        }
    })
}