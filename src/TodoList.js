import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreator'

import store from './store/index'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange)
    }
    render() { 
        return (
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} onChange={this.changeInputValue.bind(this)} style={{ width: '200px', margin: '20px 0 20px' }} />
                </div>
                <div>
                    <Button type="primary" onClick={this.clickBtn.bind(this)}>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;