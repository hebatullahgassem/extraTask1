document.getElementById('loginForm').addEventListener('submit', function(event){
  event.preventDefault();

  //get input values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  //localstorage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  var getEmail = localStorage.getItem('userEmail');
  var getPassword = localStorage.getItem('userPassword');

  //load the json file
  fetch('../json/login.json').then(response => response.json())
  .then(data => {
    //check if user exist and password correct
    var user = data.find(user => user.email === getEmail && user.password === getPassword);

    if(user){
      window.location.href = "../pages/home.html";
    } else {
      alert('invalid email or password');
    }
  })
  .catch(error => console.error('Error: ', error));
});