let div1 = document.createElement('div');
div1.className = 'demo'
div1.style.top = 'auto'

document.body.appendChild(div1);

var dragging = false

var lastY
var lastX

div1.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.onmousemove = function (e) {

    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var top = parseInt(div1.style.left) || 0
        div1.style.top = e.clientY + 'px'
        div1.style.left = e.clientX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }

    // console.log(e.clientX, e.clientY):显示鼠标位置
}
div1.onmouseup = function () {
    dragging = false
}
