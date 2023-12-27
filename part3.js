// Part 3

// ( I tried 2 ways to get data one by using XML and by using fetch for more practise)


// First Fetch ----------------------------------------

// var allItems = [];
// async function getItem () {
//     // I didn't write method get because the default method of fetch is get 
//     var apiResponse = await fetch('https://reqres.in/api/users?page=2');
//     var result = await apiResponse.json();
//     allItems = result.data;
//     console.log(allItems);
//     displayItem();
// }
//  getItem();

//  function displayItem () {
//   var element = ``;
//     for(i=0 ; i < allItems.length ; i++) {
//     element += `<div class="item-container">
//                 <img class="item-img" src="${allItems[i].avatar}">
//                 <h2>Email</h2>
//                 <p class="item-email">${allItems[i].email}</p> 
//             </div>`
// }
// document.getElementById('box').innerHTML = element;
// }

// Second : XML ---------------------------------------------

var myHTTP = new XMLHttpRequest();
var allItems = [];
myHTTP.open('GET' , 'https://reqres.in/api/users?page=2');
 // send go to the api and get the data
myHTTP.send();
myHTTP.addEventListener('readystatechange' , function( ){
    if(myHTTP.readyState == 4) {
        allItems = JSON.parse(myHTTP.response);
        console.log(allItems);
        displayItem();
    }
} )
console.log(myHTTP.status);

function displayItem(){
  var element = ``;
    for(i=0 ; i < allItems.data.length ; i++) {
    element += `<div class="item-container">
                    <img class="item-img" src="${allItems.data[i].avatar}">
                    <h2>Email</h2>
                    <p class="item-email">${allItems.data[i].email}</p> 
             </div>`
}
document.getElementById('box').innerHTML = element;
}
