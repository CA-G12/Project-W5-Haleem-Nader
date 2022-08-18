const author = document.getElementById("author")
const quote = document.getElementById("quoteText")
const authorPic = document.getElementById("authorPic")

const btnSearch = document.getElementById("searchBtn") 
const quieryInput = document.getElementById("queryInput")

btnSearch.addEventListener("click",(e) => {
    e.preventDefault();
    fetch(`/authors/${quieryInput.value}`)
    .then(data => data.json())
    .then(result => dom(result[0]));
})


const dom = (data) => {
    console.log(data);
    // ensert you data into the DOM 
    quote.textContent = data.text;
    author.textContent = '-'+data.author;
    
}