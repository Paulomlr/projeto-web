const pwdInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePwd');
const icon = document.getElementById('iconPwd');

toggleBtn.addEventListener('click', () => {
    const isHidden = pwdInput.type === 'password';
    pwdInput.type = isHidden ? 'text' : 'password';
    icon.src = isHidden ? 'assets/eye-off.svg' : 'assets/eye.svg';
    toggleBtn.setAttribute('aria-label',
        isHidden ? "Ocultar senha" : "Mostrar senha"
    );
});