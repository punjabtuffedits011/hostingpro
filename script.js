```javascript
// ==============================
// Khalwara Village Assets
// script.js
// ==============================

// Fade-in animation for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".fileCard, .stat").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});

// ---------------------------
// Live Search
// ---------------------------

const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    document.querySelectorAll(".fileCard").forEach(card => {

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

// ---------------------------
// Copy URL Button
// ---------------------------

document.querySelectorAll(".fileCard button").forEach(button=>{

button.addEventListener("click",()=>{

const filename=
button.parentElement.querySelector("h3").innerText;

// CHANGE THIS TO YOUR GITHUB URL
const url=
"https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/" + filename;

navigator.clipboard.writeText(url);

showToast("Copied ✔");

});

});

// ---------------------------
// Toast Notification
// ---------------------------

const toast=document.createElement("div");

toast.style.position="fixed";
toast.style.bottom="30px";
toast.style.right="30px";

toast.style.padding="15px 22px";

toast.style.borderRadius="15px";

toast.style.background="rgba(20,20,20,.9)";

toast.style.color="white";

toast.style.fontWeight="600";

toast.style.opacity="0";

toast.style.transition=".4s";

toast.style.zIndex="99999";

document.body.appendChild(toast);

function showToast(text){

toast.innerHTML=text;

toast.style.opacity="1";

setTimeout(()=>{

toast.style.opacity="0";

},1800);

}

// ---------------------------
// Animated Counters
// ---------------------------

document.querySelectorAll(".stat h2").forEach(counter=>{

const target=parseInt(counter.innerText);

let value=0;

const speed=target/60;

const update=()=>{

value+=speed;

if(value<target){

counter.innerText=Math.floor(value);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});

// ---------------------------
// Mouse Glow Effect
// ---------------------------

document.addEventListener("mousemove",(e)=>{

const glow=document.querySelector(".glow.one");

glow.style.left=e.clientX-220+"px";

glow.style.top=e.clientY-220+"px";

});

// ---------------------------
// Card Hover Animation
// ---------------------------

document.querySelectorAll(".fileCard").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(50,214,255,.25),
rgba(255,255,255,.06))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});

// ---------------------------
// Console Message
// ---------------------------

console.log(
"%cKhalwara Village Assets Loaded",
"color:#00d9ff;font-size:18px;font-weight:bold;"
);
```
