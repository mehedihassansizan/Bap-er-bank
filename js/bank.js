document.getElementById('submit-btn').addEventListener('click', function loginBank() {
    const email = document.getElementById('input-email');
    const emailValue = email.value;
    
    const password = document.getElementById('input-password');
    const passValue = password.value;
    
    if (emailValue === 'mahadihassn21777@gmail.com' && passValue === '013012') {
        window.location.href = 'bankPage.html';
    } else {
        console.log('get out');
    }
})