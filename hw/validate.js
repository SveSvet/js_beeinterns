function validate(data) {
    const { login, password, confirmPassword, license, firstName } = data;

    if (!login || !password || !firstName) {
        alert('Укажите логин/пароль/имя');
    } else if (login === 'beeline' && 'beeinterns' && 'bee') {
        alert('Такой логин уже существует, введите другой:')
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        const male = document.getElementById('male');
        alert(`${male.checked ? "Уважаемый" : "Уважаемая"} ${firstName}, заявка создана `);
    }

}




