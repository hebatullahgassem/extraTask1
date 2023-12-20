//validate form inputs before submitting data
function validateForm(){
  var img = document.getElementById("img");
  var title = document.getElementById("title").value;
  var desc = document.getElementById("desc").value;

  if(img == ""){
    alert('Image is required');
    return false;
  } else if (title == ""){
    alert('Title is required');
    return false;
  } else if(desc == ""){
    alert('Description is required');
    return false;
  }

  return true;
}


//function to read/show data from local storage
function showData(){
  var posts;

  if(localStorage.getItem("posts") == null){
    posts = [];
  } else {
    posts = JSON.parse(localStorage.getItem("posts"));
  }

  var html = "";

  posts.forEach(function(element, index){
    html += "<tr><img>" + element.img + "</tr>";
    html += "<tr><h1> " + element.title + " </h1></tr>";
    html += "<tr><h1> " + element.desc + " </h1></tr>";

    html += "<button class='postBtn' onclick='addData("+index+")'>Add</button>";
    html += "<button class='postBtn' onclick='UpdateData("+index+")'>Edit</button>";
    html += "<button class='postBtn' onclick='deleteData("+index+")'>Delete</button>";
  });

  document.querySelector(".form-data").innerHTML = html;
}


//shows all data from local storage when page loaded
document.onload = showData();


//function to create/add data to local storage
function AddData(){
  if(validateForm() == true){
    var img = document.getElementById("img");
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;

    var posts;

    if(localStorage.getItem("posts") == null){
      posts = [];
    } else {
      posts = JSON.parse(localStorage.getItem("posts"));
    }
  
    posts.push({
      img: img,
      title: title,
      desc: desc
    });

    localStorage.setItem("posts", JSON.stringify(posts));
    showData();

    document.getElementById("img").src = URL.createObjectURL(img.files[0]);
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
  }
}


//function to delete data from local storage
function deleteData(index){
  var posts;

    if(localStorage.getItem("posts") == null){
      posts = [];
    } else {
      posts = JSON.parse(localStorage.getItem("posts"));
    }

    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    showData();
}

//function to update/ edit data in local storage
function UpdateData(index){
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  var posts;

  if(localStorage.getItem("posts") == null){
    posts = [];
  } else {
    posts = JSON.parse(localStorage.getItem("posts"));
  }

  // document.getElementById("img").src = posts[index].img;
  document.getElementById("title").value = posts[index].title;
  document.getElementById("desc").value = posts[index].desc;

  document.querySelector("#update").onclick = function(){
    if(validateForm() == true){
      // posts[index].img = document.getElementById("img").value; 
      posts[index].title = document.getElementById("title").value; 
      posts[index].desc = document.getElementById("desc").value; 

      localStorage.setItem("posts", JSON.stringify(posts));

      showData();

      // document.getElementById("img").src = "";
      document.getElementById("title").value = "";
      document.getElementById("desc").value = "";

      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
  }
}
