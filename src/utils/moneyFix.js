const moneyFix = (n)=> {
  n = Number(n)
  if (n!==(n|0)) {
    let strNum = n.toString()
    let arrNum = strNum.split('.')
    if (arrNum[1].length === 1) {
      return `${arrNum[0]}.${arrNum[1]}0`
    } else {
      return n  
    }
  } else {
    n = n + '.00'
    return n
  }
}

export default moneyFix