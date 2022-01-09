const htmlZina = document.querySelector('.html__zina')
const cssZina = document.querySelector('.css__zina')
const jsZina = document.querySelector('.js__zina')
const reactZina = document.querySelector('.react__zina')
const devleoperZina = document.querySelector('.developer__zina')
const startBtn = document.querySelector('.start-btn')
const darking = document.querySelector('.darking')
const standingMan = document.querySelector('.standing-man')
const finishingMan = document.querySelector('.finishing-man')



startBtn.addEventListener('click', ()=> {
    startBtn.classList.add('hidden')
    darking.classList.remove('hidden')
    htmlZina.classList.add('z-index')
    standingMan.classList.remove('hidden')
    standingMan.style.transform = 'translate(0px, 0px)'
    finishingMan.style.opacity = '0'

    htmlZina.addEventListener('click', function() {
        htmlZina.classList.remove('z-index')
        cssZina.classList.add('z-index')
        standingMan.style.transform = 'translate(-100px, -72px)'
    })
    cssZina.addEventListener('click', function() {
        cssZina.classList.remove('z-index')
        jsZina.classList.add('z-index')
        standingMan.style.transform = 'translate(-200px, -144px)'
    })
    jsZina.addEventListener('click', function() {
        jsZina.classList.remove('z-index')
        reactZina.classList.add('z-index')
        standingMan.style.transform = 'translate(-300px, -216px)'
    })
    reactZina.addEventListener('click', function() {
        reactZina.classList.remove('z-index')
        devleoperZina.classList.add('z-index')
        standingMan.style.transform = 'translate(-400px, -288px)'
    })
    devleoperZina.addEventListener('click', function() {
        devleoperZina.classList.remove('z-index')
        startBtn.classList.remove('hidden')
        darking.classList.add('hidden')
        standingMan.classList.add('hidden')
        finishingMan.style.opacity = '1'
    })
})


