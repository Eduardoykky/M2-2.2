let Imagem = document.querySelectorAll('img[src="./imgs/circle.png"]')

for (let index = 0; index < Imagem.length; index++) {
    Imagem[index].addEventListener('click', (event) => {
        event.target.src = "./imgs/check-mark.png";
    })
}

let Imagem2 = document.querySelectorAll('img[src="./imgs/star.png"]')

for (let index = 0; index < Imagem.length; index++) {
    Imagem2[index].addEventListener('click', (event) => {
        event.target.src = "./imgs/colorStar.png";
    })
}

let change = document.querySelectorAll('input[type="radio"]')
let change2 = document.querySelectorAll('input[type="checkbox"]')

function handleChange(event) {
    console.log("Recomendação:", event.target.value);
}
function handleChange2(event) {
    console.log("Classificação:", event.target.value);
}

for (let index = 0; index < change.length; index++) {
    change[index].addEventListener("change", handleChange2)
}
for (let index = 0; index < change2.length; index++) {
    change2[index].addEventListener("change", handleChange2)
}