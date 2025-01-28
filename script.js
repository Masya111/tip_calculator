document.addEventListener('DOMContentLoaded', () => {
    const customButton = document.getElementById('custom');
    const customInput = document.querySelector('.custom-input');
    const billInput = document.querySelector('.bill');
    const peopleInput = document.querySelector('.people');
    const radio = document.querySelectorAll('.tip-persent');
    const inputs = document.querySelectorAll('input[type="text"]');
    const tipAmount = document.querySelector('.tip-amount');
    const totalAmount = document.querySelector('.total-amount');
    customInput.addEventListener('click', () => {
        customButton.checked = true;
    })

    function calculateTip(bill=0, people=1, tip=0) {
        return Number((bill*tip/100)/people);
    }

    function calculateTotal (bill=0, people=1, tip=0) {
        return Number((Number(bill) + Number(bill*tip/100))/people);
    }

    inputs.forEach((item) => {
        item.addEventListener('input', () => {
            const currentTip = document.querySelector('input[type="radio"]:checked + .tip-button').textContent;
            tipAmount.textContent = `$${(calculateTip(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
            totalAmount.textContent = `$${(calculateTotal(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
        });
    });
    radio.forEach((item) => {
        item.addEventListener('click', () => {
            const currentTip = document.querySelector('input[type="radio"]:checked + .tip-button').textContent;
            tipAmount.textContent = `$${(calculateTip(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
            totalAmount.textContent = `$${(calculateTotal(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
        });
    });
})