const e1 = document.querySelector(".react .emoji1 img");
const h1 = document.querySelector(".react .emoji1");
const e2 = document.querySelector(".react .emoji2 img");
const h2 = document.querySelector(".react .emoji2");
const e3 = document.querySelector(".react .emoji3 img");
const h3 = document.querySelector(".react .emoji3");
const btn = document.querySelector("#next");
const joke = document.querySelector(".box-bottom p");
const emoji = document.querySelector(".emo .laughing h1");
setTimeout(()=>{
    emoji.innerHTML="&#128518;";
},2000)
setTimeout(()=>{
    emoji.innerHTML="&#128514;";
},3000)

btn.addEventListener("click", function(){
    location.reload(); // Reloads the current page

    /*fetch("/new")
    .then(response => response.text())
    .then(data => {
        joke.innerHTML = data;
    })
    .catch(error => console.error('Error Fetching joke', error));

    // Reset the emojis after fetching a new joke
    setTimeout(() => {
        emoji.innerHTML = "&#128513;";
    }, 2000);*/

   /* setTimeout(() => {
        emoji.innerHTML = "&#128518;";
    }, 4000);

    setTimeout(() => {
        emoji.innerHTML = "&#128514;";
    }, 9000);*/
});
function Add1(){
    e1.style.display="none";
    h1.innerHTML="&#128529;";
    remove(e2, Add2);
    remove(e3, Add3);
}
function Add2(){
    e2.style.display="none";
    h2.innerHTML="&#128516;";
    remove(e1, Add1);
    remove(e3, Add3);
}
function Add3(){
    e3.style.display="none";
    h3.innerHTML="&#128514;";
    remove(e1, Add1);
    remove(e2, Add2);
}
function remove(a, func){
    a.removeEventListener("click", func);
}
e1.addEventListener("click",Add1);
e2.addEventListener("click",Add2);
e3.addEventListener("click",Add3);