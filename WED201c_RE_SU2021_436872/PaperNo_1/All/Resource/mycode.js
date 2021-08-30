function myFunction(){
    var tour = document.getElementById('tour').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var number = document.getElementById('number').value;

    var myWindow = window.open("");
    myWindow.document.write("<title> Answer Customer </title>")
    myWindow.document.write("<h3>Welcome to book a tour in our company. Please check your booking infomation:</h3>")
    myWindow.document.write("<p> Tour: "+tour+"<p>");
    myWindow.document.write("<p> Name: "+name+"<p>");
    myWindow.document.write("<p> Phone: "+phone+"</p>");
    myWindow.document.write("<p> Number of Travelers: "+number+"</p>");
}