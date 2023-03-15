var usersDetails = []

function signUp(){
    if(fname.value == "" || lname.value == "" || mail.value == "" || pass.value == ""){
        alert("Please fill in the form correctly !!! ")
    }else{
        var eachUsersDetails = {
            firstname : fname.value,
            lastname : lname.value,
            email : mail.value,
            password : pass.value,
        }
        
        if(localStorage.getItem('allMyDetails')){
            var newDetails = JSON.parse(localStorage.getItem('allMyDetails'))
            newDetails.push(eachUsersDetails)
            localStorage.setItem('allMyDetails', JSON.stringify(usersDetails))
        }else{
            usersDetails.push(eachUsersDetails)
            localStorage.setItem('allMyDetails', JSON.stringify(usersDetails))
            console.log(usersDetails)
        }
    
    }
}


// var everybodydetails = []

// function signUp(){
//     if(fname.value == "" || lname.value == "" || mail.value == "" || pass.value == ""){
//         alert("Please fill in the form correctly")
//     }else{
//     var peopleDetails = {
//             firstname : fname.value,
//             lastname : lname.value,
//             email : mail.value,
//             password : pass.value,
//         }
        
//         if(localStorage.getItem('allDetails')){
//             var newDetails = JSON.parse(localStorage.getItem('allDetails'))
//             newDetails.push(peopleDetails)
//             localStorage.setItem('allDetails', JSON.stringify(everybodydetails))
//         }else{
//             everybodydetails.push(peopleDetails)
//             localStorage.setItem('allDetails', JSON.stringify(everybodydetails))
//         }
//         window.location.href = "signUp.html"
// }
// }


// function checkbox(){
//     window.location.href = "signUp.html"
// }