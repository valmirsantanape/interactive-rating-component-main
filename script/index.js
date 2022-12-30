const main = document.querySelector('main')
const update = document.querySelector("h1")
const update2 = document.querySelector("p")

main.addEventListener('submit', (e) => {
    update.innerText = 'Thank you!'
    update2.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
    console.log(update)
})

'Thank you!'

'We appreciate you taking the time to give a rating. If you ever need more support,'
'don’t hesitate to get in touch!'

"You selected <!-- Add rating here --> out of 5"

