document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const totalPremiumElem = document.getElementById('total-premium');

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
    form.addEventListener('input', calculatePremium);

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission for this demo
        alert(`Thank you for your interest! Your premium is ${totalPremiumElem.textContent}.`);
    });
});
