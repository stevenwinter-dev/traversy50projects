const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    const triggerTop = 75

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const boxBot = box.getBoundingClientRect().bottom

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
            if(boxBot < triggerTop) {
                box.classList.remove('show')
            }
        }
        if(boxBot < triggerTop) {
            box.classList.remove('show')
        }
        
    })
}