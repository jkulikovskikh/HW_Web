function clickButton1() {
    let element = document.getElementById('el1');
    element.classList.toggle('active1');
}

function clickButton2() {
    let element = document.getElementById('el2');
    element.classList.toggle('active2');
}

let btn = document.getElementsByClassName('btn')
console.log(btn)
btn[0].addEventListener('click', clickButton1)
btn[1].addEventListener('click', clickButton2)