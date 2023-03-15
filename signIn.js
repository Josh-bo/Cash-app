function logIn(){
    var jp = JSON.parse(localStorage.getItem('allDetails'))
    console.log(jp)
       window.location.href = "bankingPage.html"
}