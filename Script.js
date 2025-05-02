function showOffers() {
    document.getElementById('jio-offers').style.display = 'none';
    document.getElementById('airtel-offers').style.display = 'none';
    const operator = document.getElementById('operator').value;
    if (operator === 'jio') {
        document.getElementById('jio-offers').style.display = 'block';
    } else if (operator === 'airtel') {
        document.getElementById('airtel-offers').style.display = 'block';
    }
}

function makePayment(amount) {
    alert(`Redirecting to payment for ${amount}...`);
}
