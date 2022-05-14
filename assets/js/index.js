const scriptURL = 'https://script.google.com/macros/s/AKfycbwe5_ZO6WBPIX_QOHTpVPh4OE2RoVucfYapPbpFqr-_BDmwJ4_KYM_zlMH2hX5-I-c7-g/exec';
const form = document.forms['portfolio-contact-form'];

form.addEventListener('submit', e => {
    const submitButton = document.getElementById("sendmessageBtn");
    submitButton.disabled = "true";
    submitButton.value = "Sending...";

    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            alert("Message sent successfully...");
            location.reload();
        })
        .catch(error => console.error('Error!', error.message))
});