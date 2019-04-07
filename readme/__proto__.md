##### __proto__ 隐式原型
##### prototype 显式原型

#### 隐式原型指向创建这个对象的函数(constructor)的prototype

Array.constructor.prototype===Array.__proto__

##### prototype: 用来实现基于原型的继承与属性的共享。

##### __proto__: 构成原型链，同样用于实现基于原型的继承。
#### __proto__ 是每个对象都有的一个属性，而prototype是函数才会有的属性。