(() => {
    const body = new Component(document.body);

    const main = new Main('view');
    body.add(main);

    const login = new Text('h1');
    login.setInnerText('Register');
    main.add(login);

    const form = new Form('form');
    main.add(form);

    const nameDiv = new Divider('form__field');
    form.add(nameDiv);

    const nameLabel = new Label('name-input');
    nameLabel.setInnerText('Name');
    nameDiv.add(nameLabel);

    const nameInput = new Input(nameLabel.getFor());
    nameInput.setClassName('form__input');
    nameInput.setType('text');
    nameInput.setName('name');
    nameInput.setPlaceholder('name');
    nameDiv.add(nameInput);

    const surnameDiv = new Divider('form__field');
    form.add(surnameDiv);

    const surnameLabel = new Label('surname-input');
    surnameLabel.setInnerText('Surname');
    surnameDiv.add(surnameLabel);

    const surnameInput = new Input(surnameLabel.getFor());
    surnameInput.setClassName('form__input');
    surnameInput.setType('text');
    surnameInput.setName('surname');
    surnameInput.setPlaceholder('surname');
    surnameDiv.add(surnameInput);

    const emailDiv = new Divider('form__field');
    form.add(emailDiv);

    const emailLabel = new Label('email-input');
    emailLabel.setInnerText('Email');
    emailDiv.add(emailLabel);

    const emailInput = new Input(emailLabel.getFor());
    emailInput.setClassName('form__input');
    emailInput.setType('email');
    emailInput.setName('email');
    emailInput.setPlaceholder('email');
    emailDiv.add(emailInput);

    const usernameDiv = new Divider('form__field');
    form.add(usernameDiv);

    const usernameLabel = new Label('username-input');
    usernameLabel.setInnerText('Username');
    usernameDiv.add(usernameLabel);

    const usernameInput = new Input(usernameLabel.getFor());
    usernameInput.setClassName('form__input');
    usernameInput.setType('text');
    usernameInput.setName('username');
    usernameInput.setPlaceholder('username');
    usernameDiv.add(usernameInput);

    const passwordDiv = new Divider('form__field');
    form.add(passwordDiv);

    const passwordLabel = new Label('password-input');
    passwordLabel.setInnerText('Password');
    passwordDiv.add(passwordLabel);

    const passwordInput = new Input(passwordLabel.getFor());
    passwordInput.setClassName('form__input');
    passwordInput.setType('password');
    passwordInput.setName('password');
    passwordInput.setPlaceholder('password');
    passwordDiv.add(passwordInput);

    const passwordRepeatDiv = new Divider('form__field');
    form.add(passwordRepeatDiv);

    const passwordRepeatLabel = new Label('password2-input');
    passwordRepeatLabel.setInnerText('Repeat Password');
    passwordRepeatDiv.add(passwordRepeatLabel);

    const passwordRepeatInput = new Input(passwordRepeatLabel.getFor());
    passwordRepeatInput.setClassName('form__input');
    passwordRepeatInput.setType('password');
    passwordRepeatInput.setName('password2');
    passwordRepeatInput.setPlaceholder('repeat password');
    passwordRepeatDiv.add(passwordRepeatInput);

    const submitButton = new Button('form__button');
    submitButton.setType('submit');
    submitButton.setInnerText('Register')
    form.add(submitButton);



    form.container.onsubmit = (event) => {
        event.preventDefault()

        const name = nameInput.getValue();
        const surname = surnameInput.getValue();
        const email = emailInput.getValue();
        const username = usernameInput.getValue();
        const password = passwordInput.getValue();
        const passwordRepeat = passwordRepeatInput.getValue();

        try {
            registerUser(name, surname, email, username, password, passwordRepeat);

            alert('user succesfully registered');

            location.href = '../login';
        } catch (error) {
            alert(error.message);
        }
    }

    const a = document.createElement('a');
    a.href = '';
    a.innerText = 'Login'
    main.container.appendChild(a);

    a.onclick = (event) => {
        event.preventDefault()

        location.href = '../login'
    }
})();