let input1 = document.querySelector('.input-1')
let input2 = document.querySelector('.input-2')
let btn = document.querySelector('.btn')

input1.oninput = chkRepeat = (word) => {
 let wordLower = word.toLowerCase()
 let wordSet = new Set(wordLower)
 let lenWord = wordLower.length
 let lenWordSet = wordSet.size

  if (lenWord === lenWordSet) {
    input2.value = ''
  } else {
    input2.value = input1.value
  }
}

input1.oninput = function () {
  if (chkRepeat(input1.value) === false) {
    input2.value = input1.value
  }
}

let handlerBtn = ()=>{
    input1.value = ''
    input2.value = ''
}
btn.addEventListener('click', handlerBtn)