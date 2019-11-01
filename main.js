$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(2)').addClass('enter')
$('.images>img:nth-child(3)').addClass('enter')
$('.images>img:nth-child(4)').addClass('enter')

let n = 1
setInterval(() => {
    $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave') // ES6 插值
        .one('transitionend', (e) => { // one表示该监听事件(监听动画结束transitionend)只执行一次
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images>img:nth-child(${x(n + 1)})`).removeClass('enter').addClass('current')
    n += 1
}, 3000)

function x(n) {
    if (n > 4) {
        n = n % 4
        if (n === 0) {
            n = 4
        }
    }
    return n // n = 1,2,3,4
}