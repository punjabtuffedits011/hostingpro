```javascript
// =====================================
// FileHoster Pro
// script.js
// =====================================

// ---------- Live Search ----------

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".file-card").forEach(card=>{

let text = card.innerText.toLowerCase();

card.style.display = text.includes(value) ? "flex" : "none";

});

});

}

// ---------- Fade Animation ----------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(".feature-card,.file-card").forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition=".6s ease";

observer.observe(card);

});

// ---------- Copy File URL ----------

document.querySelectorAll(".file-card a").forEach(link=>{

link.addEventListener("contextmenu",function(e){

e.preventDefault();

navigator.clipboard.writeText(this.href);

showToast("Link copied to clipboard ✔");

});

});

// ---------- Toast ----------

const toast=document.createElement("div");

toast.id="toast";

toast.style.position="fixed";
toast.style.bottom="25px";
toast.style.right="25px";
toast.style.background="#2ea043";
toast.style.color="white";
toast.style.padding="15px 25px";
toast.style.borderRadius="10px";
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

},2000);

}

// ---------- Scroll Button ----------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.left="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#238636";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.boxShadow="0 0 20px rgba(0,0,0,.4)";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ---------- Button Hover ----------

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ---------- Current Year ----------

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" FileHoster Pro";

}

// ---------- Console ----------

console.log(

"%cFileHoster Pro Loaded Successfully",

"color:#2ea043;font-size:18px;font-weight:bold;"

);
```
