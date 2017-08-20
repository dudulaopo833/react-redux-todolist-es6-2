# react-redux-todolist-es6-2
This project to practice redux again with another es6 style

* [纯函数写法](https://github.com/dudulaopo833/react-redux-todolist.git)
*[ES6 最开始的写法](https://github.com/dudulaopo833/react-redux-todolist-es6.git)

* Note
> jsx(ref='example')  -> this.refs.example / this.props.xxx   
> 在列举器中(arrary.map)，一定需要一个key，不然会报错 Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `TodoListComponent`. See https://fb.me/react-warning-keys for more information.     
> PropTypes.oneOf(), PropTypes.arrayOf(), PropTypes.shape()   

* 遇到的坑：
> 不能在OneTodoComponent中onClick={dispatchToggleTodoAction(id)}, 会报proxyConsole.js:56 Warning: setState(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`. 应该改成 onClick={() => {dispatchToggleTodoAction(id)}}

