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
      addData(user, firstname,lastname,mail);
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
  function addData(user, firstname, lastname, mail) {
     var table = document.getElementById('table2').getElementsByTagName('tbody')[0];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       cell1.innerHTML = user;
       cell1.className = "tablelist";
       cell2.innerHTML = `${firstname} ${lastname}`;
       cell2.className = "tablelist";
       cell3.innerHTML = mail;
       cell3.className = "tablelist";
      
  }

