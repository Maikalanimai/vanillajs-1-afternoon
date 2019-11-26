let id = document.getElementById('idInput')
let color = document.getElementById('colorInput')
console.log(id, color)
function setCard(){
    let card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value
}
function clearCard(){
    location.reload()
}