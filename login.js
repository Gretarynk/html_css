
const btnSign=document.getElementById('btnSign')


btnSign.addEventListener('click',function(){
    const signBox=document.createElement('div');
    signBox.classList.add('signWrapper');
    signBox.textContent = 'Please fill all fields to create account and sign in.';
    const close=document.createElement('btn')
    close.textContent='X'
    close.classList.add('close')

    const inputNick=document.createElement('input')
    inputNick.classList.add('nick')
    inputNick.placeholder='name or nickname'
    const inputEmail=document.createElement('input')
    inputEmail.type='email'
    inputEmail.placeholder='email'
    inputEmail.classList.add('email')
    const inputPassword=document.createElement('input')
    inputPassword.placeholder='create password'
    inputPassword.classList.add('password')
    const inputPassword2=document.createElement('input')
    inputPassword2.placeholder='repeat password'
    inputPassword2.classList.add('password')
    const buttonSign=document.createElement('btn')
    buttonSign.classList.add('buttonSign')
    buttonSign.textContent='sign in'

    document.body.appendChild(signBox);
    signBox.appendChild(close)
    signBox.append(inputNick);
    signBox.append(inputEmail);
    signBox.append(inputPassword);
    signBox.append(inputPassword2);
    signBox.append(buttonSign);

    console.log('clicked')

    close.addEventListener('click',function(){
        signBox.remove();


    })

    

})