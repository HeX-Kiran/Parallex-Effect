let bigText = document.getElementById('big-text');
let name = document.getElementById("name");
let role = document.getElementById("fullstack");
// Adding Parallex Effect
window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    console.log(value);
    // bigText.style.marginLeft = value*2  + 'px';
    console.log(value)
    bigText.style.transform = "translateX(" + (value) + "px)";
    
    
})