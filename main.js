let n
initialize()
setInterval(() => {
    makeLeave(getImage(n)) // ES6 插值
        .one('transitionend', (e) => { // one表示该监听事件(监听动画结束transitionend)只执行一次
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    n += 1
}, 6000)


// 工具函数
function getImage(n) {
    return $(`.images>img:nth-child(${x(n)})`)
}
function x(n) {
    if (n > 4) {
        n = n % 4
        if (n === 0) {
            n = 4
        }
    }
    return n // n = 1,2,3,4
}
function initialize() {
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}
function makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
    return $node
}
function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter($node) {
    $node.removeClass('current leave').addClass('enter')
    return $node
}