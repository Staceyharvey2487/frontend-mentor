const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const main = document.getElementById('main');
const error = document.getElementById('error');

let active = 'empty';

makeActive = (number) => {
    active = number;
    if (number == '1') {
        n1.classList.add('active');
        n2.className = 'number';
        n3.className = 'number';
        n4.className = 'number';
        n5.className = 'number';
    } else if (number == '2') {
        n1.className = 'number';
        n2.classList.add('active');
        n3.className = 'number';
        n4.className = 'number';
        n5.className = 'number';
    } else if (number == '3') {
        n1.className = 'number';
        n2.className = 'number';
        n3.classList.add('active');
        n4.className = 'number';
        n5.className = 'number';
    } else if (number == '4') {
        n1.className = 'number';
        n2.className = 'number';
        n3.className = 'number';
        n4.classList.add('active');
        n5.className = 'number';
    } else if (number == '5') {
        n1.className = 'number';
        n2.className = 'number';
        n3.className = 'number';
        n4.className = 'number';
        n5.classList.add('active');
    }
    error.style.opacity = 0;
}

thankyou = () => {
    if (active == 'empty') {
        error.style.opacity = 1;
    } else {
        main.innerHTML = `<img class="cheers" src="./images/illustration-thank-you.svg">
        <div class="youDid">
            <p class="orangeText">You selected ${active} out of 5</p>
        </div>
        <div class="thanks">
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don\’t hesitate to get in touch!</p>
        </div>`;
    }
}