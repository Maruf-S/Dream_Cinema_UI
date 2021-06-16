
var fullName = document.getElementById('name')
var email = document.getElementById('mail')
var message = document.getElementById('message')

var submit_button=document.getElementById('submit');
var forms = document.getElementsByTagName('form')


// submit_button.addEventListener("click", clearText);
var mailForm = document.querySelector('.mailform');
mailForm.addEventListener('submit',(e)=>{
    fullName.value='';
    email.value='';
    message.value='';

    // e.preventDefault();
    // location.reload();
})
// function clearText(e){
//     location.reload();
//     // e.preventDefault();    
//     // fullName.value='';
//     // email.vale='';
//     // message.value='';
//     // fullName.submit();
//     // email.submit();
//     // message.submit();
//     // email.reset();
//     // email.reset();
//     // message.reset();
// }
