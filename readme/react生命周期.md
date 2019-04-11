#### 首次加载
getDefaultProps
getDefaultState
willmount
render
didmount

#### state props更新
willrecieve
shouldUpdate
willupdate
render
didupdate

willunmount

### V16.3+ changeLog
#### constructor (initialProps,initialState)
现在构造函数是可选的，如果您的 Babel 设置支持 class fields，就可以像这样初始化状态：
```
class MyComponent extends Component {
  state = {
    counter: 0,
  };
}
```
但是，如果需要使用 ref ，就仍需要构造函数。

#### getDerivedStateFromProps(从props派生state
即是：根据(预处理）props 设置 state 
```
static getDerivedStateFromProps(props, state) {
  return { blocks: createBlocks(props.numberOfBlocks) };
}
```
createBlocks: 对props的预处理

#### componentDidMount
如果需要加载数据，请在此处执行。 不要尝试在 constructor 中加载数据或渲染
##### 由于AJAX是异步的，所以无法保证在组件挂载之前 AJAX 请求完成解析。

#### getSnapshotBeforeUpdate [ prevProps, prevState ]
在didUpdate之前，在willUpdate之后
##### 新添加的方法，触发时刻在 render 之后，最新的渲染输出提交给 DOM 之前。
返回一个数据给 didUpdate 第三个参数 snapshot

#### didUpdate [ prevProps, prevState, snapshot ]
此snapshot来自 getSnapshotBeforeUpdate

#### willUnmount

#### static getDerivedStateFromError
##### 捕捉此组件的错误，return {} 用来设置state
请不要再这里写副作用代码，而是用didCatch


#### componentDidCatch [ err, info ]
#### 捕捉错误

#### 废除的钩子
componentWillMount
componentWillReceiveProps
componentWillUpdate