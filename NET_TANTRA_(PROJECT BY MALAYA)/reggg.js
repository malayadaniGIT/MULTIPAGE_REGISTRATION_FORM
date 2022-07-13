function saveData()
{
//retrive data
var image_file=document.getElementById("image_file").value;
var hsc_file=document.getElementById("hsc_file").value;
var ssc_file=document.getElementById("ssc_file").value;
var grad_file=document.getElementById("grad_file").value;
var allsem_file=document.getElementById("allsem_file").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]


    user_records.push({
        "PHOTO":image_file,
        "HSC_MARKSHEET":hsc_file,
        "SSC_MARKSHEET":ssc_file,
        "GRADUATION_MARKSHEET":grad_file,
        "PG_ALL_SEM_MARKSHEET":allsem_file
      })
      //Store data 
      localStorage.setItem("users",JSON.stringify(user_records));
}
