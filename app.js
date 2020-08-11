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