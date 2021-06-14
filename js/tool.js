

// 移动 对象、速度、目标、元素、回调函数（当函数执行完毕后）
function move(obj, speed, target, attr, callback) {
    clearInterval(obj.timer)
    var current = parseInt(getstyle(obj, attr));
    if (current > target) {
        speed = -speed
    }


    obj.timer = setInterval(function () {
        var oldvalue = parseInt(getstyle(obj, attr));
        var newvalue = oldvalue + speed
        if (speed > 0 && newvalue > target || speed < 0 && newvalue < target) {
            newvalue = target

        }
        obj.style[attr] = newvalue + 'px'
        if (newvalue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }

    }, 30)
}

// 获取当前对象元素
function getstyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name]
    } else {
        return obj.currentStyle[name]
    }

}


// 向对象中增加class
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn
    }
}
// 检测是否含有某个class元素
function hasClass(obj, cn) {

    var reg = new RegExp('\\b' + cn + '\\b')

    return reg.test(obj.className)

}
// 移除某个class元素
function removeClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b')

    obj.className = obj.className.replace(reg, '')
}
// 如果有有某个class元素就移除，没有就增加这个class元素
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn)
    } else {
        addClass(obj, cn)
    }
}

