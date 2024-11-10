document.addEventListener("DOMContentLoaded", function() {
    console.log("Скрипт загружен и готов к работе");

    function validateOrderForm() {
        const name = document.getElementById('orderName').value.trim();
        const email = document.getElementById('orderEmail').value.trim();
        const phone = document.getElementById('orderPhone').value.trim();
        const product = document.getElementById('orderProduct').value;

        let errors = '';

        if (name === '') errors += 'Введите имя.\n';
        if (!email.includes('@')) errors += 'Введите корректный E-mail.\n';
        const phonePattern = /^\+?[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) errors += 'Введите корректный телефон.\n';
        if (product === '') errors += 'Выберите продукт.\n';

        if (errors) {
            alert(errors);
        } else {
            const result = `Имя: ${name}\nE-mail: ${email}\nТелефон: ${phone}\nПродукт: ${product}`;
            document.getElementById('orderResult').textContent = result;
        }
    }
    window.validateOrderForm = validateOrderForm;

    const primaryButton = document.querySelector('.btn-primary');
    if (primaryButton) {
        primaryButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#e74c3c';
            this.style.transform = 'scale(1.1)';
        });

        primaryButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#ffcc00';
            this.style.transform = 'scale(1)';
        });
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#e0e0e0';
            this.style.transform = 'translateY(-10px)';
        });
        block.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
        });
    });

    const submitButtons = document.querySelectorAll('.order-form button, .callback-form button');
    submitButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'orange'; 
            this.style.color = 'white'; 
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#ffcc00'; 
            this.style.color = 'black'; 
        });
    });
});
