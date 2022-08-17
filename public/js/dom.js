const author = document.getElementById("author")
const quote = document.getElementById("quoteText")
const authorPic = document.getElementById("authorPic")

const btnSearch = document.getElementById("searchBtn") 
const quieryInput = document.getElementById("queryInput")

btnSearch.addEventListener("click",)
quieryInput.addEventListener("keypress",)

const dom = {
    renderPage(quoteText,authorName,authorImgURL){
        quote.textContent = quoteText
        author.textContent = authorName
        authorPic.attributes.src = authorImgURL
    },

}