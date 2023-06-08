"use strict";

//fetch function
function getInfo() {
    // declear and assign value
    const idNum = Number(document.getElementById("idnum").value);
    const searchID = document.getElementById("searchidnum");

    // fetches all users and places their names and emails 
    // in a table
    let table = document.getElementById("displayinfo");
    fetch("https://jsonplaceholder.typicode.com/users/" + idNum)
    .then(response => response.json())
    .then(data => {
        if(idNum !== data.id) {
            table.innerHTML = `User Not Found`;
        } else {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        cell1.innerHTML = data.name;
        cell2.innerHTML = data.email;
        cell3.innerHTML = data.address.street;
        cell4.innerHTML = data.address.suite;
        cell5.innerHTML = data.address.city;
        cell6.innerHTML = data.address.zipcode;
        }
    
    });
}