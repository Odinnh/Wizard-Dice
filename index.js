const _role = 'data-role'
const _state = 'data-state'
const _index = 'data-index'
const _link = 'data-link'
const content = {
    //number Zero
    0: `<svg id="number-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><path d="M260,361.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49V151C40,90,89.25,40.49,150,40.49S260,90,260,151Z" />
	<line x1="150" y1="256" x2="150" y2="256" /></svg>`,
    //number one
    1: `<svg id="number-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><line x1="260" y1="471.93" x2="40" y2="471.93" />
	<polyline points="55.5 134.32 150 40.07 150 40 150 472" /></svg>`,
    // number Two
    2: `<svg id="number-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><path d="M40,149.75C40,89.13,89.25,40,150,40S260,89.13,260,149.75v50.88c0,60.61-49.25,109.74-110,109.74S40,359.51,40,420.12V472H260V458" /></svg>`,
    //number Three
    3: `<svg id="number-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><path d="M40,40H260L150,200.49c60.75,0,110,49.48,110,110.51v50.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49" /></svg>`,
    //number Four
    4: `<svg id="number-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><path d="M229.86,472V40H230L104.58,160.14A209.51,209.51,0,0,0,40,311.42H260" /></svg>`,
    //number Five
    5: `<svg id="number-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><path d="M260,40H40V200l110,.49c60.75,0,110,49.48,110,110.51v50.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49" /></svg>`,
    //number Six
    6: `<svg id="number-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><path d="M40,310c0-61,49.25-110.51,110-110.51S260,249,260,310v51.49c0,61-49.25,110.51-110,110.51S40,422.52,40,361.49V151C40,90,89.25,40.49,150,40.49S260,90,260,151" /></svg>`,
    //number Seven
    7: `<svg id="number-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 512"><path d="M122,472,260,40H40l36,99" />`,

    //Cross
    8: `<svg id="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.5 486.5"><line class="st0" x1="25" y1="25" x2="461.5" y2="461.5"/>
    <line class="st0" x1="461.5" y1="25" x2="25" y2="461.5"/></svg>`,
    //Score Chest
    9: `<svg id="score" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M448 32H128C57.31 32 0 89.31 0 160v288c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V160c0-70.69-57.31-128-128-128zM96 432H48V288h48v144zm0-192H48v-80c0-32.72 19.8-60.84 48-73.22V240zm336 192H144V288h80v48c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-48h80v144zM272 288v-32c0-8.84 7.16-16 16-16s16 7.16 16 16v32c0 8.84-7.16 16-16 16s-16-7.16-16-16zm160-48h-80v-32c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v32h-80V80h288v160zm96 192h-48V288h48v144zm0-192h-48V86.78c28.2 12.38 48 40.5 48 73.22v80z" class=""></path></svg>`,
    //Reset icon
    10: `<svg id="reset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z" class=""></path></svg>`,
}

function start() {
    document.querySelectorAll('BUTTON').forEach(item => {

        item.addEventListener('dblclick', (e) => {
            e.preventDefault();
            
            if (item.getAttribute(_role) == 'control') { return }

            if (item.getAttribute(_role) == 'joker') {
                document.querySelectorAll(`[data-link="${item.getAttribute(_link)}"]`)[1]?.setAttribute(_state, '')
                document.querySelectorAll(`[data-link="${item.getAttribute(_link)}"]`)[1]?.setAttribute(_index, '')
                document.querySelectorAll(`[data-link="${item.getAttribute(_link)}"]`)[1]?.setAttribute(_link, '')
            }
            if (document.querySelectorAll(`[data-link="${item.getAttribute(_link)}"]`).length == 2) {
                document.querySelectorAll(`[data-link="${item.getAttribute(_link)}"]`)[0]?.setAttribute(_state, '')
                document.querySelectorAll(`[data-link="${item.getAttribute(_link)}"]`)[0]?.setAttribute(_index, '')
                item.setAttribute(_link, '')
            }

            item.setAttribute(_state, '')
            item.setAttribute(_index, '')

            renderBoard()
        });
    })
    renderBoard()
}

function renderBoard() {
    let total = 0
    document.querySelectorAll('button').forEach(item => {
        let index = item.getAttribute('data-index')
        item.innerHTML = index == '' ? '' : content[index]
    })

    document.querySelectorAll('.checked').forEach(item => {
        item.classList.remove('checked')
    })

    document.querySelectorAll('[data-state="collected"]').forEach((item, index) => {
        if (index >= 8) {
            total = 3
        }
        document.querySelector('.orbs').querySelectorAll('circle')[index]?.classList.add('checked')
    })

    document.querySelectorAll('[data-role="number"]').forEach(item => {
        let operand = -item.getAttribute(_index)
        if (operand == -8) { operand = parseInt(item.getAttribute('data-multiplier')) }

        total = total + operand

    })

    document.querySelector('.score').innerHTML = `<h2>${total}</h2>`
}

function changeState(item) {
    let state = item.getAttribute(_state)
    let index = item.getAttribute(_index)
    let role = item.getAttribute(_role)
    let link = item.getAttribute(_link)
    let selected = document.querySelector('[data-state="selected"]')

    //select tile
    if (state == '' && role == 'number') {
        selected?.setAttribute(_state, '')
        item.setAttribute(_state, 'selected')
    }
    if (document.querySelectorAll('[data-state="selected"]').length != 0 && role != 'number') {
        //set selected tile to 0 and mark joker
        state = 'marked'
        if (role == 'joker' && state != 'collected') {
            index = 0
            console.log(link)
            selected.setAttribute(_link, link)
            item.setAttribute(_index, 8)
            item.setAttribute(_state, 'collected')
            selected.setAttribute(_state, state)
            selected.setAttribute(_index, index)
        }

        //set selected tile to controller value
        if (role == 'control' && index <= 8) {
            if (index == 8) {
                state = 'collected'
            }
            if (index != 9) {
                selected.setAttribute(_state, state)
                selected.setAttribute(_index, index)
            }
        }
    }


    //show total score
    if (role == 'control' && index == 9) {
        document.querySelector('.score').classList.toggle('-hidden')
    }

    //reset board
    if (role == 'control' && index == 10) {
        document.querySelectorAll('button').forEach(element => {
            if (element.getAttribute(_role) != 'control') {
                element.setAttribute(_state, '')
                element.setAttribute(_index, '')

                if (element.getAttribute(_role) != 'joker') {
                    element.setAttribute(_link, '')
                }
            }
        })
    }
    renderBoard()
}
