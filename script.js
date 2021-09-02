const addNewBook = document.querySelector("#addBook");
const form = document.querySelector(".form");
const submit = document.querySelector("#submitted");
const layout = document.querySelector(".layout");
const library = document.querySelector(".library");
const bookSies = document.querySelectorAll(".books");
const delButton = document.querySelectorAll("#del-button");

(function () {
    const inputS = document.querySelectorAll("requiredInputs");
    inputS.forEach(input => {
        let formElements = document.forms['form'].elements['text'].value;
        console.log(input.value)
        if(input.value == "" || input.value == null || formElements.value == ""){
            console.log(input.value)
            sumbit.removeEventListener("click", sabMit)
        }
    })
  })();
  

window.addEventListener("resize", ()=>{

    const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

    if(width <= 370){
        form.style.height = "50vh";
       
   } else if(width <= 608){
        form.style.height = "50vh";
       
   } else if(width <= 1007){
        form.style.height = "50vh";
       
   } else { form.style.height = "60vh"; }
})


addNewBook.addEventListener("click", ()=>{
    const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
    
    if(form.style.height == "0vh"){
       
        if(width <= 370){
             form.style.height = "50vh";
            
        } else if(width <= 608){
             form.style.height = "50vh";
            
        } else if(width <= 1007){
             form.style.height = "50vh";
            
        } else { form.style.height = "60vh"; }
        form.style.overflow = "auto"
        form.style.padding = "1rem 0 1rem 0";
        form.style.boxShadow =  "0px 0px 4px 4px rgb(158, 158, 158)";
        library.style.marginTop = "2rem";
        
    } else {
    form.style.overflow = "hidden"
    form.style.height = "0vh";
    form.style.padding = "0";
    form.style.boxShadow =  "none";
    library.style.marginTop = "0rem";
    
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

submit.addEventListener("click", function sabMit () {
    const authorName = document.querySelector("#authorName");
    const bookName = document.querySelector("#bookName");
    const pageNumber = document.querySelector("#pageNumber");
    const readStatus = document.querySelector("#readStatus");
    const bookPicture = document.querySelector("#pictureURL");

    if (authorName.value == "" || bookName.value == "" || pageNumber.value == ""){
        return
    }

    let newestBook = new Book(authorName.value, bookName.value, pageNumber.value, readStatus.value, bookPicture.value)

    myLibrary.push(newestBook);
    console.log(myLibrary);

    while ( library.firstChild ) library.removeChild( library.firstChild );

    const inputS = document.querySelectorAll("requiredInputs");

    
     


    myLibrary.forEach(book => {
        const bookDivs = document.createElement("div");
        bookDivs.classList.add("books");
        bookDivs.setAttribute('data-index', myLibrary.indexOf(book));
        const readDiv = document.createElement("div");
        readDiv.classList.add("read-button-div");
        bookDivs.appendChild(readDiv);
        const readBtn = document.createElement("button"); 
        readBtn.setAttribute('id', "read-button");
        readDiv.appendChild(readBtn);
        readBtn.innerHTML = 'Read<br/>Status<br/><i class="fa fa-check" aria-hidden="true"></i>';
        const tapd = document.createElement("div");
        tapd.classList.add("title-author-page-div");
        bookDivs.appendChild(tapd);
        const hTitle = document.createElement("h2");
        hTitle.textContent = book.title;
        tapd.appendChild(hTitle);
        const hAuthor = document.createElement("h2");
        hAuthor.textContent = book.author;
        tapd.appendChild(hAuthor);
        const hPages = document.createElement("h2");
        hPages.textContent = `${book.pages} pages`;
        tapd.appendChild(hPages);
        const delBtnDiv = document.createElement("div");
        delBtnDiv.classList.add("del-button-div");
        bookDivs.appendChild(delBtnDiv);
        const delBtn = document.createElement("button");
        delBtn.addEventListener("click", () => {
            let buttonForIndex = delBtn.getAttribute("data-index");
            myLibrary.splice(buttonForIndex, 1);
            console.log(myLibrary);
            let bookDiv = document.querySelector(`[data-index='${buttonForIndex}']`);
            bookDiv.remove();
            let ayy = library.querySelectorAll(`[data-index]`);
            ayy.forEach(ay => {
            ay.setAttribute('data-index', buttonForIndex)
    })
        })
        delBtn.setAttribute('id', "del-button");
        delBtn.setAttribute('data-index', myLibrary.indexOf(book));
        delBtnDiv.appendChild(delBtn);
        delBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        const imgDiv = document.createElement("img");
        imgDiv.setAttribute('src', book.picture);
        imgDiv.setAttribute('alt', "book");
        imgDiv.style.width = "100%";
        imgDiv.style.height = "350px";
        bookDivs.appendChild(imgDiv);
        library.appendChild(bookDivs);
        

        
        
    })
    
    authorName.value = "";
    bookName.value = "";
    pageNumber.value = "";
    readStatus.value = "";
    bookPicture.value = "";

});


function updaTe () {
    let ayy = library.querySelectorAll(`[data-index]`);
    ayy.forEach(ay => {
        ay.setAttribute('data-index',)
    })
}



