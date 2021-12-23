
const states = {
    0: '',
    1: 'selected',
    2: 'collected',
    3: 'number',
}
const content = {
    //number Zero
    0: `<path d="M260,361.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49V151C40,90,89.25,40.49,150,40.49S260,90,260,151Z" />
	<line x1="150" y1="256" x2="150" y2="256" />`,
    //number one
    1: `<line x1="260" y1="471.93" x2="40" y2="471.93" />
	<polyline points="55.5 134.32 150 40.07 150 40 150 472" />`,
    // number Two
    2: `<path d="M40,149.75C40,89.13,89.25,40,150,40S260,89.13,260,149.75v50.88c0,60.61-49.25,109.74-110,109.74S40,359.51,40,420.12V472H260V458" />`,
    //number Three
    3: `<path d="M40,40H260L150,200.49c60.75,0,110,49.48,110,110.51v50.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49" />`,
    //number Four
    4: `<path d="M229.86,472V40H230L104.58,160.14A209.51,209.51,0,0,0,40,311.42H260" />`,
    //number Five
    5: `<path d="M260,40H40V200l110,.49c60.75,0,110,49.48,110,110.51v50.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49" />`,
    //number Six
    6: `<path d="M40,310c0-61,49.25-110.51,110-110.51S260,249,260,310v51.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49V151C40,90,89.25,40.49,150,40.49S260,90,260,151" />`,
    //number Seven
    7: `<path d="M122,472,260,40H40l36,99" />`,
    //Cross
    8: `<line class="st0" x1="25" y1="25" x2="461.5" y2="461.5"/>
    <line class="st0" x1="461.5" y1="25" x2="25" y2="461.5"/>`,
    //Score Chest
    9: `<path d="M448 32H128C57.31 32 0 89.31 0 160v288c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V160c0-70.69-57.31-128-128-128zM96 432H48V288h48v144zm0-192H48v-80c0-32.72 19.8-60.84 48-73.22V240zm336 192H144V288h80v48c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-48h80v144zM272 288v-32c0-8.84 7.16-16 16-16s16 7.16 16 16v32c0 8.84-7.16 16-16 16s-16-7.16-16-16zm160-48h-80v-32c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v32h-80V80h288v160zm96 192h-48V288h48v144zm0-192h-48V86.78c28.2 12.38 48 40.5 48 73.22v80z" class=""></path>`,
    //Reset icon
    10: `<path d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z" class=""></path>`,
}


let SVGCross = `<svg id="number-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.5 486.5">${content[8]}</svg>`;

let crosses = 0;
let checkmarks
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
function selectPrediction(elem) {
    document.querySelector('[data-state="selected"]')?.setAttribute('data-state', states[0])
    if (elem.getAttribute('data-state') == states[0]) {
        elem.setAttribute('data-state', states[1])
    }
    else if (elem.getAttribute('data-state') == states[1]) {
        elem.setAttribute('data-state', states[0])
    }
}

function setJoker(elem) {
    if (document.querySelector('[data-state="selected"]') !== null && elem.getAttribute('data-state') !== 'collected') {
        let curr = elem.getAttribute('data-index')
        curr = parseInt(curr) + 2
        let mod = 4
        elem.setAttribute('data-index', curr % mod)
        elem.setAttribute('data-state', states[curr % mod])

        elem.innerHTML = ''
        if (states[curr % mod] == 'collected') {
            elem.innerHTML = SVGCross
        }
        setCheckmarks(document.querySelectorAll('[data-state="collected"]').length)
        setPredictionToNumber(document.querySelector('[data-state="selected"]'), 0)
    }
}
function setNumber(value) {
    if (document.querySelector('[data-state="selected"]') !== null) {
        setPredictionToNumber(document.querySelector('[data-state="selected"]'), value)
        setCheckmarks(document.querySelectorAll('[data-state="collected"]').length)
    }
}

function setPredictionToNumber(elem, value = '') {
    let score = value
    let state = states[3]
    if (value == 8) {
        state = states[2]
        score = elem.getAttribute('data-multiplier')
    } else {
        score = score * -1
    }
    elem.setAttribute('data-index', value)
    elem.setAttribute('data-value', score)
    elem.setAttribute('data-state', state)
    elem.innerHTML = `<svg id="number-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${elem.getAttribute('data-index') == '8' ? '486.5 486.5' : '300 512'}">${content[value]}</svg>`
    setTotal()

}
function setTotal() {
    let total = 0
    document.querySelectorAll('[data-state="collected"]')?.length >= 9 ? total = 3 : total = 0;
    document.querySelectorAll('[data-value]').forEach(item => {
        total += parseInt(item.getAttribute('data-value'))
    })
    document.querySelector('aside').querySelector('.score').innerHTML = '<h2>' + total + '</h2?'
}
function setContent(elem) {
    let size = '300 512'
if (elem.getAttribute('data-index') == '8'){
    size = '486.5 486.5'
}else if (elem.getAttribute('data-index') == '9'){
    size = '576 512'
    elem.classList.add('chest')
}else if (elem.getAttribute('data-index') == '10'){
    size = '512 512'
    elem.classList.add('reset')

}

    elem.innerHTML = `<svg id="number-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size}">${content[elem.getAttribute('data-index')]}</svg>`
}
function start() {
    document.getElementsByClassName('controls')[0].querySelectorAll('button').forEach(item => setContent(item))
    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('dblclick', (e) => {
            e.preventDefault();
            item.setAttribute('data-index', 0)
            item.setAttribute('data-value', 0)
            item.setAttribute('data-state', '')
            item.innerHTML = ''
            setCheckmarks(document.querySelectorAll('[data-state="collected"]').length)
            setTotal()
        });
    })
}


function hideScore() {
    document.querySelector('aside').querySelector('.score').classList.toggle('-hidden');
}
function resetBoard() {
    document.querySelectorAll('.btn').forEach(item => {
            item.setAttribute('data-index', 0)
            item.setAttribute('data-value', 0)
            item.setAttribute('data-state', '')
            item.innerHTML = ''
            setCheckmarks(document.querySelectorAll('[data-state="collected"]').length)
            setTotal()
    })
}