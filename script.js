const addNewBook = document.querySelector("#addBook");
const form = document.querySelector(".form");
const submit = document.querySelector("#submitted");
const layout = document.querySelector(".layout");

window.addEventListener("resize", ()=>{

    const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

    if(width <= 370){
        form.style.height = "90vh";
       
   } else if(width <= 608){
        form.style.height = "80vh";
       
   } else if(width <= 1007){
        form.style.height = "70vh";
       
   } else { form.style.height = "60vh"; }
})


addNewBook.addEventListener("click", ()=>{
    const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
    
    if(form.style.height == "0vh"){
       
        if(width <= 370){
             form.style.height = "90vh";
            
        } else if(width <= 608){
             form.style.height = "80vh";
            
        } else if(width <= 1007){
             form.style.height = "70vh";
            
        } else { form.style.height = "60vh"; }
        
        form.style.padding = "1rem 0 1rem 0";
        form.style.boxShadow =  "0px 0px 4px 4px rgb(158, 158, 158)";
        layout.style.gridTemplateRows = "0.2fr 0.2fr 1fr 1fr 0.2fr"
    } else {
    form.style.height = "0vh";
    form.style.padding = "0";
    form.style.boxShadow =  "none";
    layout.style.gridTemplateRows = "0.2fr 0.2fr 0.1fr 1fr 0.2fr"
}
});

let myLibrary = [];

function Book(author, title, pages, read, picture){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.picture = picture
    
}

submit.addEventListener("click", () => {
    const authorName = document.querySelector("#authorName");
    const bookName = document.querySelector("#bookName");
    const pageNumber = document.querySelector("#pageNumber");
    const readStatus = document.querySelector("#readStatus");
    const bookPicture = document.querySelector("#pictureURL");
    
    let newestBook = new Book(authorName.value, bookName.value, pageNumber.value, readStatus.value, bookPicture.value)

    myLibrary.push(newestBook);
    console.log(myLibrary)

    myLibrary.forEach(book => {
        const bookDivs = document.createElement("div");
        bookDivs.classList.add("books");
        bookDivs.setAttribute('data-index', myLibrary.indexOf(book));
        
    })
    
    authorName.value = "";
    bookName.value = "";
    pageNumber.value = "";
    readStatus.value = "";
    bookPicture.value = "";

});


