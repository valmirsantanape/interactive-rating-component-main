const main = document.querySelector('main')
const sectionSecundary = document.querySelector('.secundary')
const submit = document.querySelector('.btn-submit')
const numSelecionado = document.getElementById("numSelecionado")
const btSelect = document.querySelectorAll(".number")
const restart = document.querySelector(".btn-submit-again")

let contNum = 0

btSelect.forEach((numSelectd) => {
    numSelectd.addEventListener('click', () =>{
        numSelecionado.innerHTML = numSelectd.innerHTML
    })
})


submit.addEventListener('click', () => {
    sectionSecundary.classList.remove("esconder")
    main.classList.add('esconder')
})

restart.addEventListener('click', () => {
    location.reload()
})