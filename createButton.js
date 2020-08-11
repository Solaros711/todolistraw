createButton = (elem, name, func) =>{
    var button = document.createElement('button')
    button.type = 'button'
    button.appendChild(document.createTextNode(name))
    button.onclick = func
    elem.appendChild(button)
}

module.exports = createButton