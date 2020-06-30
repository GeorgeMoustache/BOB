const copy = (text) => {
  var ua = navigator.userAgent
  var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
  var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  let el
  let result = false

  if (isAndroid || (!isAndroid && !isiOS)) {
    el = document.createElement('textarea')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    el.setAttribute('readonly', 'readonly')
    el.value = text
    document.body.appendChild(el)
    el.select()
  }

  if (isiOS) {
    el = document.createElement('a')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    el.style.fontSize = '12pt'
    el.textContent = text
    document.body.appendChild(el)

    const range = document.createRange()
    range.selectNode(el)

    const selection = window.getSelection()

    if (selection) {
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }

  try {
    result = document.execCommand('copy')
  } catch (e) {
    el.remove()
    return Promise.reject(e)
  }

  el.remove()
  return result ? Promise.resolve() : Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'))
}

export default copy
