let blink = () => {
    let plate = window.document.querySelector('#plate_1')
    let direction = 'minus'
    let opacity = 1
    setInterval(() => {
        if (direction === 'minus' && opacity > 0.4) {
            opacity = opacity - 0.01
        } else if (opacity < 0.4 && direction === 'minus') {
            direction = 'plus'
        } else if (direction === 'plus' && opacity < 1) {
            opacity = opacity + 0.01
        } else if (opacity >= 1 && direction === 'plus') {
            direction = 'minus'
        }
        console.log(opacity)
        plate.style.opacity = opacity
    }, 20)



}
blink()