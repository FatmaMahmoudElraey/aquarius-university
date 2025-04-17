const firstName = document.querySelector('#firstName');
const LastName = document.querySelector('#lastName');
const Email = document.querySelector('#email');
const Password = document.querySelector('#password');
const Register =  document.querySelector('#submitAccount');
const wrongpass = document.querySelector('#wrongpass');
const emailexist= document.querySelector('#emailexist');
const notvalid = document.querySelector('#notvalid');

let UserContainer = []; //contains objects ex user


function addUser(){   //add user when register
    if((validateUserAccount() == true)){ // true if all the requirements of form are true 
        let user = {
            fname: firstName.value,
            lname: LastName.value,
            email: Email.value,
            password: Password.value,
        }
        var userStore = JSON.parse(localStorage.getItem('users'));
        if(userStore){
            userStore.map((olduser) => {
                if(olduser.email == user.email){
                    emailexist.classList.add('active');
                    return 0;
                }else{
                    // UserContainer.push(user);
                    // localStorage.setItem('users', JSON.stringify(UserContainer));
                    const newDataUser = [userStore, user];
                    localStorage.setItem('users', JSON.stringify(newDataUser));
                    window.location.href ='../profile.html';
                }
            })
        }else{
            UserContainer.push(user);
            localStorage.setItem('users', JSON.stringify(UserContainer));
            window.location.href ='../profile.html';
        }
    }
}

Register.addEventListener('click', function(e){
    e.preventDefault();
    addUser();
})

function validateUserAccount(){
    let regex = /[a-zA-Z]/;

    if(regex.test(Password.value)==true){
        return true;
    }else if(Password.value === ''){
        return false;
    }else{
        wrongpass.classList.add('active');
        return false;
    }
}

const emailLogin = document.querySelector('#emailLogin');
const passwordLogin = document.querySelector('#passwordLogin');
const loginbtn = document.getElementById('loginIn');
const wrongpasss = document.querySelector('#wrongpasss');
const notExist = document.querySelector('#notExist');

loginbtn.addEventListener('click', function(e){
    e.preventDefault();
    logIn();
})

function logIn(){
    const oldusers= JSON.parse(localStorage.getItem('users'));
    oldusers.map((user) => {
        if(user.email == emailLogin.value && user.password == passwordLogin.value){
            console.log('valid');
            window.location.href='../profile.html';
        }else if(user.email == emailLogin.value && user.password != passwordLogin.value){
            wrongpasss.classList.add('active');
        }else{
            notExist.classList.add('active');
        }
    })
}


// let checkEmail;
// function validUserEmail(){
//         let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
//         if(Email.value.match(regexEmail)){
//             notvalid.classList.remove('active');
//             return true;
//         }else{
//             notvalid.classList.add('active');
//             return false;
//         }


//         let regexEmail = /^[a-zA-Z0-9_ .]{2,}\@[a-zA-Z0-9_ .]{2,}(\.com)$/;
//         checkEmail = regexEmail.test($('#email').val());
//         if(checkEmail == true){
//             notvalid.classList.remove('active');
//             return true;
//         }
//         else{
//             notvalid.classList.add('active');
//             return false;
//         }
//     }








// let userInput = document.querySelector("[name='email']");
// let userInput = document.querySelector("[name='email']");
// console.log(userInput);
// document.forms[0].onsubmit =function(e){
//     let userValid = false;
//     let ageValid = false;

//     if(userValid===false || ageValid===false){
//         e.preventDefault();
//     }
// }


// document.links[0].onclick = function(event){
//     console.log(event);
//     event.preventDefault();
// }

// ===========================================
// const name = document.getElementById('name');
// const password = document.getElementById('password');
// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//     let messages = [];

//     // e.preventDefault();

//     if (password.value.length <=6 ){
//         messages.push('Password must be longer than 6 characters');
//     }
// })

// ===========================================

// const loginNavBtn = document.querySelector('.login-nav-btn');
// const signupNavBtn = document.querySelector('.signup-nav-btn');
// const loginSection = document.querySelector('#login-section');
// const signupSection = document.querySelector('#signup-section');

// loginNavBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     signupSection.classList.remove('active-form');
//     loginSection.classList.add('active-form');
// })

// signupNavBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log("sign up on")
//     loginSection.classList.remove('active-form');
//     signupSection.classList.add('active-form');
// })

// const loginNavBtn = document.getElementById('login-nav-btn');
// const signupNavBtn =document.getElementById('signup-nav-btn');
// const loginSection = document.getElementById('login-section');
// const signupSection = document.getElementById('signup-section');

// loginNavBtn.addEventListener('onclick', function(e){
//     e.preventDefault();
//     signupSection.classList.remove('active-form');
//     loginSection.classList.add('active-form');
// });

// signupNavBtn.addEventListener('onclick', function(e){
//     e.preventDefault();
//     signupSection.classList.add('active-form');
//     loginSection.classList.remove('active-form');
// })

