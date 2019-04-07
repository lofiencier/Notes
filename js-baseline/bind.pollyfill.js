//bind() 方法会创建一个新函数，当这个新函数被调用时，它的 this 值是传递给 bind() 的第一个参数, 它的参数是 bind() 的其他参数和其原本的参数。

// function.bind(thisArg: any, ...argArray: any[]): any

// 从上面的定义来看，bind 函数有哪些功能：

// 改变原函数的 this 指向，即绑定 this

// 返回原函数的拷贝

// 注意，还有一点，当 new 调用绑定函数的时候，thisArg 参数无效。也就是 new 操作符修改 this 指向的优先级更高


//run demo
const module={
    x:23,
    getX:()=>this.x
}
var getX=module.getX;
console.log(getX());//=>undefined,因为你没有定义this.x;

var getX=module.getX.bind(module);
console.log(getX());//=>23,module.x的值

//argArray:当目标函数被调用时，预先添加到绑定函数的参数列表中的参数。非预设值，下次
const fn =(a,b,c)=>{
    console.log(a,b,c);
    return a+b+c;
};

const _fn =fn.bind(this,10);

_fn(1,3);//=>a=10,b=1,c=3

// bind(this,arguments);
//arguments: 函数预设值，函数可以一直bind，参数位会一直往后占位
const click=(e,...rest)=>{
    console.log(e);
    console.log(rest);
}

const fn=click.bind(null,'event');
const _fn=fn.bind(null,'11')
_fn(12);

// 实现
// this 的绑定。this 绑定有 4 种绑定规则：

// 默认绑定

// 隐式绑定

// 显式绑定

// new 绑定

// 显式绑定就是，运用 apply(...) 和 call(...) 方法，在调用函数时，绑定 this，也即是可以指定调用函数中的 this 值。例如：

function foo() {
    console.log(this.a);
}
var obj = { a: 2 };
foo.call(obj);      // 2

//大致实现.bind
Function.prototype.bind=function(thisArg){
    //这里的函数指的是function.bind()中的function
    //如果不是function
    if(typeof this!=='function'){
        return ;
    }
    // const self=this,
    const args=Array.prototype.slice.call(arguments,1);
    return function(){
        return this.apply(thisArg,)
    }
}

const agr=(a,b,c)=>{
    return Array.prototype.slice.call(arguments);
}
console.log(agr(1,12,2));


// MDN 的bind.pollyfill版本

Function.prototype.bind=function(onThis){
    if(typeof this!=='function'){
        throw new TypeError('Function.prototype.bind: this is not a Function');
    }
    var args=Array.prototype.slice.call(arguments, 1),
    //撇除thisArg,其实也就是{this,...rest};
        fToBind = this,
        fNop=function(){},
        fBound=function(){
            // 判断当前bind的函数是否是new出来的
            // concat预设与当前参数
            
            //因为是this.apply(this,[])，所以是用apply
            return fToBind.apply(this instanceof fNop?this:onThis,args.concat(Array.prototype.slice.call(arguments)));
        };

        if(this.prototype){
            fNop.prototype=this.prototype;
        }
        fBound.prototype=new fNop();
        return fBound;
}

// apply( )
// apply 方法传入两个参数：一个是作为函数上下文的对象，另外一个是作为函数参数所组成的数组。
func.apply(obj, ['A', 'B']); 
// call( )
// call 方法第一个参数也是作为函数上下文的对象，但是后面传入的是一个参数列表，而不是单个数组。
func.call(obj, 'C', 'D');

function test(a,b,c){
    console.log(a,b,c);
}

var fn1=test.bind(null,2);
fn1(21,3);
//2,21,3

var fn2=test.call(null,1,2,3);
//1,2,3
var fn3=test.apply(null,[2,3,3])
//2,3,3