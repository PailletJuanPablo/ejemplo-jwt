const handleRegisterFormSubmission = async () => {


    const form = document.querySelector('#registerForm');

    form.addEventListener('submit', async (event) => {
        // Formulario no se envíe
        event.preventDefault();

        const passwordInput = document.querySelector('#password');
        const emailInput = document.querySelector('#email');
        const nameInput = document.querySelector('#name');

        try {

            const response = await axios.post('http://localhost:3000/api/auth/register', {
                email: emailInput.value,
                password: passwordInput.value,
                name: nameInput.value
            })

            console.log(response.data);

            localStorage.setItem('token', response.data.token);

        } catch (error) {
            console.error(error)
        }






    })

}

window.addEventListener('load', () => {
    handleRegisterFormSubmission()
})