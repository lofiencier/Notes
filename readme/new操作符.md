##### 创建了一个空对象
var obj = new object();
##### 设置原型链
obj._proto_ = fn.prototype;
##### 让fn的this指向obj，并执行fn的函数体
var result = fn.call(obj);
##### 判断fn的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。
return obj||Constructor.appy(obj)
```
function A(name) {

    this.name = name;

}

function ObjectFactory() {

    var obj = {},

        Constructor = Array.prototype.shift.call(arguments);

    obj.__proto__ = typeof Constructor.prototype === 'number' ? Object.prototype

        : Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

}

var a = ObjectFactory(A, 'svenzeng');

alert(a.name);  //svenzeng

```
#### 所谓的new， 本身只是一个对象的复制和改写过程
