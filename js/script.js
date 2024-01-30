const getUserData = localStorage.getItem("userData");
const response = JSON.parse(getUserData);
// //display user data
// function userData(){

// }

//user data recive and store in storage
function userDataResive(fname,lname,address,country,phNo,state,city,village){
    const data = {
    "fname" : fname,
    "lname" : lname,
    "address" : address,
    "country" : country,
    "phNo" : phNo,
    "state" : state,
    "city" : city,
    "village" : village
    }  
    return data;
}

//user data show 
function displayData(fname,lname,address,country,phNo,state,city,village){
    document.getElementById("fname").innerText= fname; 
    document.getElementById("lname").innerText= lname; 
    document.getElementById("address").innerText= address; 
    document.getElementById("country").innerText= country; 
    document.getElementById("phNo").innerText= phNo; 
    document.getElementById("state").innerText= state; 
    document.getElementById("city").innerText= city; 
    document.getElementById("village").innerText= village; 
}



//*********************************** */
if(getUserData){

    //display from storage
    document.getElementById("fname").innerText= response.fname; 
    document.getElementById("lname").innerText= response.lname; 
    document.getElementById("address").innerText= response.address; 
    document.getElementById("country").innerText= response.country; 
    document.getElementById("phNo").innerText= response.phNo; 
    document.getElementById("state").innerText= response.state; 
    document.getElementById("city").innerText= response.city; 
    document.getElementById("village").innerText= response.village; 

}
else{
    const fname = prompt("Enter your name");
    const lname = prompt("Enter your LastName");
    const address = prompt("Enter your Address");
    const country = prompt("Enter your Countey");
    const phNo =  prompt("Enter your Phone no");
    const state = prompt("Enter your State");
    const city = prompt("Enter your city");
    const village = prompt("Enter your Village");   
    //userDta show
    displayData(fname,lname,address,country,phNo,state,city,village);
    //document.getElementById("village").innerText= village; 
    let x = userDataResive(fname,lname,address,country,phNo,state,city,village);
     localStorage.setItem("userData", JSON.stringify(x));
}
//reset button
const  reset = document.querySelector(".reset");
reset.addEventListener("click" , ()=>{
    localStorage.removeItem('userData');
    alert("Are You sure ?");
    document.getElementById("fname").innerText= ""; 
    document.getElementById("lname").innerText= ""; 
    document.getElementById("address").innerText= ""; 
    document.getElementById("country").innerText= ""; 
    document.getElementById("phNo").innerText= ""; 
    document.getElementById("state").innerText= ""; 
    document.getElementById("city").innerText= ""; 
    document.getElementById("village").innerText= ""; 
    document.querySelector(".innerContainer").style.backgroundColor = "black";
    reset.style.cssText = "backgroundColor: white ";
    alert("Storage Data Delete Successfully!");
})