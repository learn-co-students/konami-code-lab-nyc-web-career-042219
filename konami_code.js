const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



const codeValues = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  // your code here
  const main = document.body;
  main .addEventListener('keydown', function(e) {
    // const keyb = KeyboardEvent()
    for (let i = 0, j = codeValues.length; i < j; i ++) {
      if(codeValues[i] === e.key) {
        index++
        i++
      } else {
        index = 0;
        i = 0;
      }
    }
    alert('Nice!');
  })
}
