//your code here
let image = document.getElementById("image");
let fullName = document.getElementById("fullName");
let additionalInfo = document.getElementById("additionalInfo");
let getAnoutherUser = document.getElementById("getUser");


getAnoutherUser.addEventListener("click", function(){
    fetch("https://randomuser.me/api/")
    .then((responce) => responce.json())
    .then((data)=>{
        let user = data.results[0];
        image.src = user.picture.large;
        fullName.innerText =  user.name.title + " " + user.name.first + " " + user.name.last;
        fullName.dataset.age = user.dob.age;
        fullName.dataset.email = user.email;
        fullName.dataset.phone = user.phone;
        additionalInfo.innerHTML = "";
    })
})

let ageButton = document.querySelector('[data-attr="age"]')
let emailButton = document.querySelector('[data-attr="email"]')
let phoneButton = document.querySelector('[data-attr="phone"]')

ageButton.addEventListener("click", function(){
    additionalInfo.innerHTML = fullName.dataset.age;
})

emailButton.addEventListener("click", function(){
    additionalInfo.innerHTML = fullName.dataset.email; 
})

phoneButton.addEventListener("click", function(){
    additionalInfo.innerHTML = fullName.dataset.phone; 
})

getAnoutherUser.click();


// fetch("https://randomuser.me/api/")
// .then((res)=>{
//     console.log(res);
// })

// fetch("https://randomuser.me/api/")
// .then((res1)=> res1.json())
// .then((data)=>{
//     console.log("Data>>", data);
// })