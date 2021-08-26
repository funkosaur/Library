const addNewBook = document.querySelector("#addBook");
const form = document.querySelector(".form")

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