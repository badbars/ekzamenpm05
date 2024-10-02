document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthDateInput = document.getElementById('birthDate');
    const birthDate = new Date(birthDateInput.value);
    const currentDate = new Date();
    const earliestBirthDate = new Date(currentDate.getFullYear() - 18, 0, 1); // 18 лет назад 

    if (birthDate > earliestBirthDate) {
        alert("Возраст должен быть не младше 18 лет.");
        return;
    }

    const appointmentDateInput = document.getElementById('appointmentDate');
    const appointmentDate = new Date(appointmentDateInput.value);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (appointmentDate < tomorrow) {
        alert("Дата приема должна быть не ранее завтрашнего числа.");
        return;
    }

    const appointmentTimeInput = document.getElementById('appointmentTime');
    const appointmentTime = appointmentTimeInput.value;
    const [hours, minutes] = appointmentTime.split(':').map(num => parseInt(num));
    
    if (hours < 8 || hours > 22) {
        alert("Время приема должно быть с 8:00 до 22:00.");
        return;
    }

    alert("Запись на прием успешно выполнена!");
    this.reset();
});