// 实现之前，我们来了解一下，new 操作符在调用构造函数的时候，会进行一个什么样的过程：

// 创建一个全新的对象

// 这个对象被执行 [[Prototype]] 连接

// 将这个对象绑定到构造函数中的 this

// 如果函数没有返回其他对象，则 new 操作符调用的函数则会返回这个对象

function foo(name){
    this.name=name;
}

var obj={};
var fn=foo.bind(obj);
fn('jack');
console.log(obj)

