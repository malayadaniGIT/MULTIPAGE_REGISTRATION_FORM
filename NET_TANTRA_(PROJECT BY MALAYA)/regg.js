function saveData()
{
//retrive data
var hscname = document.getElementById("hscname").value;
var hscboard=document.getElementById("hscboard").value;
var hscmark = document.getElementById("hscmark").value;
var sscname = document.getElementById("sscname").value;
var sscboard = document.getElementById("sscboard").value;
var sscmark= document.getElementById("sscmark").value;
var currentstudy=document.getElementById("currentstudy").value;
var graduation = document.getElementById("graduation").value;
var graduationmark = document.getElementById("graduationmark").value;
var allmark=document.getElementById("allmark").value;
var backlogs=document.getElementById("backlogs").value;
var university=document.getElementById("university").value;
var postgraduation=document.getElementById("postgraduation").value;
var postgraduationmark=document.getElementById("postgraduationmark").value;




let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    user_records.push({
        "HSC_INSTITUTE_NAME":hscname,
        "HSC_BOARD":hscboard,
        "HSC_MARK":hscmark,
        "SSC_INSTITUTE_NAME":sscname,
        "SSC_BOARD":sscboard,
        "SSC_MARK":sscmark,
        "PURSUING":currentstudy,
        "GRADUATION":graduation,
        "GRADUATION_MARK":graduationmark,
        "BACKLOGS":backlogs,
        "OVERALL_MARK":allmark,
        "GRADUATION_UNIVERSITY":university,
        "POST_GRADUATION_INSTITUTE":postgraduation,
        "POST_GRADUATION_MARK":postgraduationmark
        
       
      })
      //Store data 
      localStorage.setItem("users",JSON.stringify(user_records));
}