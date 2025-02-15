/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log(document.querySelectorAll("p"));

console.log(document.querySelector("div.site-header"));

console.log(document.getElementById("jumbotron-text"));

console.log(
  document.querySelector("div.primary-content").querySelectorAll("p")
);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.getElementById("bgrChangeBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "MistyRose";
});
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
document.getElementById("addTextBtn").addEventListener("click", () => {
  const newP = document.createElement("p");
  newP.innerText = "More Information";
  document.getElementById("mainArticles").appendChild(newP);
});
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.getElementById("largerLinksBtn").addEventListener("click", () => {
  const links = document.querySelectorAll("a");
  Array.from(links).forEach((link) => {
    link.style.fontSize = "2rem";
  });
});
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
document.getElementById("addArticleBtn").addEventListener("click", () => {
  const newI = document.createElement("p");
  newI.innerText = ;
  document.getElementById("mainArticles").appendChild(newP);
});
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
