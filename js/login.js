document.getElementById('loginForm').addEventListener('submit', function(event){
  event.preventDefault();

  //get input values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  //load the json file
  fetch('../json/login.json').then(response => response.json())
  .then(data => {
    //check if user exist and password correct
    var user = data.find(user => user.email === email && user.password === password);

    if(user){
      window.location.href = "../pages/home.html";
    } else {
      alert('invalid email or password');
    }
  })
  .catch(error => console.error('Error: ', error));
});