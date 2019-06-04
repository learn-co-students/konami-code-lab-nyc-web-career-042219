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
  // your code here
  //keep track of your index outside of event handler
  let index = 0;

  const bod = document.body
  bod.addEventListener('keydown',function onKeyDownHandler(e){
    const key = e.key

    if (key === codes[index]){
      index++
      
      if (index === codes.length){
        alert('nice')
        index = 0
      }
    }
    else {index = 0}
  })

}
