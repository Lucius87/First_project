let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let img = document.querySelector('#img')
let gallery = [
    'https://proprikol.ru/wp-content/uploads/2019/10/kroliki-krasivye-kartinki-27.jpg',
    'https://photocentra.ru/images/main74/742318_main.jpg',
    'https://coverfiles.alphacoders.com/629/62933.jpg'
]
let index = 0
window.onload = () => {
    img.src = gallery[index]
    btnChk()
    console.log(img)
}
function btnChk() {
    prev.disabled = index === 0
    next.disabled = index === gallery.length-1
}
prev.addEventListener('click',() => {
    img.src = gallery[--index]
    btnChk()
})
next.addEventListener('click',() => {
    img.src = gallery[++index]
    btnChk()
})
