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

function init() {
  let i = 0
  document.body.addEventListener("keydown", function(e) {
    const key = e.key
    //debugger
    if (key === codes[i]) {
      i++
      if (i >= codes.length) {
        alert("Yay!!!")
        i = 0
      }
    } else {
      i = 0
      console.log("oops")
    }
  })
}
