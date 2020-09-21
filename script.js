const btn = document.querySelector(".btn");
 btn.addEventListener("click",()=>{
     let color = randomBg();
     document.body.style.background= color;
     btn.innerHTML=`Generating random color using hsl(hue, saturation, lightness) ${color}`;
 });
 function randomBg(){
     return `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`;
 }