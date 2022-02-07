const addNewBook = document.querySelector("#addBook");
const form = document.querySelector(".form");
const submit = document.querySelector("#submitted");
const layout = document.querySelector(".layout");
const library = document.querySelector(".library");
const bookSies = document.querySelectorAll(".books");
const delButton = document.querySelectorAll("#del-button");

// function for not letting the keyboard showing up on mobile change the height of the form  
setTimeout(function () {
    let viewheight = window.visualViewport.height;
    let viewwidth = window.visualViewport.width;
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0");
}, 300);



let originalHeight = form.offsetHeight;

// button for hiding and showing the form also changes the text for the button
addNewBook.addEventListener("click", ()=>{
    
    const addBookNew = document.querySelector("#addBook");
    if(addBookNew.textContent == "I DONT WANT TO ADD A NEW BOOK"){
        addBookNew.textContent = "ADD A NEW BOOK"
    }else {addBookNew.textContent = "I DONT WANT TO ADD A NEW BOOK"}
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    
    if(form.style.height == "0vh"){
        form.style.height = originalHeight * (100 / document.documentElement.clientHeight) + "vh"; 
        form.style.overflow = "auto"
        form.style.boxShadow =  "0px 0px 4px 4px rgb(158, 158, 158)";
        library.style.marginTop = "2rem";
    } else {
    form.style.overflow = "hidden"
    form.style.height = "0vh";
    form.style.boxShadow =  "none";
    library.style.marginTop = "0rem";
    
}
});

// primary library array
let myLibrary = [];

// new book constructor
function Book(author, title, pages, read, picture){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.picture = picture
    
}

// onload retrieve the book objects from localStorage put them in the primary library array and display them
window.addEventListener("load", () => {
    if(localStorage.length < 1) return

    let keys = Object.keys(localStorage)
    i = keys.length;

    while ( i-- ) {
        let currentKey = JSON.parse(localStorage.getItem(keys[i]))
        myLibrary.push(currentKey);
    }
    displayBooks(myLibrary)

})

// function for displaying the whole new array
function displayBooks(array){

    array.forEach(book => {
        const bookDivs = document.createElement("div");
        bookDivs.classList.add("books");
        bookDivs.setAttribute('data-index', myLibrary.indexOf(book));
        bookDivs.setAttribute('data-title', book.title);
        const readDiv = document.createElement("div");
        readDiv.classList.add("read-button-div");
        bookDivs.appendChild(readDiv);
        const readBtn = document.createElement("button"); 
        readBtn.setAttribute('id', "read-button");
        readDiv.appendChild(readBtn);
        readBtn.setAttribute('style', 'white-space: pre;');
        const tapd = document.createElement("div");
        tapd.classList.add("title-author-page-div");
        bookDivs.appendChild(tapd);
        const hTitle = document.createElement("h2");
        hTitle.textContent = book.author;
        tapd.appendChild(hTitle);
        const hAuthor = document.createElement("h2");
        hAuthor.textContent = book.title;
        tapd.appendChild(hAuthor);
        const hPages = document.createElement("h2");
        hPages.textContent = `${book.pages} pages`;
        tapd.appendChild(hPages);
        const delBtnDiv = document.createElement("div");
        delBtnDiv.classList.add("del-button-div");
        bookDivs.appendChild(delBtnDiv);
        const delBtn = document.createElement("button");
        //delete button functionality to remove the book from the array and localStorage
        delBtn.addEventListener("click", () => {
            let buttonForIndex = bookDivs.getAttribute("data-index");
            myLibrary.splice(buttonForIndex, 1);
            console.log(myLibrary);
            let bookDiv = document.querySelector(`[data-index='${buttonForIndex}']`);
            let bookTitles = bookDivs.getAttribute("data-title");
            bookDiv.remove();
            let ayy = library.querySelectorAll(`[data-index]`);
            console.log(ayy)
            for (let i = 0; i < ayy.length; i++){
                ayy[i].setAttribute('data-index', [i])
            };
            for (let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i)
                if (bookTitles == key){
                    localStorage.removeItem(key)
                }
            }
        })
        delBtn.setAttribute('id', "del-button");
        delBtnDiv.appendChild(delBtn);
        const deleteBtnImg = document.createElement("i");
        deleteBtnImg.classList.add("fa");
        deleteBtnImg.classList.add("fa-times")
        delBtn.appendChild(deleteBtnImg);
        const imgDiv = document.createElement("img");
        imgDiv.setAttribute('src', book.picture);
        imgDiv.setAttribute('alt', "book");
        imgDiv.style.width = "100%";
        imgDiv.style.height = "350px";
        const readBtnStatus = document.createElement("i");

        if(book.read == "yes"){
            readBtn.textContent = "Read \r\n";
            readBtn.textContent += "Status \r\n";
            readBtnStatus.classList.add("fa");
            readBtnStatus.classList.add("fa-check");
            readBtn.appendChild(readBtnStatus);

        }else{
            readBtn.textContent = "Read \r\n";
            readBtn.textContent += "Status \r\n";
            readBtnStatus.classList.add("fa");
            readBtnStatus.classList.add("fa-times");
            readBtn.appendChild(readBtnStatus);
    }
    //button to change the read status and update the book in the array
    readBtn.addEventListener("click", ()=>{
        let bookTitlesThis = readDiv.parentElement.getAttribute("data-title");
        if(readBtnStatus.classList.contains("fa-check")){
            readBtnStatus.classList.remove("fa-check");
            readBtnStatus.classList.add("fa-times");
            
            myLibrary.forEach(books => {
                if (books.title === bookTitlesThis) {
                   books.read = "no"
                   
                }
            })
        }else {
            readBtnStatus.classList.add("fa-check");
            readBtnStatus.classList.remove("fa-times");
            myLibrary.forEach(books => {
                if (books.title === bookTitlesThis) {
                   books.read = "yes"
                   
                }
            })
        }
    })
        bookDivs.appendChild(imgDiv);
        library.appendChild(bookDivs);
        
    })

}



