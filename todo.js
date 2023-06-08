"use strict";

//fetch function
function getInfo() {
    // declear and assign value
    const idNum = Number(document.getElementById("idnum").value);
    const searchID = document.getElementById("searchidnum");
    const displayInfo = document.getElementById("displayinfo");

    fetch("https://jsonplaceholder.typicode.com/todos/" + idNum)
    .then(response => response.json())
    .then(todos => {
        if (idNum !== todos.id) {
            displayInfo.innerHTML = `<div>User Not Found</div>`
        } else {
        displayInfo.innerHTML = `<div>
                            <p>User ID: ${todos.userId}</p>
                            <p>ID Number: ${todos.id}</p>
                            <p>Title: ${todos.title}</p>
                            <p>Completed: ${todos.completed}</p>
                        </div>`
        }
    })
}





