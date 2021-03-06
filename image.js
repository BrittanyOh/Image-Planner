/* This assignment tests your understanding of JavaScript and its interaction with HTML user interfaces and
DOM.*/

"use strict";
//Attempt to create unobtrusive code
document.getElementById("add-btn").addEventListener("click", AddPhoto);
document.getElementById("delete-btn").addEventListener("click", DeletePhoto);

//CHECK IF VALID URL
function validateURL(url){
  var regex = new RegExp("^(https?:\\/\\/)?"+ // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"+ // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))"+ // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"+ // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?"+ // query string
    "(\\#[-a-z\\d_]*)?$","i");
  return !!regex.test(url);
}


//GRABS USERS ENTERED URL AND DISPLAY PHOTO
function AddPhoto(){
  var user_url = ($("image-url").value);
  var img = document.createElement("img");

  //check if url is valid
  if(validateURL(user_url)){
    //if valid set the image src and class then append to planning area
    img.src = user_url;
    img.className = "planning-img";
    img.id = "img_" + document.getElementsByTagName("img").length;
    $("planning-area").appendChild(img);
    $("image-url").value = "";
  }
  //else print error message, toggle display
  else{
    $("url-error").classList.toggle("alert");
  }
}

//FIND ALL IMG TAGS AND STORE DOM OBJECT
function GrabImage(delete_url){
  var imgs = document.getElementsByTagName("img");
  var return_value = null;
  Array.prototype.forEach.call(imgs, function(images){
    if(images.src == delete_url){
      return_value = images;
    }
  });
  return return_value;
}

//GRABS USER ENTERED URL AND REMOVES FROM PLANNING AREA
function DeletePhoto(){
  var remove_url = ($("image-url").value);
  var remove_img;

  //check if url is valid
  if(validateURL(remove_url)){
    remove_img = GrabImage(remove_url);
    $("planning-area").removeChild(remove_img);
    $("image-url").value = "";
  }
  //else print error message, toggle display
  else{
    $("url-error").classList.toggle("alert");
  }
}


//TAKES URL OF CLICKED IMAGE AND PLACES IN SEARCH BAR
var getImageURL = function() {
  document.onclick = function(e) {
    if (e.target.tagName == "IMG"){
      var image = e.target.getAttribute("src");
      $("image-url").value = image;
    }
  };
};

getImageURL();
