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


let i = 0;

function init() {
  document.body.addEventListener("keydown", function(event){
    const key = event.key;
      console.log(key)
    if (key === codes[i]){

      i++;
      if (i === codes.length) {
        window.alert("Hurray")
        i = 0;
      }


    }
    else{
      index = 0;
    }
  })
}
