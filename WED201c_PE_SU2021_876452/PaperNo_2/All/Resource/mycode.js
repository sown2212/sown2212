function checkForm(){
    var name = document.getElementsByTagName('input')[0].value;
    var phone = document.getElementsByTagName('input')[1].value;
    var email = document.getElementsByTagName('input')[2].value;
    if(name == ""){
        alert("Fill your full name please!");
        return;
    }
    if(phone == ""){
        alert("Fill your phone number please!");
        return;
    }
    if(email == ""){
        alert("Fill your email please!");
        return;
    }
    alert("Welcome "+name+",\n"+"We will respond to you as soon as possible");
}