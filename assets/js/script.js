const passwordInput = document.querySelector('#password');
const requirementsList = [...document.querySelectorAll('ul>.item')];

passwordInput.addEventListener('keyup', e => {
    passwordEval(e.key)
});

const passwordEval = keyPressed => {
    if (/[a-z]/g.test(keyPressed)) {
        requirementsList[0].classList.add('complete')
    } else if (/[A-Z]/g.test(keyPressed)) {
        requirementsList[1].classList.add('complete')
    }else if (/[0-9]/g.test(keyPressed)) {
        requirementsList[2].classList.add('complete')
    } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(keyPressed)) {
        requirementsList[3].classList.add('complete')
    }   
}