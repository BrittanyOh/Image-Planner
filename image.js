/* This assignment tests your understanding of JavaScript and its interaction with HTML user interfaces and
DOM.*/

//Checks if url entered is valid
function validateURL(url){
  var regex = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
  return !!regex.test(url);
}

//Grab users entered url and display the photo
function AddPhoto(){
  var user_url = ($('image-url').value);
  alert(validateURL(user_url));
}
