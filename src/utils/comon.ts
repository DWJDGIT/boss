// 防抖 一定时间内，多次操作变为一次
// 1. 实时查询，访问后台
// 函数防抖

function shake(fn: any, wait: number) {
  let timeOut: any
  wait = wait || 500
  return function() {
    if (timeOut) clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      fn.apply(null)
    }, wait)
  }
}


// 节流 保证一定时间内只调用一次(规定时间内，事件只允许发生一次)
// 1. 提交表单，防止用户高频点击
// 2. 高频监听事件

function throttle(event: any, time: number) {
  let timer: any = null
  return function(){
    if(!timer) {
      timer = setTimeout(() => {
        event()
        timer = null
      }, time)
    }
  }
}

// 节流 -- 时间戳


export {
  shake,
  throttle
}
