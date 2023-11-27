console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const node1 = document.getElementById("node1");

node1.textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const node2 = document.getElementsByClassName("node2")[0];

node2.textContent = "I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const allh3s = document.getElementsByTagName("h3");

for (let element of allh3s) {
    element.textContent =
    "I used the getElementsByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

const newParagraph = document.createElement("p");
newParagraph.textContent =
"This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

const parent = document.querySelector("#parent");
parent.appendChild(newParagraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
// BONUS: Add a link href to the <a>

const link = document.createElement("a");
link.textContent = "I am an <a> tag";
link.href = "https://www.google.com/";
link.target = "_blank";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(link, newParagraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

const exercise3Container = document.querySelector("#exercise-container3");
const oldChild = document.querySelector("#N1");

const newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";

exercise3Container.replaceChild(newChildNode, oldChild);

// TODO: Remove the "New Child Node"
setTimeout(() =>{
    newChildNode.remove();    
}, 2000);


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

//Create the element
const newUL = document.createElement("ul");
//Modify the element
//Append the element
document.getElementById("container").append(newUL);

const newLIArray = list.map((element, index, array) => {
    const newLI = document.createElement("li");
    newLI.textContent = element;
    return newLI;
});
newUL.append(...newLIArray);


/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
    //Create a new div
    const newDiv = document.createElement("div");
    const modalCard = document.createElement("div");
    const modalPara = document.createElement("p");
    const closeButton = document.createElement("button");
        //Modify
    modalCard.classList.add("modal-card");
    modalPara.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    closeButton.textContent = "X"
    closeButton.classList.add("close-button")
    newDiv.id = "modal"
    closeButton.addEventListener("click", ()=>{
        newDiv.remove();
    });
    //Append the new div
    document.querySelector(".exercise5").append(newDiv);
    newDiv.append(modalCard);
    modalCard.append(closeButton, modalPara);
}

const modalButton = document.querySelector("#btn");
modalButton.addEventListener("click", show);