
// TERMS OF CONDITIONS POP UP MODAL
$(document).ready(function(){
   $('.modal').modal();
 });
 $('select').material_select();

// CHECKBOX TOGGLE TO SHOW "SUBMIT" BUTTON
$('#test5').click(function() {
  $('#submit-btn').toggleClass('disabled');
});



// SUBMIT FORM DATA TO LOCAL STORAGE
  function store(){
     var inputFirstName= document.getElementById("first_name");
     var inputLastName= document.getElementById("last_name");
     var inputAddress= document.getElementById("address");
     var inputCity= document.getElementById("city");
     var inputState= document.getElementById("state");
     var inputZipcode= document.getElementById("zipcode");
     localStorage.setItem("first_name", inputFirstName.value);
     localStorage.setItem("last_name", inputLastName.value);
     localStorage.setItem("address", inputAddress.value);
     localStorage.setItem("city", inputCity.value);
     localStorage.setItem("state", inputState.value);
     localStorage.setItem("zipcode", inputZipcode.value);
     
     console.log(inputFirstName.value, inputLastName.value, inputAddress.value, inputCity.value, inputState.value, inputZipcode.value);
    }
