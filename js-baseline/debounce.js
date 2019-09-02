const debounce = (fn,delay)=>{
  // 这就是为什么这个timer定义在这里
  let timer=null;
  
  return function(){
    let context = this;
    let args=arguments;
    clearTimeout(timer);
    // 如果持续触发，重新计时
    timer = setTimeout(()=>{
      fn.apply(context,args);
    },delay);
  }
}
