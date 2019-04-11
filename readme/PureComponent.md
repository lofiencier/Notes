#### PureComponent相比较 Component 和 stateless component,

#### class component || stateless component
假设组件的 props 或 state 是复杂类型，如{}或[],
每次对复杂类型的任何操作，
哪怕是对复杂类型内的简单类型做出操作，并且此简单类型并没有用在render函数中
子组件都会re-render，哪怕view没有发生改变

#### PureComponent-class Component hack
只有state 或者 props的引用值（内存地址）发生改变时，才会触发re-render
实现： 在Component的 shouldUpdate 钩子中对prevProps 和 prevState 做浅比较shallow compare,如果没有发生改变时，return false 阻止re-render
imutable: 遵循不可变性，每次对props和state改变时都返回一个全新的对象

#### React.memo - stateless component hack