// submit button functions do most of the work
submit.addEventListener("click", function sabMit () {
    const authorName = document.querySelector("#authorName");
    const bookName = document.querySelector("#bookName");
    const pageNumber = document.querySelector("#pageNumber");
    const readStatus = document.querySelector("#readStatus");
    const bookPicture = document.querySelector("#pictureURL");
    const authorDiv = document.querySelector(".author-div");
    const titleDiv = document.querySelector(".title-div");
    const pageDiv = document.querySelector(".pages-div");

    // showing red outline on empty inputs

    if(authorName.value == ""){
        authorDiv.style.boxShadow = "0px 0px 2px 2px rgb(255,0,0)"
        setTimeout(function(){ authorDiv.style.boxShadow = "0px 0px 2px 2px rgb(254, 250, 224)"; }, 2000);

    }

    if(bookName.value == ""){
        titleDiv.style.boxShadow = "0px 0px 2px 2px rgb(255,0,0)"
        setTimeout(function(){ titleDiv.style.boxShadow = "0px 0px 2px 2px rgb(254, 250, 224)"; }, 2000);

    }

    if(pageNumber.value == ""){
        pageDiv.style.boxShadow = "0px 0px 2px 2px rgb(255,0,0)"
        setTimeout(function(){ pageDiv.style.boxShadow = "0px 0px 2px 2px rgb(254, 250, 224)"; }, 2000);

    }


    // checks for empty inputs
    if (authorName.value == "" || bookName.value == "" || pageNumber.value == ""){
        return
    }


    
    if(bookPicture.value == "") {
        bookPicture.value = "Black_Book_PNG_Clipart-1048.png "
    }

    
    // new book constructor which then pushes the new book to the primary array
    let newestBook = new Book(authorName.value, bookName.value, pageNumber.value, readStatus.value, bookPicture.value)

    myLibrary.push(newestBook);
    let myNewBook = JSON.stringify(newestBook);
    localStorage.setItem(`${bookName.value}`, myNewBook);

    // deletes the previous array displayed from the website 
    while ( library.firstChild ) library.removeChild( library.firstChild );

    displayBooks(myLibrary);
    
    // refreshes the form to empty
    authorName.value = "";
    bookName.value = "";
    pageNumber.value = "";
    readStatus.value = "";
    bookPicture.value = "";

});
