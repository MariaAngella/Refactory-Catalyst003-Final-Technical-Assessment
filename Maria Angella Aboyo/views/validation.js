function formValidation() {
  //declare variables to access form elements
  var uid = document.registration.userId;
  var uname = document.registration.uname;
  var passid = document.registration.passid;
  var uadd = document.registration.address;
  //uid stores and has access to element user id in the form registration
  if (userIdVal(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (allLetters(uname)) {
        if (alphaNumeric(uadd)) {
        }
      }
    }
  }

  //handling the first element 'uid' 7 to 12
  function userIdVal(uid, mx, my) {
    var uidLen = uid.value.length;
    //uidLen refers to the length of the element uid
    if (uidLen == 0 || uidLen >= my || uidLen < mx) {
      uid.focus();
      uid.style.border = "2px solid red";
      alert("Please input your user ID");
      return false;
    }
    return true;
  }
  //handling name validation
  function allLetters(uname) {
    var letters = /^[A-Za-z]+$/; //something .................expression
    if (uname.value.match(letters)) {
      return true;
    } else {
      uname.focus();
      alert("username must have alphabet characters only");
      return false;
    }
  }

  //handling password validation
  function passid_validation(passid, mx, my) {
    var passidlen = passid.value.length;
    if (passidlen == 0 || passidlen >= my || passidlen < mx) {
      alert("please check your user password");
      passid.focus();
      return false;
    } else {
      return true;
    }
  }

  // handler for the address
  function alphaNumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;

    if (uadd.value.match(letters)) {
      return true;
    } else {
      alert("User address must be alpha numeric");
      uadd.focus();
      return false;
    }
  }

  
//maria.y@gmail.com...... it's divided into 3 parts(maria.y)=anyword with . or -(@gmail)=should have @with anyword with . or -&(.com)= should have . and should be 2 or 3

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

}
