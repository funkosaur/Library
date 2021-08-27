const addNewBook = document.querySelector("#addBook");
const form = document.querySelector(".form");
const submit = document.querySelector("#submitted");

addNewBook.addEventListener("click", ()=>{
    if(form.style.height == "0vh"){
        form.style.height = "60vh";
        form.style.padding = "1rem 0 1rem 0";
        form.style.boxShadow =  "0px 0px 4px 4px rgb(158, 158, 158)";
    } else {
    form.style.height = "0vh";
    form.style.padding = "0";
    form.style.boxShadow =  "none";
}
});

let myLibrary = [];

submit.addEventListener("click", () => {
    const authorName = document.querySelector("#authorName");
    const bookName = document.querySelector("#bookName");
    const pageNumber = document.querySelector("#pageNumber");
    const readStatus = document.querySelector("#readStatus");
    const bookPicture = document.querySelector("#pictureURL");
    
    let newestBook = {
        author : authorName.value,
        book : bookName.value,
        pages : pageNumber.value,
        read : readStatus.value,
        picture : bookPicture.value

    }

    myLibrary.push(newestBook);
    console.log(myLibrary)

    myLibrary.forEach(book => {
        const bookDivs = document.createElement("div");
        bookDivs.classList.toggle("books");
        
    })
    
    authorName.value = "";
    bookName.value = "";
    pageNumber.value = "";
    readStatus.value = "";
    bookPicture.value = "";

});
