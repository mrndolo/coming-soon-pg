const scriptURL = 'https://script.google.com/macros/s/AKfycbzbVVTvw5-C01UHTT07GcMnZ_dNWCMbbV3bxd65h_wnP1pf56z6zUpliFdjzMMSKl44/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML = "Thank you for subscribing!"
        setTimeout(function(){msg.innerHTML = ""},3000)
        form.reset()
    }
    )
    .catch(error => console.error('Error!', error.message))
})