const deleteBtn = document.querySelectorAll('.fa-trash') // Creates a constant and assigns it to a selection of all elements with a classs of fa-trash
const item = document.querySelectorAll('.item span') // Creates a constant and assigns it to a selection of span tags inside of a parent that has the class 'item'
const itemCompleted = document.querySelectorAll('.item span.completed') // Creates a constant and assigns it to a selection of spans with a class of 'completed' inside of a parent with a class of 'item'

Array.from(deleteBtn).forEach((element)=>{ // Creates an array from our selection and starts a loop using forEach()
    element.addEventListener('click', deleteItem) // Adds an event listener to the currect item that will then wait for a click and call a function called deleteItem
})

Array.from(item).forEach((element)=>{ // Creates an array from our sleection and starts a loop using forEach()
    element.addEventListener('click', markComplete) // Adds an event listener to the current item that will then wait for a click and call a function called markComplete
})

Array.from(itemCompleted).forEach((element)=>{ // Creates an array from our selection and starts a loop using forEach() 
    element.addEventListener('click', markUnComplete) // Adds an event listener to items that have been completed
})

async function deleteItem(){ // Declaring an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText // Looks inside the list item and grabs the inner text within the list span
    try{ // Starts a try block
        const response = await fetch('deleteItem', { // Creates a response variable that waits on a fetch to get data from the result of the deleteItem route
            method: 'delete', // Sets CRUD method for the route
            headers: {'Content-Type': 'application/json'}, // Specify the type of content expected - JSON
            body: JSON.stringify({  // Declare the message content being passed, and stringiy the content
              'itemFromJS': itemText // Setting the content of the body to the inner text of the list item, and naming it 'itemFromJS'
            })
          })
        const data = await response.json() // Waiting for the server to respond with JSON
        console.log(data) // Log result to console
        location.reload() // Reload page to update the display

    }catch(err){ // If error occurs, pass the error into the catch block
        console.log(err) // Log error to console
    }
}

async function markComplete(){ // Declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText // Looks inside list item and grabs the inner text within list span
    try{ // Starting a try block
        const response = await fetch('markComplete', { // Creates a reponse variable that waits on a fetch to get data from result of markComplete route
            method: 'put', // Setting CRUD method to 'update' for route
            headers: {'Content-Type': 'application/json'}, // Specify the tpye of content expected - JSON
            body: JSON.stringify({ // declare message content being passed and stringy content
                'itemFromJS': itemText // Setting content of body to inner text of list item and name it itemFromJS
            })
          })
        const data = await response.json() // Wait on JSON from response to convert
        console.log(data) // Log result to console
        location.reload() // Reload page to update display

    }catch(err){ // If error occurs, pass error into catch block
        console.log(err) // Log error to console
    }
}

async function markUnComplete(){ // Declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText // Looks inside list item and grabs the inner text within list span
    try{ // Starting a try block
        const response = await fetch('markUnComplete', { // Creates a reponse variable that waits on a fetch to get data from result of markUnComplete route
            method: 'put', // Setting CRUD method to 'update' for route
            headers: {'Content-Type': 'application/json'}, // Specify the tpye of content expected - JSON
            body: JSON.stringify({ // declare message content being passed and stringy content
                'itemFromJS': itemText // Setting content of body to inner text of list item and name it itemFromJS
            })
          })
        const data = await response.json() // Wait on JSON from response to convert
        console.log(data) // Log result to console
        location.reload() // Reload page to update display

    }catch(err){ // If error occurs, pass error into catch block
        console.log(err) // Log error to console
    }
}