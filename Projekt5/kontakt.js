const navn = document.getElementById('navn')
const email = document.getElementById('email')
const besked = document.getElementById('besked')

const errorElement = document.getElementById('error')
const form = document.getElementById('form')



form.addEventListener('submit', (e) => {
    let messages = []
    if (navn.value === '' || navn.value == null) {
        messages.push('Navn er påkrævet')
    }

    if (email.value.length <= 3) {
        messages.push('Email er påkrævet')
    }

    if (besked.value.length <= 50) {
        messages.push('Din besked skal være længere end 50 tegn')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})