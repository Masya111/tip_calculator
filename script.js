document.addEventListener('DOMContentLoaded', () => {
    const customButton = document.getElementById('custom');
    const customInput = document.querySelector('.custom-input');
    const billInput = document.querySelector('.bill');
    const peopleInput = document.querySelector('.people');
    const radio = document.querySelectorAll('.tip-persent');
    const inputs = document.querySelectorAll('input[type="number"]');
    const tipAmount = document.querySelector('.tip-amount');
    const totalAmount = document.querySelector('.total-amount');
    const errorMessageBill = document.querySelector('.error-message-bill');
    const errorMessagePeople = document.querySelector('.error-message-people');
    const resetButton = document.querySelector('.reset-button');
    let currentTip;
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
            if (billInput.value == 0) {
                billInput.setCustomValidity(" ");
                errorMessageBill.textContent = "Can't be zero";
            } else {
                billInput.setCustomValidity("");
                errorMessageBill.textContent = '';
            }
            if (peopleInput.value == 0) {
                peopleInput.setCustomValidity(" ");
                errorMessagePeople.textContent = "Can't be zero";
            } else {
                peopleInput.setCustomValidity("");
                errorMessagePeople.textContent = '';
            }
            if (customButton.checked) {
                currentTip = `${customInput.value}%`;
            }
            else {
                currentTip = document.querySelector('input[type="radio"]:checked + .tip-button').textContent;
            }
            
            tipAmount.textContent = `$${(calculateTip(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
            totalAmount.textContent = `$${(calculateTotal(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
        });
    });
    radio.forEach((item) => {
        item.addEventListener('click', () => {
            if (customButton.checked) {
                currentTip = `${customInput.value}%`;
            }
            else {
                currentTip = document.querySelector('input[type="radio"]:checked + .tip-button').textContent;
            }
            tipAmount.textContent = `$${(calculateTip(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
            totalAmount.textContent = `$${(calculateTotal(billInput.value, peopleInput.value, currentTip.slice(0,currentTip.length-1))).toFixed(2)}`;
        });
    });
    resetButton.addEventListener('click', () => {
        checkedButton = document.querySelector('input[type="radio"]:checked');
        checkedButton.checked = false;
        inputs.forEach((item) => {
            item.value = '';
        });
        tipAmount.textContent = '$0';
        totalAmount.textContent = '$0';
    })
})