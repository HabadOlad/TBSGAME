var story = {
 attack: {
    title: "Chapter 1!",
    story: "You wake up, rolling over to a clock reading 5:00am.You, name-of-person don't know whether you've overslept or underslept. You are somewhat in a daze. ",
    choices: [
        {
        choice: "Wake up! Drink some water"
        },
        {
        choice: "Go back to bed"
        }
    ]
 }
}

document.addEventListener('DOMContentLoaded', function (){
var button = document.querySelector('#startButton')
var input = document.querySelector('#name-input')
var content = document.querySelector('#content')
button.addEventListener('click',function(){
    content.innerHTML =
     `<h1>${story.attack.title}</h1>
    <p>${story.attack.story}</p>
    <div>
    <input id="radio1" type = "radio" name="choices" />
    <label id="radio1">Wake up! Drink some water</label>
    </div>
    <div>
    <input id="radio2" type = "radio" name="choices" />
    <label id="radio2">Go back to bed</label>
    </div>
    <button>Continue!</button>
    `
})
    
})
//document is an object which contains variables and functions and allows you to pick from that object
//document then period  (document.) allows us to pick from lots of functions
//query selector allow us to go back into the html, allows you to pick out an element based on what you put in it
//# allows us to to pick an id with the query selector
// you can make the document and query selector into a variable
// event listener wait for a certain event/inputs to occur before firing off a function
//DOMContent loaded
//The Document Object Model (DOM) is a programming interface for web documents. 
//It represents the page so that programs can change the document structure, style, and content.
//function is a set of commands that run when you chose
//added event listener to the button
//when button is pressed it can be seen in console
//query selector when name is inputting into the box
//this will console log the input's value, so it would print the persons name
//console log input value can be in strings for words or the direct input variable 
//var story is an object key and the value signified by the colon
//var story will act as our document selector to reduce repitition in the code
//var story is an object to the left is the key to the right of the semi-colon is the value
//you can have an object within an object
//our choices object will be an array, an array is a list of things, 
//
