//your code here
//your code here
let input = document.getElementById("evaluatedText");
let h3 = document.getElementById("wordCount");

let count = 0;
let keycount = 0;
let spacecount = 0;

input.addEventListener("keyup", function(e) {

	let txt = input.value.trim();
  h3.textContent = txt.split(/\s+/).filter((item) => item).length;
  /*   while(e.key==" ") {
      continue;
    } */
    
})
// h3.textContent = count + 1;