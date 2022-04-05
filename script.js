const hourHand = document.querySelector('[data-hourHand]')
const minuteHand = document.querySelector('[data-minuteHand]')
const secondHand = document.querySelector('[data-secondHand]')

setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() /60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) /60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotating', rotationRatio * 360)
}

setClock()