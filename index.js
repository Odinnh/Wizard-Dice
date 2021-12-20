let crosses = 0;
let checkmarks
let svgCross = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 486.5 486.5" >
<line class="st0" x1="25" y1="25" x2="461.5" y2="461.5"/>
<line class="st0" x1="461.5" y1="25" x2="25" y2="461.5"/>
</svg>
`

const states = {
    0: '',
    1: 'selected',
    2: 'collected',
    3: 'number',
}
const content = [
    //number Zero
    `<path d="M260,361.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49V151C40,90,89.25,40.49,150,40.49S260,90,260,151Z" />
	<line x1="150" y1="256" x2="150" y2="256" />`, 
    //number one
    `<line x1="260" y1="471.93" x2="40" y2="471.93" />
	<polyline points="55.5 134.32 150 40.07 150 40 150 472" />`,
    // number Two
    `<path d="M40,149.75C40,89.13,89.25,40,150,40S260,89.13,260,149.75v50.88c0,60.61-49.25,109.74-110,109.74S40,359.51,40,420.12V472H260V458" />`,
    //number Three
    `<path d="M40,40H260L150,200.49c60.75,0,110,49.48,110,110.51v50.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49" />`,
    //number Four
    `<path d="M229.86,472V40H230L104.58,160.14A209.51,209.51,0,0,0,40,311.42H260" />`,
    //number Five
    `<path d="M260,40H40V200l110,.49c60.75,0,110,49.48,110,110.51v50.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49" />`,
    //number Six
    `<path d="M40,310c0-61,49.25-110.51,110-110.51S260,249,260,310v51.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49V151C40,90,89.25,40.49,150,40.49S260,90,260,151" />`,
    //number Seven
    `<path d="M122,472,260,40H40l36,99" />`,

]
function setCheckmarks(x) {
    x = x > 12 ? 12 : x;
    checkmarks = document.querySelector('.orbs').querySelectorAll('circle')
    checkmarks.forEach(item => {
        item.classList.remove('checked')
    })
    for (let i = 0; i <= x - 1; i++) {
        checkmarks[i].classList.toggle('checked')
    }
}
function changeState(elem) {
    let curr = parseInt(elem.getAttribute('data-index'))
    curr += 1
    elem.setAttribute('data-index', curr % 4)
    elem.setAttribute('data-state', states[curr % 4])
    elem.innerHTML=''
    if (states[curr % 4] =='collected'){
        elem.innerHTML = svgCross;
    }
    if (states[curr % 4 ]=='number'){
            elem.innerHTML = `<svg id="number-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512">${content[parseInt(prompt())]}</svg>`
    }
    setCheckmarks(document.querySelectorAll('[data-state="collected"]').length)
}