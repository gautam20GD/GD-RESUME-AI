function analyzeResume(){

const file =
document.getElementById("resumeInput").files[0];

if(!file){

alert("Please upload resume PDF");

return;

}

document.getElementById("loadingBox").style.display =
"block";

const loadingText =
document.getElementById("loadingText");

const texts = [

"Initializing AI Engine...",
"Parsing Resume Data...",
"Extracting Skills...",
"Running ATS Algorithm...",
"Generating Hiring Insights...",
"Finalizing Analysis..."

];

let i = 0;

const interval = setInterval(()=>{

loadingText.innerHTML = texts[i];

i++;

if(i >= texts.length){

clearInterval(interval);

setTimeout(()=>{

document.getElementById("loadingBox").style.display =
"none";

document.getElementById("analysisBox").style.display =
"block";

const fileURL =
URL.createObjectURL(file);

document.getElementById("pdfViewer").src =
fileURL;

let score =
Math.floor(Math.random()*5)+90;

document.getElementById("score").innerHTML =
score + "%";

document.getElementById("ringScore").innerHTML =
score + "%";

window.scrollTo({

top:document.body.scrollHeight,

behavior:'smooth'

});

},1000);

}

},1200);

}
