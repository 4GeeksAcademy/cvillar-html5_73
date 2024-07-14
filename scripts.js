const cardType = document.getElementById('card-type');
const icons = {
    'visa': document.getElementById('visa-icon'),
    'mastercard': document.getElementById('mastercard-icon'),
    'amex': document.getElementById('amex-icon'),
    'diner': document.getElementById('diner-icon')
};

cardType.addEventListener('change', function() {
    for (let key in icons) {
        icons[key].style.color = '#888';
    }
    icons[this.value].style.color = '#000';
});

window.onload = () => {
    icons['visa'].style.color = '#000';
};
function cancelPayment() {
    if (confirm('¿Estás seguro de que deseas cancelar el pago?')) {
        document.querySelector('form').reset();
    }
}


