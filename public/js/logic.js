// const xhr = new XMLHttpRequest();

// const author = document.getElementById("author")
// const quote = document.getElementById("quoteText")
// const authorPic = document.getElementById("authorPic")

// const btnSearch = document.getElementById("searchBtn") 
// const quieryInput = document.getElementById("queryInput")

// btnSearch.addEventListener("click",autocompleteQuery)
// quieryInput.addEventListener("input",autocompleteQuery)

// const dom = {
//     renderPage(quoteText,authorName,authorImgURL){
//         quote.textContent = quoteText
//         author.textContent = authorName
//         authorPic.attributes.src = authorImgURL
//     },
//     autocompleteQuery(){
//         let param = `name=${quieryInput.value}`
//         xhr.open("POST", "/author", true);
//         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         console.log(param);
//         xhr.send(param)
//     }

// }

// xhr.onreadystatechange = () =>{
//     if (document.readyState === "complete") {
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 console.log(xhr.responseText);
//                 if (xhr.status === 302) {
//                     console.log(xhr.responseText);
//                 }else {
//                     console.error(xhr.responseText);
//                   }
//             }
//         }
//         xhr.open("GET", "/result", true);
//         xhr.send();
//     }
// }

// function autocompleteQuery(){
//     let param = `${quieryInput.value}`
//     xhr.open("POST", "/author", true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.send(param)
// }