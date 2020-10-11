$('#pills a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })


  function Alert(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var mail = document.getElementById("email2").value;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var dateee = document.getElementById("datee").value;
  if(document.getElementById('termsandcon2').checked == true)
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email2.value))
    {
      if(user=="" | pass=="" | mail=="" | firstname=="" |lastname=="" | dateee== document.getElementById("datee").defaultValue){
   alert('Please Submit Everything');
   e.preventDefault;
    }
    else{
      alert('You are now Registered');
      addData(user, firstname,lastname,mail,pass);
      e.preventDefault;
    }       
    }
    else{
      alert("You have entered an invalid email address!");
      e.preventDefault;
  }
  
  }
  else{
    alert('Please Accept the terms and conditions');
    e.preventDefault;
  }
  e.preventDefault;
  }
  function addData(user, firstname, lastname, mail,pass) {
     var table = document.getElementById('table2').getElementsByTagName('tbody')[0];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3); 
       cell1.innerHTML = user;
       cell1.className = "tablelist";
       cell2.innerHTML = `${firstname} ${lastname}`;
       cell2.className = "tablelist";
       cell3.innerHTML = mail;
       cell3.className = "tablelist";
       cell4.innerHTML = pass;
       cell4.className = "tablelist";
       cell4.style.visibility = 'hidden';
       $('.nav-pills a[href="#pills-login"]').tab('show')
  }
  function loginchanger(){
    document.getElementById("pills-login-tab").innerHTML = "Login";
    document.getElementById("pills-register-tab").style.display ="block";
  }
  function Logincheck(){
    var table = document.getElementById("table2").getElementsByTagName('tbody')[0];
    var checker;
    var user234 = document.getElementById("username23").value;
    var pass23 = document.getElementById("password23").value;
    var name23 = "";
  
    
    for(var i=1; i<table.rows.length; i++){
      if(table.rows[i].cells[0].innerHTML == user234 && table.rows[i].cells[3].innerHTML == pass23)
      {
        name23= table.rows[i].cells[1].innerHTML;
        checker = 1;
        break;
      }
      else{
        checker =0;
      }
      
    }
    if(checker == 1){
      alert(name23 +' You have Successfuly Login');
      $('.nav-pills a[href="#pills-home"]').tab('show')
      document.getElementById("pills-login-tab").innerHTML = name23.toUpperCase();
      document.getElementById("pills-register-tab").style.display ="none";
      document.getElementById("username23").value = "";
      document.getElementById("password23").value = "";
    }
    else{
      alert('Incorrect Login;');
      e.preventDefault;
    }
 
}
function adminchanger(){
  document.getElementById("pills-admin-tab").innerHTML = "Admin";
  document.getElementById("pills-login-tab").style.display ="block";
  document.getElementById("pills-register-tab").style.display ="block";
} 
function Admincheck(){
  var table2 = document.getElementById("table2").getElementsByTagName('tbody')[0];
  var checker2;
  var auser = document.getElementById("ausername").value;
    var apass = document.getElementById("apassword").value;
    var name233 = "";
      if(auser == table2.rows[0].cells[0].innerHTML && apass == table2.rows[0].cells[3].innerHTML){
        name233= table2.rows[0].cells[1].innerHTML;
        checker2 = 1;
      }
      else{
        checker2 =0;
      }
      if(checker2 == 1){
        alert(name233 +' You have Successfuly Login');
        $('.nav-pills a[href="#pills-home"]').tab('show')
        document.getElementById("pills-login-tab").style.display ="none";
        document.getElementById("pills-register-tab").style.display ="none";
        document.getElementById("pills-admin-tab").innerHTML = name233.toUpperCase();
        document.getElementById("ausername").value = "";
        document.getElementById("apassword").value = "";
      }
      else{
        alert('Incorrect Login;');
        e.preventDefault;
      }  
}



