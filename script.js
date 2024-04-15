document.addEventListener("DOMContentLoaded", function() {
    const grossIncomeInput = document.getElementById('grossIncome');
    const extraIncomeInput = document.getElementById('extraIncome');
    const ageSelect = document.getElementById('age');
    const deductionsInput = document.getElementById('deductions');
    const grossIncomeErrorIcon = document.getElementById('grossIncomeError');
    const extraIncomeErrorIcon = document.getElementById('extraIncomeError');
    const ageErrorIcon = document.getElementById('ageError');
    const deductionsErrorIcon = document.getElementById('deductionsError');
    const submitBtn = document.getElementById('submitBtn');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Function to validate input fields
    function validateInput(input, errorIcon) {
        if (input.value === '' || isNaN(input.value)) {
            errorIcon.style.display = 'inline';
            input.classList.add('error');
            return false;
        } else {
            errorIcon.style.display = 'none';
            input.classList.remove('error');
            return true;
        }
    }

    submitBtn.addEventListener('click', function() {
        let isValid = true;

        // Validate Gross Annual Income
        if (!validateInput(grossIncomeInput, grossIncomeErrorIcon)) {
            isValid = false;
        }

        // Validate Extra Income
        if (!validateInput(extraIncomeInput, extraIncomeErrorIcon)) {
            isValid = false;
        }

        // Validate Age
        if (ageSelect.value === '') {
            ageErrorIcon.style.display = 'inline';
            ageSelect.classList.add('error');
            isValid = false;
        } else {
            ageErrorIcon.style.display = 'none';
            ageSelect.classList.remove('error');
        }

        // Validate Deductions
        if (!validateInput(deductionsInput, deductionsErrorIcon)) {
            isValid = false;
        }

        if (isValid) {
            // Calculate tax
            const ageCategory = ageSelect.value;
            const grossIncome = parseFloat(grossIncomeInput.value);
            const extraIncome = parseFloat(extraIncomeInput.value);
            const deductions = parseFloat(deductionsInput.value);

            let taxRate;
            if (ageCategory === '<40') {
                taxRate = 0.3;
            } else if (ageCategory === '>=40&<60') {
                taxRate = 0.4;
            } else {
                taxRate = 0.1;
            }

            const totalIncome = grossIncome + extraIncome - deductions;
            const taxableIncome = Math.max(0, totalIncome - 8);
            const taxAmount = taxRate * taxableIncome;

            // Show modal with result
            modal.style.display = 'block';
            modalContent.innerHTML = `
                <h2>Tax Calculation Result</h2>
                <p>Total Income: ${totalIncome.toFixed(2)} Lakhs</p>
                <p>Taxable Income: ${taxableIncome.toFixed(2)} Lakhs</p>
                <p>Tax Amount: ${taxAmount.toFixed(2)} Lakhs</p>
                <p>Overall Income after tax deductions :<b> ${totalIncome.toFixed(2)-taxAmount.toFixed(2)} Lakhs</p>
            `;
        }
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
