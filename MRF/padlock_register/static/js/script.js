let minusPadlock = document.querySelector('.minus-box');
let plusPadlock = document.querySelector('.plus-box');
let passwordBox = document.querySelector('.password-box');
let passwordInput = document.querySelector('.password');
let form = document.querySelector('.form');
let padlockNumberInput = document.querySelector('#number');
let pin = document.querySelector('#pin');
let eachSelect = [...document.querySelectorAll('.form select')];
let saveBtn = document.querySelector('.save-btn');
let eachDel = [...document.querySelectorAll('.del')];

let plusActive = false;
let minusActive = false;

/*
passwordInput.addEventListener('input', (e) => {
    let passwordValue = e.target.value;
    if (['11', '22'].includes(passwordValue)) {
        eachDel.map(bin => {
            bin.style.pointerEvents = 'auto';
        })
    } else {
        eachDel.map(bin => {
            bin.style.pointerEvents = 'none';
        })

    }
});
*/


function handleClick_Plus() {
    if (plusActive === false) {

        passwordBox.style.visibility = 'visible';
        passwordBox.style.pointerEvents = 'auto';
        passwordBox.style.opacity = '1';

        form.style.height = '21rem';

        padlockNumberInput.style.opacity = '1';
        padlockNumberInput.style.pointerEvents = 'auto';

        pin.style.opacity = '1';
        pin.style.pointerEvents = 'auto';

        eachSelect.map(select => {
            select.style.opacity = '1';
            select.style.pointerEvents = 'auto';
        });

        window.setTimeout(() => {
            saveBtn.style.opacity = '1';
            saveBtn.style.pointerEvents = 'auto';
        }, 300);

        eachDel.map(del => {
            del.style.left = '-2.5rem';
            del.style.visibility = 'hidden';
        });

        plusActive = true;
        minusActive = false;
    } else {

        passwordBox.style.visibility = 'hidden';
        passwordBox.style.opacity = '0';
        passwordBox.style.pointerEvents = 'none';

        window.setTimeout(() => {
            form.style.height = '0';
        }, 150);

        padlockNumberInput.style.opacity = '0';
        padlockNumberInput.style.pointerEvents = 'none';

        pin.style.opacity = '0';
        pin.style.pointerEvents = 'none';

        eachSelect.map(select => {
            select.style.opacity = '0';
            select.style.pointerEvents = 'none';
        });

        saveBtn.style.opacity = '0';
        saveBtn.style.pointerEvents = 'none';

        eachDel.map(del => {
            del.style.left = '-2.5rem';
            del.style.visibility = 'hidden';
        });

        plusActive = false;
        minusActive = false;
    }
}

function handleClick_Minus() {
    if (minusActive === false) {

        passwordBox.style.opacity = '1';
        passwordBox.style.visibility = 'visible';
        passwordBox.style.pointerEvents = 'auto';

        window.setTimeout(() => {
            form.style.height = '0';
        }, 150);

        padlockNumberInput.style.opacity = '0';
        padlockNumberInput.style.pointerEvents = 'none';

        pin.style.opacity = '0';
        pin.style.pointerEvents = 'none';

        eachSelect.map(select => {
            select.style.opacity = '0';
            select.style.pointerEvents = 'none';
        });

        saveBtn.style.opacity = '0';
        saveBtn.style.pointerEvents = 'none';

        eachDel.map(del => {
            del.style.visibility = 'visible';
            del.style.left = '0';
        });

        minusActive = true;
        plusActive = false;
    } else {

        passwordBox.style.opacity = '0';
        passwordBox.style.visibility = 'hidden';
        passwordBox.style.pointerEvents = 'none';

        window.setTimeout(() => {
            form.style.height = '0';
        }, 150);

        padlockNumberInput.style.opacity = '0';
        padlockNumberInput.style.pointerEvents = 'none';

        pin.style.opacity = '0';
        pin.style.pointerEvents = 'none';

        passwordBox.style.opacity = '0';

        eachSelect.map(select => {
            select.style.opacity = '0';
            select.style.pointerEvents = 'none';
        });

        saveBtn.style.opacity = '0';
        saveBtn.style.pointerEvents = 'none';

        eachDel.map(del => {
            del.style.left = '-2.5rem';
            del.style.visibility = 'hidden';
        });

        minusActive = false;
        plusActive = false;
    }
}

minusPadlock.addEventListener('click', handleClick_Minus);
plusPadlock.addEventListener('click', handleClick_Plus);
