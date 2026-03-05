document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const totalPremiumElem = document.getElementById('total-premium');
    const coverageAmountInput = document.getElementById('coverage-amount');

    // Strictly allow only numbers (0-9)
    // Prevents non-numeric keys and handles IME (Korean) better
    coverageAmountInput.addEventListener('keydown', (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (allowedKeys.includes(e.key)) return;
        
        // Prevent any key that isn't a number
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    });

    coverageAmountInput.addEventListener('input', (e) => {
        // Clean any non-numeric characters that might have bypassed keydown (e.g., IME, Drag & Drop)
        let value = e.target.value.replace(/[^0-9]/g, '');
        
        // Remove leading zeros
        if (value.length > 1 && value.startsWith('0')) {
            value = value.replace(/^0+/, '');
        }
        
        // Ensure max limit
        if (value !== '' && parseInt(value) > 50000) {
            value = "50000";
        }
        
        e.target.value = value;
        calculatePremium();
    });

    coverageAmountInput.addEventListener('paste', (e) => {
        const pasteData = e.clipboardData.getData('text');
        if (!/^\d+$/.test(pasteData)) {
            e.preventDefault();
        }
    });

    const calculatePremium = () => {
        const plan = form.elements.coverage_plan.value;
        const coverageAmount = parseFloat(form.elements.coverage_amount.value) || 0;
        const ifar = form.elements.ifar.value;

        let premium = 0;
        let planMultiplier = 0;

        if (plan === 'k12') {
            planMultiplier = 0.05; // 5%
        } else if (plan === 'college') {
            planMultiplier = 0.055; // 5.5%
        }

        if (coverageAmount > 0) {
            premium = coverageAmount * planMultiplier;
        }

        if (ifar === 'yes') {
            premium += 200; // Add $200 flat fee for IFAR
        }

        totalPremiumElem.textContent = `$${premium.toFixed(2)}`;
    };

    // Calculate on any form change
    form.addEventListener('change', calculatePremium);

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission for this demo
        alert(`관심을 가져주셔서 감사합니다! 예상 보험료는 ${totalPremiumElem.textContent} 입니다. (결제 예행 연습 완료)`);
    });
});
