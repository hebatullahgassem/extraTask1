// fetch('../json/posts.json')
// .then(results => results.json())
// .then(console.log);



// fetch('../json/posts.json')
// .then(function(response){
//   return response.json();
// })
// .then(function(data){
//   for(var i=0; i<data.length; i++){
//     document.getElementById("dataDisplay").innerHTML += data[i].name
//   }
// })
// .catch(function(err){
//   console.log(err);
// });



document.addEventListener("content", function(){
  fetch('../json/posts.json')
  .then(response => response.json())
  .then(data => {
    const dataDisplay = document.getElementById('dataDisplay');

    //create html elemnt to display json data
    const nameEl = document.createElement('p');
    nameEl.textContent = data.name;

    dataDisplay.appendChild(nameEl);
  })
  .catch(err => console.log('err fetching json data', err))
});