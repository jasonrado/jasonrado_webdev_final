function Alert(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var mail = document.getElementById("email2").value;
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var thankyou = firstname 

if(document.getElementById('termsandcon2').checked == true)
{
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email2.value))
  {
    if(user=="" | pass=="" | mail=="" | firstname=="" |lastname==""){
 alert('Please Submit Everything');
  }
  else{
    alert('Thank you ' + firstname + ' ' +lastname);
  }
  }
  else{
    alert("You have entered an invalid email address!");
}
   
}
else{
  alert('Please Accept the terms and conditions');
}
}
