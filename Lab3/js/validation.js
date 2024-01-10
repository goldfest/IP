// модуль используется для валидации форма на странице

function validation() {
    // поиск всех форма с классом .needs-validation
    const forms = document.querySelectorAll("form.needs-validation");

    for (let i = 0; i < forms.length; i += 1) {
        const form = forms[i];
        // для каждой формы добавляется обработчик события отправки
        form.addEventListener("submit", (event) => {
            // если форма не прошла валидацию
            // то выключить стандартное действие
            if (!form.checkValidity()) {
                event.preventDefault();
                // предотвращает распространение preventDefault
                // на другие объекты
                event.stopPropagation();
            }
            // добавляет к форме класс was-validated
            form.classList.add("was-validated");
        });
    }
}

export default validation;
