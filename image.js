/* This assignment tests your understanding of JavaScript and its interaction with HTML user interfaces and
DOM.*/

//CHECK IF VALID URL
function validateURL(url){
  var regex = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
  return !!regex.test(url);
}


//GRABS USERS ENTERED URL AND DISPLAY PHOTO
function AddPhoto(){
  var user_url = ($('image-url').value);
  var img = document.createElement("img");

  //check if url is valid
  if(validateURL(user_url)){
    //if valid set the image src and class then append to planning area
    img.src = user_url;
    img.className = "planning-img";
    $('planning-area').appendChild(img);
  }
  //else print error message, toggle display
  else{
    $('url-error').classList.toggle("alert");
  }
}

//GRABS USER ENTERED URL AND REMOVES FROM PLANNING AREA
function DeletePhoto(){
  var remove_url = ($('image-url').value);
  var src = $('img').getAttribute("src");
  var remove_img;
  //check if url is valid
  if(validateURL(remove_url)){
    alert(src);
  }
  //else print error message, toggle display
  else{
    $('url-error').classList.toggle("alert");
  }
}
