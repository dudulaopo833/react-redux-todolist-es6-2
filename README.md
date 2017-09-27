# [ 演示地址](https://dudulaopo833.github.io/react-redux-todolist-es6-2/)
# react-redux-todolist-es6-2
This project to practice redux again with another es6 style

* [纯函数写法](https://github.com/dudulaopo833/react-redux-todolist.git)
*[ES6 最开始的写法](https://github.com/dudulaopo833/react-redux-todolist-es6.git)

* 笔记
> 1. jsx(ref='example')  -> this.refs.example / this.props.xxx       
> 2. 在列举器中(arrary.map)，一定需要一个key，不然会报错 Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `TodoListComponent`. See https://fb.me/react-warning-keys for more information.         
> 3. PropTypes.oneOf(), PropTypes.arrayOf(), PropTypes.shape()       

* 遇到的坑：
> 不能在OneTodoComponent中onClick={dispatchToggleTodoAction(id)}, 会报proxyConsole.js:56 Warning: setState(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`. 应该改成 onClick={() => {dispatchToggleTodoAction(id)}}

# redux总结：
* Action 是一个对象，描述事件，有type 和最简单的state属性
* Actiron Creator是生成action 的方法， 避免每次dispatch事件都要重新写一次事件
* reducer 是一个纯方法，用于处理事件，传入state和action，最终出来新的state
* redux 提供combineReducers和createStore(reducers)方法来总结出中Reducer中的各个state，从而生成唯一的store树;可以看combineReducers的键值名就可以知道state的结构
* react-redux 提供connect方法来连接component(传state和dispath方法)从而得到containter;并且用Provider组件来包装最外层的组件，从而整个state可以一直传下去
* container一般处理逻辑，不处理表现，用react-redux 中的connect方法来连接child component从而生成container, 生成的过程中，会把state和dispatch都转化为child component的props！ 而child component就可以用props来dispatch一个action
* container 会把自己的props 和 children 和mapStateToProps/mapDispatchToProps整合出来的整个state 传到connectedComponent那里
* 某个viewchild component）dispatch 了某个事件，首先会从事件生成器生成一个action，然后dispatch到每个reducer，从而更新相应state。 而state状态改变了，又会触发各个组件的刷新（mapStateToProps会接收到最新的state，从而导致component的props改变了）
* mapStateToProps会把整个store 树中的所有state都传过去，也就是说每个container都得到了全部的state; 但是每个component只会得到container处理过传过来的props.
* mapStateToProps和mapDispatchToProps都可以传两个参数，第一个是 state/dispatch，第二个是ownProps

