const signUpLink = document.querySelector('.signUp-link')
const signInLink = document.querySelector('.signIn-link')
const wrapper = document.querySelector('.wrapper')
const circle = document.getElementById('circle')
const blob = document.getElementById('blob')


signUpLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active')
})

signInLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active')
})

function toggle(){
    let body = document.getElementById('body')
    let toggler = document.querySelector('.toggler');
    toggler.classList.toggle('is-toggle');
    body.classList.toggle('dark')
}

