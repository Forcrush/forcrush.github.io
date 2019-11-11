/**
 * Created by Kay on 2016/3/8.
 */
function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
 
    if (username.value == "") {
 
        alert("Please input username");
 
    } else if (pass.value  == "") {
 
        alert("Please input password");
 
    } else if(username.value.toLowerCase() == "azure" && pass.value == "1951443"){
 
        window.location.href="homepage1.html";
 
    } else {
 
        alert("Wrong username or password")
 
    }
}