
// onclick function
function validEmail() {
    const regularExpresionForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const input = document.getElementById('input-field')
    const inputValue = input.value;

    if (inputValue.match(regularExpresionForEmail)) {
        const successmsg = document.getElementById('text');
        successmsg.innerHTML = `<p class="text-success">Your Input is Valid</p>`

    } else {
        const msg = document.getElementById('text');
        msg.innerHTML = `<p class="text-danger">Input  inValid charecter! </p>`

    }
    input.value = '';
}