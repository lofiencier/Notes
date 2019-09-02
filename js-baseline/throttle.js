const throttle = (fn,threshhole=200)=>{
  let last;
  let timer = null;
  return function(){
    let context =this;
    let args =arguments;
    let now = +new Date();
    if(last && now<last + threshhole){
      clearTimeout(timer);
      timer = setTimeout(function(){
        last = now;
        fn.apply(context,args);
      },threshhole);
    }else{
      last = now;
      fn.apply(context,args);
    }
  }
}
