let crosses = 0;
let checkmarks
const states = ['','0','1','2','3','4','5','x']
function setCheckmarks(x) {
    x = x > 12? 12: x;
    checkmarks = document.querySelector('.orbs').querySelectorAll('circle')
    checkmarks.forEach(item => {
        item.classList.remove('checked')
    })
    for (let i = 0; i <= x - 1; i++) {
        checkmarks[i].classList.toggle('checked')
    }
}
function changeState(elem) {
    let curr = parseInt(elem.getAttribute('data-state'))
    curr += 1
    elem.setAttribute('data-state', curr % 4)
}