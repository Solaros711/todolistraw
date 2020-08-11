(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var colorChanger = require('./colorChanger')
var createButton = require('./createButton')


btn_submit_info.addEventListener("click", function(event){
    let val = document.querySelector("#task_text").value

    var task = document.createElement('div')
    task.id = val
    var text = document.createElement('a')

    text.appendChild(document.createTextNode(val))
    task.appendChild(text)

    createButton(task, 'Completed', function(){
        elem = document.getElementById(val)
        elem.style.textDecoration = "line-through"
        colorChanger(val, "green")
    })

    createButton(task, 'Remove', function(){
        elem = document.getElementById(val)
        document.body.removeChild(elem)
    })

    document.body.appendChild(task)
})
},{"./colorChanger":2,"./createButton":3}],2:[function(require,module,exports){
changeColor = (elementID, color) => {
    elem = document.getElementById(elementID)
    elem.style.color = color
}

module.exports = changeColor
},{}],3:[function(require,module,exports){
createButton = (elem, name, func) =>{
    var button = document.createElement('button')
    button.type = 'button'
    button.appendChild(document.createTextNode(name))
    button.onclick = func
    elem.appendChild(button)
}

module.exports = createButton
},{}]},{},[1]);
