function sign(e){
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var roll = document.getElementById('roll').value;
  var password = document.getElementById('password').value;

  var user = {
    name : name,
    email : email,
    roll : roll,
    password : password
  };

//localstorageeeeeee
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userRoll', roll);
  localStorage.setItem('userPassword', password);

  // localStorage.getItem('userName');
  // localStorage.getItem('userEmail');
  // localStorage.getItem('userRoll');
  // localStorage.getItem('userPassword');

  window.location.href = "../pages/home.html";
}



// const signUp = e => {
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let roll = document.getElementById('roll').value;
//   let password = document.getElementById('password').value;

//   let formData = JSON.parse(localStorage.getItem('formData')) || [];

//   let exist = formData.length && JSON.parse(localStorage.getItem('formData'))
//   .some(data => data.name == name && data.email == email);

//   if(!exist){
//     formData.push({name, email, roll, password});
//     localStorage.setItem('formData', JSON.stringify(formData));
//     document.querySelector('form').reset();
//     alert('Account created sucessfully, please login!');
//   } else {
//     alert('oppppsss.....duplicate found');
//   }
//   e.preventDefault();
// }