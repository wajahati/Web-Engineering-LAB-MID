function gets()
{

  document.getElementById("pic").style.display = "block";
    
var name=document.getElementById("name").value;
var age =document.getElementById("age").value;
var gender; 
if (document.getElementById('male').checked) {
    gender = document.getElementById('male').value;
} else if (document.getElementById('female').checked){
  gender = document.getElementById('female').value;
} else if (document.getElementById('other').checked) {
  gender= document.getElementById('other').value;
}
// // var img;

var [imageObject] = document.getElementById("picture").files;
var url = URL.createObjectURL(imageObject);


var DOB = document.getElementById('birthday').value;
var place = document.getElementById('place').value;

var matric_In= document.getElementById('matricI').value;
var matric_From= document.getElementById('matricF').value;
var matric_To= document.getElementById('matricT').value;
var matric_Per= document.getElementById('matricP').value;

var FSC_In= document.getElementById('fscI').value;
var FSC_From= document.getElementById('fscF').value;
var FSC_To= document.getElementById('fscT').value;
var FSC_Per= document.getElementById('fscP').value;

var Bac_In= document.getElementById('bachelorsI').value;
var Bac_From= document.getElementById('bachelorsF').value;
var Bac_To= document.getElementById('bachelorsT').value;
var Bac_CGPA= document.getElementById('bachelorsC').value;

  // var data = "<p>"+name+" "+age+" "+gender+" "+DOB+" "+place+" "+name+" "+"</p>";
// 
  var data = "<span class=\"fs-4\">Name : </span><span>"+name+"</span>"
        +"<br>"
        +"<span class=\"fs-4\">Age : </span><span>"+age+"</span>"
        +"<br>"
        +"<span class=\"fs-4\">Gender : </span><span>"+gender+"</span>"
        +"<br>"
        +"<span class=\"fs-4\">Date of Birth : </span><span>"+DOB+"</span>"
        +"<br>"
        +"<span class=\"fs-4\">Place of Birth : </span><span>"+place+"</span>"
        +"<br><br>"
        +"<p class=\"fs-4\">Educational Details</p>"
        +"<span class=\"fs-4\">1)Matric : </span><br>"
        +"<span class=\"fs-3\">Institute : </span><span>"+matric_In+"</span><br>"
        +"<span class=\"fs-3\">To Year : </span><span>"+matric_To+"</span> <br>"
        +"<span class=\"fs-3\">From Year : </span><span>"+matric_From+"</span> <br>"
        +"<span class=\"fs-3\">Percentage : </span><span>"+matric_Per+"</span> <br><br>"

        +"<span class=\"fs-4\">2)FSc : </span><br>"
        +"<span class=\"fs-3\">Institute : </span><span>"+FSC_In+"</span><br>"
        +"<span class=\"fs-3\">To Year : </span><span>"+FSC_To+"</span> <br>"
        +"<span class=\"fs-3\">From Year : </span><span>"+FSC_From+"</span> <br>"
        +"<span class=\"fs-3\">Percentage : </span><span>"+FSC_Per+"</span> <br><br>"


        +"<span class=\"fs-4\">3)Graduation : </span><br>"
        +"<span class=\"fs-3\">Institute : </span><span>"+Bac_In+"</span><br>"
        +"<span class=\"fs-3\">To Year : </span><span>"+Bac_To+"</span> <br>"
        +"<span class=\"fs-3\">From Year : </span><span>"+Bac_From+"</span> <br>"
        +"<span class=\"fs-3\">Percentage : </span><span>"+Bac_CGPA+"</span> <br><br>";



var topic = "Data Entered";
// window.alert(data);
document.getElementById("dataTopic").innerHTML = topic;
document.getElementById("displayData").innerHTML = data;
document.getElementById("image").src= url;
}


function resultt(){
  var matric_Per= document.getElementById('matricP').value;
  var FSC_Per= document.getElementById('fscP').value;
  var Bac_CGPA= document.getElementById('bachelorsC').value;

  var matric_result;
  if (matric_Per>=90){
    matric_result="Excellent";
  }
  else if (matric_Per>=80) {
    matric_result="Very Good";
  }
  else if (matric_Per>=75) {
    matric_result="Good";
  }
  else if (matric_Per>=60) {
    matric_result="First Class";
  }
  else if (matric_Per>=50) {
    matric_result="Second Class";
  }
  else if (matric_Per>=50) {
    matric_result="Third Class"; 
  }
  else {
    matric_result="Fail";
  }


    var fsc_result;
  if (FSC_Per>=90){
    fsc_result="Excellent";
  }
  else if (FSC_Per>=80) {
    fsc_result="Very Good";
  }
  else if (FSC_Per>=75) {
    fsc_result="Good";
  }
  else if (FSC_Per>=60) {
    fsc_result="First Class";
  }
  else if (FSC_Per>=50) {
    fsc_result="Second Class";
  }
  else if (FSC_Per>=50) {
    fsc_result="Third Class"; 
  }
  else {
    fsc_result="Fail";
  }

  var Grad_result;
  if (Bac_CGPA*25>=90){
    Grad_result="Excellent";
  }
  else if (Bac_CGPA*25>=80) {
    Grad_result="Very Good";
  }
  else if (Bac_CGPA*25>=75) {
    Grad_result="Good";
  }
  else if (Bac_CGPA*25>=60) {
    Grad_result="First Class";
  }
  else if (Bac_CGPA*25>=50) {
    Grad_result="Second Class";
  }
  else if (Bac_CGPA*25>=50) {
    Grad_result="Third Class"; 
  }
  else {
    Grad_result="Fail";
  }

var displayResult = "<p class=\"fs-4\">Result Details</p><br>"
        +"<span class=\"fs-4\">1)Matric : </span><br>"
        +"<span class=\"fs-3\">Result : </span><span>"+matric_result+"</span><br><br>"
        +"<span class=\"fs-4\">2)FSc : </span><br>"
        +"<span class=\"fs-3\">Result : </span><span>"+fsc_result+"</span><br>"
        +"<span class=\"fs-4\">3)Bachelors : </span><br>"
        +"<span class=\"fs-3\">Result : </span><span>"+Grad_result+"</span><br>";



document.getElementById("displayData2").innerHTML = displayResult;

}
