const main = document.querySelector('main')
const submit = document.querySelector('.btn-submit')
const numSelecionado = document.getElementById("numSelecionado")
const btSelect = document.querySelectorAll(".number")

let contNum = 0

btSelect.forEach((numSelectd) => {
    numSelectd.addEventListener('click', () =>{
        numSelecionado.innerHTML = numSelectd.innerHTML
    })
})


submit.addEventListener('click', () => {
    main.innerHTML = `<section class="secundary">
    <picture>
      <img src="/images/illustration-thank-you.svg" alt="">
    </picture>
    <div class="text">  
      <p class="selected">You selected
      <span id="numSelecionado"></span> out of 5</p>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch</p>
    </div>
  </section>`
})
