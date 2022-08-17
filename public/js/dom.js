const author = document.getElementById("author")
const quote = document.getElementById("quoteText")
const authorPic = document.getElementById("authorPic")

const btnSearch = document.getElementById("searchBtn") 
const quieryInput = document.getElementById("queryInput")

btnSearch.addEventListener("click",(e) => {
    e.preventDefault();
    fetch(`/authors/${quieryInput.value}`)
    .then(data => data.json())
    .then(result => console.log(result));
})
// quieryInput.addEventListener("keypress",)

const dom = {
    renderPage(quoteText,authorName,authorImgURL){
        quote.textContent = quoteText
        author.textContent = authorName
        authorPic.attributes.src = authorImgURL
    },

}