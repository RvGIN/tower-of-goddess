function callback(el) {
  let labelGroups = body.querySelectorAll(`[name="${el.getAttribute('name')}"]`)
  Array.from(labelGroups).forEach(el => {
    el.className = "text-4xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
  })
  
  el.className = "text-4xl bg-blue font-semibold text-white py-2 px-4 border border-transparent rounded"
}

function calculate() {
  const MAPPING = {
    "0011": "211",
    "0101": "121",
    "0110": "112",
    "1011": "022",
    "1012": "031",
    "1021": "013",
    "1101": "202",
    "1102": "301",
    "1110": "220",
    "1120": "310",
    "1201": "103",
    "1210": "130",
    "2112": "004",
    "2121": "040",
    "2211": "400",
  }
  
  
  let emptyValue = body.querySelector('input[name="empty"]:checked')?.value
  let leftValue = body.querySelector('input[name="left"]:checked')?.value
  let centerValue = body.querySelector('input[name="center"]:checked')?.value
  let rightValue = body.querySelector('input[name="right"]:checked')?.value
  
  let group = [emptyValue, leftValue, centerValue, rightValue]
  if(group.filter(data => data === undefined).length > 0) return
  
  let result = MAPPING[group.join('')]
  if(result === undefined) {
    output.innerText = "此組合不存在，請重新確認。"
  } else {
    output.innerText = result
  }
}
