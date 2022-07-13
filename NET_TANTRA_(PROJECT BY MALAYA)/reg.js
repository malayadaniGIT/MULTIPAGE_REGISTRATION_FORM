function saveData()
{
//retrive data
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var dob = document.getElementById("dob").value;
var email=document.getElementById("email").value;
var male= document.getElementById("male").value;
var female= document.getElementById("female").value;
var fathername=document.getElementById("fathername").value;
var mothername=document.getElementById("mothername").value;
var number=document.getElementById("number").value;
var alternatenumber=document.getElementById("alternatenumber").value;
var nationality=document.getElementById("nationality").value;
var address=document.getElementById("address").value;
var pin=document.getElementById("pin").value;
var city=document.getElementById("city").value;
var country=document.getElementById("country").value;


let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
    user_records.push({
        "FIRST_NAME":firstname,
        "LAST_NAME":lastname,
        "DATE _":dob,
        "email":email,
        "GENDERR":male,
        "GENDER":female,
        "FATHER_NAME":fathername,
        "MOTHER_NAME":mothername,
        "NUMBER":number,
        "ALTERNATIVE_NUMBER":alternatenumber,
        "NATIONALITY":nationality,
        "ADDRESS":address,
        "CITY":city,
        "PIN":pin,
        "COUNTRY":country
      
      })
      //Store data 
      localStorage.setItem("users",JSON.stringify(user_records));
}
}