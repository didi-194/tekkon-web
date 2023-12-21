function validate(){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confpassword = document.getElementById("confpassword").value
    var agree = document.getElementById("agree").checked

    function hasWhiteSpace(input) {
        return /\s/.test(input);
    }

    if(username == "" || email == "" || password == "" || confpassword == "" || agree == false){
        alert("Input must be filled!")
    }
    else if(hasWhiteSpace(username) || username.length < 5){
        alert("Username must contain more than 5 characters and 1 word only")
    }else if(email.endsWith("@gmail.com") == false){
        alert("Email must ends with @gmail.com")
    }else if(password != confpassword){
        alert("Password and Confirm Password must be the same")
    }
    else{
        alert("Subscribed !!")
    }
}